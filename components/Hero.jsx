'use client'
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Button } from "@/components/ui/button"; // Import Shadcn Button
import { ArrowRight } from "lucide-react"; // Switched to ArrowRight for the button action

export default function Hero() {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section 
      className="relative h-screen w-full flex flex-col justify-center items-center bg-black overflow-hidden group"
      onMouseMove={handleMouseMove}
    >
      {/* 1. Background Grid (Data Science Vibe) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* 2. Interactive Spotlight Beam */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(197, 160, 40, 0.15),
              transparent 80%
            )
          `,
        }}
      />

      {/* 3. The Content */}
      <div className="z-10 relative text-center px-4 max-w-5xl mx-auto">
        
        {/* The "Tagline" */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-stone-400 font-mono tracking-[0.3em] text-xs md:text-sm uppercase mb-6"
        >
          Architecting Digital Empires
        </motion.p>

        {/* The Name - MASSIVE Typography */}
        <motion.h1 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="font-serif font-black text-6xl md:text-8xl lg:text-[9rem] leading-none text-transparent bg-clip-text bg-gradient-to-b from-stone-200 to-stone-600 select-none"
        >
          CHIRAG <br />
          <span className="text-stone-800 text-stroke-gold">RANE</span>
        </motion.h1>

        {/* Roles with Animated Separator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-8 flex items-center justify-center gap-4 md:gap-8 text-stone-400 font-light text-sm md:text-lg tracking-wider"
        >
          <span>Software Engineer</span>
          <span className="h-1 w-1 bg-gold-500 rounded-full"></span>
          <span>Data Scientist</span>
          <span className="h-1 w-1 bg-gold-500 rounded-full"></span>
          <span>Founder, Aarunya Studios</span>
        </motion.div>

        {/* Call to Action - Using SHADCN Button */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-12"
        >
          <Button 
            variant="outline" 
            size="lg"
            className="
              border-gold-600 text-gold-500 
              hover:bg-gold-600 hover:text-black 
              uppercase tracking-widest text-xs font-bold 
              px-10 py-6 rounded-none border-2
              transition-all duration-500 group/btn
            "
          >
            View Dossier
            <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>

      {/* 4. Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
    </section>
  );
}