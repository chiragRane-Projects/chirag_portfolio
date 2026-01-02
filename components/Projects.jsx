'use client'
import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Projects() {
  return (
    <section className="py-32 px-6 bg-stone-950 relative border-t border-stone-900">
      <div className="max-w-7xl mx-auto">
        
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <div>
            <span className="text-slate-200 font-mono text-xs tracking-[0.3em] uppercase block mb-4">
              Case Files & Operations
            </span>
            <h3 className="text-5xl md:text-6xl font-serif font-bold text-stone-100">
              Selected Works
            </h3>
          </div>
        
        </div>

        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {projects.map((project) => (
            <motion.div key={project.title} variants={cardVariants}>
              <Link href={project.link} target="_blank">
                <Card className="bg-transparent border-0 overflow-hidden group rounded-none">
                  
                 
                  <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden border border-stone-800 group-hover:border-gold-600/50 transition-colors duration-500">
                
                    <div className="absolute inset-0 bg-stone-950/20 group-hover:bg-transparent z-10 transition-all duration-500" />
                    
                    <Image
                      src={project.image} 
                      alt={project.title}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out"
                    />
                    
                    {/* "Case Number" Badge */}
                    <div className="absolute top-4 right-4 z-20 bg-white/80 backdrop-blur-sm border border-stone-800 px-3 py-1">
                      <span className="text-gold-500 font-mono text-xs tracking-widest">
                        NO. {project.id}
                      </span>
                    </div>
                  </div>

                  {/* Content Area */}
                  <CardContent className="pt-6 px-0 relative">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="text-2xl font-serif font-bold text-stone-200 group-hover:text-gold-500 transition-colors duration-300">
                          {project.title}
                        </h4>
                        <p className="text-stone-500 text-xs uppercase tracking-widest mt-1">
                          {project.tagline}
                        </p>
                      </div>
                      <span className="text-stone-600 font-mono text-xs border border-stone-800 px-2 py-1">
                        {project.year}
                      </span>
                    </div>

                    <p className="text-stone-400 text-sm leading-relaxed mb-6 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tech Stack Badges */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <Badge 
                          key={t} 
                          variant="outline" 
                          className="rounded-none border-stone-700 text-stone-500 hover:border-gold-500 hover:text-gold-500 transition-colors bg-transparent"
                        >
                          {t}
                        </Badge>
                      ))}
                    </div>
                    
                    {/* Animated Line on Hover */}
                    <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold-500 group-hover:w-full transition-all duration-700 ease-in-out"></div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}