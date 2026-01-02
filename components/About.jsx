'use client'
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Dancing_Script } from "next/font/google";

// Initialize font outside the component for better performance
const pacifico = Dancing_Script({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-pacifico",
});

export default function About() {
    const containerRef = useRef(null);
    
    // Creates the slight parallax lag effect
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Image moves slower than text
    const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);

    return (
        <section id="about" ref={containerRef} className="py-32 px-6 bg-stone-950 relative overflow-hidden">
            {/* Subtle background texture */}
            <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-5 mix-blend-overlay pointer-events-none"></div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

                {/* Thematic Image Container (Parallax Effect) */}
                <motion.div style={{ y }} className="relative h-[500px] md:h-[650px] w-full hidden lg:block group">
                    <div className="absolute inset-0 border-[1px] border-gold-600/40 translate-x-6 translate-y-6 z-0 transition-transform duration-500 group-hover:translate-x-4 group-hover:translate-y-4"></div>

                    <div className="relative h-full w-full bg-black overflow-hidden z-10">
                        <Image
                            src="https://images.unsplash.com/photo-1481026469463-66327c86e544?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3"
                            alt="Structure and Order"
                            fill
                            className="object-cover opacity-60 grayscale hover:grayscale-0 hover:opacity-80 transition-all duration-1000 scale-105 group-hover:scale-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-stone-950/20"></div>
                    </div>
                </motion.div>

                {/* Text Content */}
                <div className="relative z-20">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-slate-100 font-mono uppercase tracking-[0.2em] text-sm mb-6"
                    >
                        The Consigliere of Code
                    </motion.p>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-serif font-bold text-stone-200 mb-10 leading-tight"
                    >
                        I Make Offers <br />
                        The <span className="text-stone-600">Algorithm</span> <br />
                        Can't Refuse.
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-6 text-lg text-stone-400 font-light leading-relaxed max-w-xl"
                    >
                        <p>
                            In an industry drowning in noise, I deal strictly in <strong>precision and leverage</strong>. As a Software Engineer and Data Scientist, I don't just build applications; I architect systems that secure competitive dominance.
                        </p>
                        <p>
                            I am the founder of <span className="text-stone-200 font-semibold border-b border-gold-500/50 pb-1">Aarunya Studios</span>. We operate where high-end aesthetics meet the brute force of modern tech stacks like Next.js, Python, and AI-driven analytics.
                        </p>
                        <p>
                            We don't chase trends. We set standards.
                        </p>
                    </motion.div>

                    {/* Signature / Decorative Element */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6, duration: 1 }}
                        viewport={{ once: true }}
                        className="mt-16"
                    >
                        {/* Applying the font class directly here */}
                        <div className={`${pacifico.className} text-4xl text-stone-500/80 -rotate-6 tracking-wide`}>
                            Chirag V. Rane
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}