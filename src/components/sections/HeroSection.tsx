import { motion } from "framer-motion";

const aztecSpring = { type: "spring" as const, stiffness: 100, damping: 20 };

interface HeroSectionProps {
  scrollProgress: number;
}

const HeroSection = ({ scrollProgress }: HeroSectionProps) => {

  const opacity =
    scrollProgress < 0.15
      ? 1
      : Math.max(0, 1 - (scrollProgress - 0.15) / 0.15);

  return (
    <motion.section
id="home"
className="min-h-screen flex items-center justify-center px-6 relative z-10"
style={{ opacity }}
>

<div className="flex flex-col items-center text-center max-w-xl mx-auto">

<motion.h1
className="
font-display
text-4xl
sm:text-5xl
md:text-7xl
lg:text-[7rem]
text-white
tracking-[0.25em]
aztec-glow
"
>
AZTEC
</motion.h1>


<motion.p
className="
text-gray-400
text-sm
sm:text-base
md:text-lg
mt-6
tracking-[0.15em]
leading-relaxed
"
>
We Don't Just Build Sites — We Build Presence
</motion.p>


<motion.a
href="#services"
className="
mt-10
px-6
py-2
bg-white
text-black
text-xs
tracking-widest
rounded-md
hover:scale-105
transition
"
initial={{ opacity: 0, scale: 0.9 }}
animate={{ opacity: 1, scale: 1 }}
transition={{ ...aztecSpring, delay: 0.9 }}
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.98 }}
>
EXPLORE
</motion.a>


<motion.p
className="
text-gray-400
text-xs
mt-12
tracking-[0.35em]
"
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ delay: 1.4 }}
>
SCROLL TO DESCEND
</motion.p>

</div>

</motion.section>
  );
};

export default HeroSection;