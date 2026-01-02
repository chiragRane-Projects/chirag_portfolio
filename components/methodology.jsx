'use client'
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Binary, Palette } from "lucide-react";

export default function TheDuality() {
  const [hovered, setHovered] = useState(null); 
  const [isDesktop, setIsDesktop] = useState(false);

  // Hyradtion safe check for screen size
  useEffect(() => {
    const checkScreen = () => setIsDesktop(window.innerWidth >= 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <section className="relative w-full bg-black flex flex-col md:flex-row overflow-hidden border-y border-stone-800">
      
      {/* --- LEFT SIDE: THE LOGIC --- */}
      <motion.div
        onMouseEnter={() => isDesktop && setHovered('left')}
        onMouseLeave={() => isDesktop && setHovered(null)}
        animate={isDesktop ? {
          width: hovered === 'left' ? "70%" : hovered === 'right' ? "30%" : "50%",
          opacity: hovered === 'right' ? 0.4 : 1
        } : {}}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="relative h-[50vh] md:h-[80vh] w-full md:w-1/2 flex flex-col justify-center items-center bg-stone-950 border-b md:border-b-0 md:border-r border-stone-800 cursor-default md:cursor-crosshair px-4"
      >
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        {/* Content Container - Fades in on Mobile */}
        <motion.div 
          className="relative z-10 text-center max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Binary className="w-10 h-10 md:w-12 md:h-12 text-stone-600 mb-4 mx-auto" />
          <h3 className="text-3xl md:text-5xl font-serif font-bold text-stone-200 mb-2">
            The Logic
          </h3>
          <p className="text-stone-500 font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] mb-4">
            Data • Python • Backend
          </p>
          
          {/* Text Area */}
          <motion.div
            animate={isDesktop ? { 
              opacity: hovered === 'left' ? 1 : 0, 
              height: hovered === 'left' ? "auto" : 0 
            } : { opacity: 1, height: "auto" }}
            className="overflow-hidden"
          >
            <p className="text-stone-400 text-sm leading-relaxed mt-2 md:mt-0">
              "Chaos is just data waiting to be structured. I build the engine under the hood—secure, scalable, and ruthless."
            </p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* --- RIGHT SIDE: THE ART --- */}
      <motion.div
        onMouseEnter={() => isDesktop && setHovered('right')}
        onMouseLeave={() => isDesktop && setHovered(null)}
        animate={isDesktop ? {
          width: hovered === 'right' ? "70%" : hovered === 'left' ? "30%" : "50%",
          opacity: hovered === 'left' ? 0.4 : 1
        } : {}}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="relative h-[50vh] md:h-[80vh] w-full md:w-1/2 flex flex-col justify-center items-center bg-stone-900 cursor-default md:cursor-pointer overflow-hidden px-4"
      >
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-stone-900 to-gold-900/20"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
        
        {/* Content Container - Fades in on Mobile */}
        <motion.div 
          className="relative z-10 text-center max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Palette className="w-10 h-10 md:w-12 md:h-12 text-stone-600 mb-4 mx-auto" />
          <h3 className="text-3xl md:text-5xl font-serif font-bold text-slate-200 mb-2">
            The Art
          </h3>
          <p className="text-stone-500 font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] mb-4">
            Motion • React • Experience
          </p>
          
          {/* Text Area */}
          <motion.div
            animate={isDesktop ? { 
              opacity: hovered === 'right' ? 1 : 0, 
              height: hovered === 'right' ? "auto" : 0 
            } : { opacity: 1, height: "auto" }}
            className="overflow-hidden"
          >
            <p className="text-stone-300 text-sm leading-relaxed mt-2 md:mt-0">
              "Power is nothing without presentation. I craft interfaces that feel cinematic, turning users into believers."
            </p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* --- CENTER: THE INTERSECTION --- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none mix-blend-difference">
        <motion.div 
          animate={isDesktop ? { 
            scale: hovered ? 0.8 : 1, 
            opacity: hovered ? 0.5 : 1 
          } : {}}
          className="text-center"
        >
          <span className="text-stone-100 font-mono text-[10px] uppercase tracking-widest block mb-2 whitespace-nowrap">
            The Intersection
          </span>
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-stone-500 flex items-center justify-center mx-auto bg-black">
             <span className="text-lg md:text-xl font-serif text-white">&</span>
          </div>
        </motion.div>
      </div>

    </section>
  );
}