import { useMemo, useRef } from "react"
import { useFrame, useLoader } from "@react-three/fiber"
import * as THREE from "three"

interface MoonTerrainProps {
  scrollProgress: number
}

function noise(x:number,z:number){
 const n1=Math.sin(x*0.25)*Math.cos(z*0.25)*1.5
 const n2=Math.sin(x*0.8+1.7)*Math.cos(z*0.6+0.4)*0.8
 const n3=Math.sin(x*1.8+3.1)*Math.cos(z*1.3+2.2)*0.4

 const crater1=Math.exp(-((x-15)**2+(z-10)**2)/50)*-4
 const crater2=Math.exp(-((x+20)**2+(z-15)**2)/60)*-5
 const crater3=Math.exp(-((x-5)**2+(z+25)**2)/40)*-3

 return n1+n2+n3+crater1+crater2+crater3
}

const MoonTerrain=({scrollProgress}:MoonTerrainProps)=>{

 const meshRef=useRef<THREE.Mesh>(null)

 const moonTexture=useLoader(
  THREE.TextureLoader,
  "/textures/moon.jpg"
 )

 moonTexture.wrapS=THREE.RepeatWrapping
 moonTexture.wrapT=THREE.RepeatWrapping
 moonTexture.repeat.set(40,40)

 const geometry=useMemo(()=>{

  const geo=new THREE.PlaneGeometry(2000,2000,300,300)

  const pos=geo.attributes.position

  for(let i=0;i<pos.count;i++){

   const x=pos.getX(i)
   const y=pos.getY(i)

   const h=noise(x*0.03,y*0.03)

   pos.setZ(i,h)

  }

  geo.computeVertexNormals()

  return geo

 },[])

 useFrame(()=>{

  if(!meshRef.current)return

  const visibility=
   scrollProgress<0.35
   ?0
   :Math.min(1,(scrollProgress-0.35)/0.4)

  const mat=meshRef.current.material as THREE.MeshStandardMaterial

  mat.opacity=visibility

 })

 return(

  <mesh
   ref={meshRef}
   geometry={geometry}
   rotation={[-Math.PI/2,0,0]}
   position={[0,-50,0]}
  >

   <meshStandardMaterial
    map={moonTexture}
    roughness={1}
    metalness={0}
    transparent
    color="#bbbbbb"
   />

  </mesh>

 )

}

export default MoonTerrain