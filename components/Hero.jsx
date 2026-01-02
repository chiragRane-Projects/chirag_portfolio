'use client'
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Volume2, VolumeX } from "lucide-react"; // Import Volume icons
import { useState, useRef, useEffect } from "react";

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
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3; // Set volume low (30%) so it's not annoying
      
      // Try to play immediately
      const playPromise = audioRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise.then(() => {
          // Auto-play started
          setIsMuted(false);
        }).catch((error) => {
          // Auto-play was prevented by browser
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
      {/* THE AUDIO ELEMENT (Hidden) */}
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
          <span className="text-stone-800 text-stroke-gold">RANE</span>
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
          <span className="h-1 w-1 bg-gold-500 rounded-full"></span>
          <span>Founder, Aarunya Studios</span>
        </motion.div>

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

      {/* --- SOUND CONTROLLER --- */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 right-10 z-50 hidden md:block"
      >
        <button 
          onClick={toggleAudio}
          className="flex items-center gap-3 text-stone-500 hover:text-gold-500 transition-colors group"
        >
          <span className="text-[10px] uppercase tracking-widest font-mono opacity-0 group-hover:opacity-100 transition-opacity">
            {isMuted ? "Play Soundtrack" : "Mute"}
          </span>
          <div className="w-10 h-10 rounded-full border border-stone-800 group-hover:border-gold-500 flex items-center justify-center transition-colors">
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 animate-pulse" />}
          </div>
        </button>
      </motion.div>

      {/* Mobile Sound Control (Simpler position) */}
      <div className="absolute top-6 right-6 z-50 md:hidden">
         <button onClick={toggleAudio} className="text-gold-500">
            {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
         </button>
      </div>

    </section>
  );
}