'use client'
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Volume2, VolumeX } from "lucide-react"; 
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function Hero() {
  // --- Intro Sequence ---
  const [showIntro, setShowIntro] = useState(true);

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
    // Hide intro after 4.5 seconds
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 4500);

    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then(() => setIsMuted(false)).catch(() => setIsMuted(true));
      }
    }

    return () => clearTimeout(timer);
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
    <>
    {/* Intro Cinematic Sequence */}
    {showIntro && (
      <motion.div 
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1.5, delay: 3 }}
      >
        <motion.p 
          className="text-stone-300 font-serif italic text-xl md:text-3xl tracking-wide max-w-lg text-center leading-relaxed px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          &quot;I believe in the web...&quot;
        </motion.p>
      </motion.div>
    )}

    <section 
      className="relative h-screen w-full flex flex-col justify-center items-center bg-black overflow-hidden group"
      onMouseMove={handleMouseMove}
    >
      <audio ref={audioRef} loop src="/theme.mp3" />

      {/* 1. Film Grain Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20 z-0 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      ></div>

      {/* 2. Venetian Blinds & Spotlight */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100 z-0 mix-blend-screen"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(197, 160, 40, 0.15),
              transparent 80%
            )
          `,
        }}
      >
        <div className="absolute inset-0 bg-[repeating-linear-gradient(180deg,transparent,transparent_10px,rgba(0,0,0,0.85)_10px,rgba(0,0,0,0.85)_20px)] mix-blend-multiply opacity-50"></div>
      </motion.div>

      {/* 3. Deep Crimson Glow Effects */}
      <div className="absolute top-1/2 left-1/4 w-[40vw] h-[40vh] bg-red-900/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

      {/* 4. Content */}
      <div className="z-10 relative text-center px-4 max-w-5xl mx-auto">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: showIntro ? 4 : 0.5 }}
          className="text-stone-400 font-mono tracking-[0.3em] text-xs md:text-sm uppercase mb-6"
        >
          Architecting Digital Empires
        </motion.p>

        <motion.h1 
          initial={{ scale: 0.9, opacity: 0, filter: "blur(10px)" }}
          animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.5, delay: showIntro ? 4.5 : 1, ease: "easeOut" }}
          className="font-serif font-black text-6xl md:text-8xl lg:text-[9rem] leading-none text-transparent bg-clip-text bg-gradient-to-b from-stone-200 via-stone-400 to-stone-700 select-none drop-shadow-2xl"
        >
          CHIRAG <br />
          <span className="text-stone-500">RANE</span>
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: showIntro ? 5.5 : 1.5 }}
          className="mt-8 flex items-center justify-center gap-4 md:gap-8 text-stone-300 font-light text-sm md:text-lg tracking-wider"
        >
          <span>Software Engineer</span>
          <span className="h-1.5 w-1.5 bg-red-800 rounded-full shadow-[0_0_8px_rgba(153,27,27,0.8)]"></span>
          <span>Data Scientist</span>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: showIntro ? 6 : 2 }}
          className="mt-16"
        >
          <Link href={"#about"}>
          <Button 
            variant="outline" 
            size="lg"
            className="
              relative overflow-hidden
              border-red-900/50 text-stone-300 bg-transparent
              hover:border-red-800 hover:text-white hover:shadow-[0_0_30px_rgba(153,27,27,0.4)]
              uppercase tracking-widest text-xs font-bold 
              px-12 py-7 rounded-none border-[1px]
              transition-all duration-700 group/btn
            "
          >
            <span className="relative z-10 flex items-center group-hover/btn:hidden">
              View Dossier
              <ArrowRight className="ml-3 h-4 w-4" />
            </span>
            <span className="relative z-10 hidden items-center group-hover/btn:flex text-red-500">
              Make an offer they can&apos;t refuse
              <ArrowRight className="ml-3 h-4 w-4" />
            </span>
            <div className="absolute inset-0 bg-red-950/20 translate-y-[100%] group-hover/btn:translate-y-0 transition-transform duration-500 ease-out z-0"></div>
          </Button>
          </Link>
        </motion.div>
      </div>

      {/* 5. Bottom Fade/Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.8)_100%)] pointer-events-none z-0"></div>
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none z-10"></div>

      {/* --- SOUND CONTROLLER --- */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: showIntro ? 6.5 : 2 }}
        className="absolute top-6 right-6 md:top-10 md:right-10 z-50"
      >
        <button 
          onClick={toggleAudio}
          className="flex items-center gap-3 text-stone-400 hover:text-red-600 transition-colors duration-500 group"
        >
          <span className="hidden md:block text-[10px] uppercase tracking-widest font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            {isMuted ? "Play Soundtrack" : "Silence"}
          </span>
          
          <div className="w-10 h-10 rounded-full border border-stone-800 group-hover:border-red-900 group-hover:bg-red-950/30 flex items-center justify-center transition-all duration-500 shadow-xl">
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 animate-pulse text-red-500" />}
          </div>
        </button>
      </motion.div>
    </section>
    </>
  );
}