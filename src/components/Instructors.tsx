'use client'
import { LampContainer } from "./ui/lamp";
import { motion } from "framer-motion";
import { AnimatedTooltip } from "./ui/animated-tooltip";


const instructors = [
    {
      id: 1,
      name: 'Elena Briggs',
      designation: 'Vocal Coach',
      image:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      id: 2,
      name: 'Marcus Reid',
      designation: 'Guitar Instructor',
      image:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80',
    },
    {
      id: 3,
      name: 'Julia Zhang',
      designation: 'Piano Teacher',
      image:
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
    },
    {
      id: 4,
      name: 'Andre Gomez',
      designation: 'Drumming Expert',
      image:
        'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
    },
  ];


function Instructors() {
  return (
    <div className="relative ">
      <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className=" mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl "
      >
        Meet Our Instructor
      </motion.h1>
       
        <p className="text-base md:text-lg text-white text-center">Discover the talented professionals who will guide your musical journey</p>
    </LampContainer>
          <div className="flex flex-col items-center justify-center w-full absolute bottom-[12rem] ">
        
          <div className="flex items-center justify-center">
      <AnimatedTooltip items={instructors} />
      </div>
       </div>
    </div>
  )
}

export default Instructors
