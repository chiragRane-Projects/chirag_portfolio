'use client'
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Volume2, VolumeX } from "lucide-react"; 
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function Hero() {
  // --- Mouse Effect Logic ---
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  // --- Audio Logic ---
  // Start with true to avoid icon flickering, we update it immediately in useEffect
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3; // Set volume to 30%
      
      // ATTEMPT AUTOPLAY
      const playPromise = audioRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise.then(() => {
          // Success: Browser allowed autoplay
          setIsMuted(false);
        }).catch((error) => {
          // Fail: Browser blocked autoplay (User must click manually)
          console.log("Autoplay prevented by browser policy");
          setIsMuted(true);
        });
      }
    }
  }, []);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.play();
        setIsMuted(false);
      } else {
        audioRef.current.pause();
        setIsMuted(true);
      }
    }
  };

  return (
    <section 
      className="relative h-screen w-full flex flex-col justify-center items-center bg-black overflow-hidden group"
      onMouseMove={handleMouseMove}
    >
      {/* THE AUDIO ELEMENT */}
      <audio ref={audioRef} loop src="/theme.mp3" />

      {/* 1. Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* 2. Spotlight */}
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

      {/* 3. Content */}
      <div className="z-10 relative text-center px-4 max-w-5xl mx-auto">
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-stone-400 font-mono tracking-[0.3em] text-xs md:text-sm uppercase mb-6"
        >
          Architecting Digital Empires
        </motion.p>

        <motion.h1 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="font-serif font-black text-6xl md:text-8xl lg:text-[9rem] leading-none text-transparent bg-clip-text bg-gradient-to-b from-stone-200 to-stone-600 select-none"
        >
          CHIRAG <br />
          <span className="text-stone-400">RANE</span>
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-8 flex items-center justify-center gap-4 md:gap-8 text-stone-400 font-light text-sm md:text-lg tracking-wider"
        >
          <span>Software Engineer</span>
          <span className="h-1 w-1 bg-gold-500 rounded-full"></span>
          <span>Data Scientist</span>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-12"
        >
          <Link href={"#about"}>
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
          </Link>
        </motion.div>
      </div>

      {/* 4. Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>

      {/* --- SOUND CONTROLLER (Top Right, Slate-200) --- */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute top-6 right-6 md:top-10 md:right-10 z-50"
      >
        <button 
          onClick={toggleAudio}
          className="flex items-center gap-3 text-slate-200 hover:text-gold-500 transition-colors group"
        >
          {/* Label */}
          <span className="hidden md:block text-[10px] uppercase tracking-widest font-mono opacity-0 group-hover:opacity-100 transition-opacity">
            {isMuted ? "Play Soundtrack" : "Pause"}
          </span>
          
          {/* Icon Circle */}
          <div className="w-10 h-10 rounded-full border border-slate-200/30 group-hover:border-gold-500 flex items-center justify-center transition-all duration-300">
            {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5 animate-pulse" />}
          </div>
        </button>
      </motion.div>

    </section>
  );
}