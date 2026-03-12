import { useRef,useEffect,useCallback } from "react"
import { Canvas,useFrame,useThree } from "@react-three/fiber"
import Starfield from "./Starfield"
import CosmicDust from "./CosmicDust"
import PlanetarySystem from "./PlanetarySystem"
import * as THREE from "three"

import MoonTerrain from "./MoonTerrain"

interface CameraControllerProps{
 scrollProgress:number
 mousePos:React.MutableRefObject<{x:number;y:number}>
}

const CameraController=({scrollProgress,mousePos}:CameraControllerProps)=>{

 const {camera}=useThree()

 const targetPos=useRef(new THREE.Vector3())
 const targetLook=useRef(new THREE.Vector3())

 useFrame(()=>{

  const p=scrollProgress

  if(p<0.3){

  targetPos.current.set(
 mousePos.current.x * 2,
 25 + mousePos.current.y * 2,
 70
)

   targetLook.current.set(0,-20,0)

  }

  else if(p<0.6){

   const t=(p-0.3)/0.3

   targetPos.current.set(
    mousePos.current.x*0.5,
    THREE.MathUtils.lerp(20,-20,t),
    THREE.MathUtils.lerp(80,30,t)
   )

   targetLook.current.set(
    0,
    THREE.MathUtils.lerp(-20,-40,t),
    0
   )

  }

  else{

   const t=(p-0.6)/0.4

   targetPos.current.set(
    mousePos.current.x*0.1,
    THREE.MathUtils.lerp(-20,-47,t),
    THREE.MathUtils.lerp(30,8,t)
   )

   targetLook.current.set(
    0,
    -50,
    THREE.MathUtils.lerp(0,-20,t)
   )

  }

  camera.position.lerp(targetPos.current,0.04)

  camera.lookAt(targetLook.current)

 })

 return null
}

const Lighting=()=>{

 return(
 <>
  <ambientLight intensity={0.2}/>
  <directionalLight
   position={[20,40,20]}
   intensity={2}
   color="#ffffff"
  />
 </>
 )

}

const SceneContents = ({ scrollProgress, mousePos }: any) => {

 return (
  <>
   <color attach="background" args={["#020617"]} />

   <CameraController
    scrollProgress={scrollProgress}
    mousePos={mousePos}
   />

   <Lighting />

   {/* النجوم */}
   <Starfield mousePos={mousePos} />

   {/* غبار فضائي */}
   <CosmicDust mousePos={mousePos} />

   {/* الكواكب */}
   <PlanetarySystem scrollProgress={scrollProgress} />

   {/* سطح القمر */}
   <MoonTerrain scrollProgress={scrollProgress} />
  </>
 )
}

interface SpaceSceneProps{
 scrollProgress:number
}

const SpaceScene=({scrollProgress}:SpaceSceneProps)=>{

 const mousePos=useRef({x:0,y:0})

 const handleMouseMove=useCallback((e:MouseEvent)=>{

  mousePos.current.x=(e.clientX/window.innerWidth-0.5)*2
  mousePos.current.y=(e.clientY/window.innerHeight-0.5)*2

 },[])

 useEffect(()=>{

  window.addEventListener("mousemove",handleMouseMove)

  return()=>window.removeEventListener("mousemove",handleMouseMove)

 },[handleMouseMove])

 return(

 <div className="fixed inset-0 z-0">

  <Canvas
   camera={{position:[0,20,80],fov:60}} 
   gl={{antialias:true}}
   dpr={[1,1.5]}
  >

   <SceneContents
    scrollProgress={scrollProgress}
    mousePos={mousePos}
   />

  </Canvas>

 </div>

 )

}

export default SpaceScene