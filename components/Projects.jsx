'use client'
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

// --- ANIMATION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

// --- SUB-COMPONENT: PROJECT CARD ---
function ProjectCard({ project }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  // Toggle Description
  const toggleReadMore = () => setIsExpanded(!isExpanded);

  // Image Navigation
  const nextImage = () => {
    setCurrentImgIndex((prev) => (prev === project.images.length - 1 ? 0 : prev + 1));
  };
  const prevImage = () => {
    setCurrentImgIndex((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
  };

  return (
    <motion.div variants={cardVariants}>
      <Card className="bg-transparent border-0 overflow-hidden group rounded-none">
        
        {/* --- IMAGE CAROUSEL SECTION --- */}
        <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden border border-stone-800 group-hover:border-gold-600/50 transition-colors duration-500">
          
          {/* Dark Overlay (Fades on hover) */}
          <div className="absolute inset-0 bg-stone-950/20 group-hover:bg-transparent z-10 transition-all duration-500 pointer-events-none" />
          
          {/* The Image */}
          <div className="relative h-full w-full">
             <Image
              src={project.images[currentImgIndex]}
              alt={project.title}
              fill
              className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out"
            />
          </div>

          {/* Carousel Controls (Only if multiple images) */}
          {project.images.length > 1 && (
            <div className="absolute inset-0 z-20 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-2">
              <button 
                onClick={(e) => { e.preventDefault(); prevImage(); }}
                className="p-2 bg-black/50 hover:bg-gold-600/80 text-white rounded-full transition-colors backdrop-blur-sm"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={(e) => { e.preventDefault(); nextImage(); }}
                className="p-2 bg-black/50 hover:bg-gold-600/80 text-white rounded-full transition-colors backdrop-blur-sm"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}

          {/* "Case Number" Badge */}
          <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm border border-stone-800 px-3 py-1 shadow-lg">
            <span className="text-gold-600 font-mono text-xs tracking-widest font-bold">
              NO. {project.id}
            </span>
          </div>
        </div>

        {/* --- CONTENT SECTION --- */}
        <CardContent className="pt-6 px-0 relative">
          
          {/* Header: Title + Year + Links */}
          <div className="flex justify-between items-start mb-4">
            <div>
              <div className="flex items-center gap-3">
                <Link href={`/project/${project.id}`} className="group/link flex items-center gap-2">
                  <h4 className="text-2xl font-serif font-bold text-stone-200 group-hover/link:text-gold-500 transition-colors duration-300">
                    {project.title}
                  </h4>
                  <ExternalLink className="w-4 h-4 text-stone-600 group-hover/link:text-gold-500 transition-colors" />
                </Link>
                
                {/* GitHub Icon */}
                {project.github && project.github !== "#" && (
                  <Link href={project.github} target="_blank" className="text-stone-600 hover:text-white transition-colors">
                     <Github className="w-5 h-5" />
                  </Link>
                )}
              </div>
              
              <p className="text-stone-500 text-xs uppercase tracking-widest mt-1">
                {project.tagline}
              </p>
            </div>
            
            <span className="text-stone-600 font-mono text-xs border border-stone-800 px-2 py-1">
              {project.year}
            </span>
          </div>

          {/* Description with Read More */}
          <div className="mb-6">
            <p className={`text-stone-400 text-sm leading-relaxed ${isExpanded ? "" : "line-clamp-2"}`}>
              {project.description}
            </p>
            <button 
              onClick={toggleReadMore}
              className="text-slate-200 hover:text-gold-400 text-xs uppercase tracking-widest mt-2 font-bold underline-offset-4 hover:underline transition-all"
            >
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          </div>

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <Badge 
                key={t} 
                variant="outline" 
                className="rounded-none border-stone-700 text-stone-500 hover:border-gold-500 hover:text-gold-500 transition-colors bg-transparent cursor-default"
              >
                {t}
              </Badge>
            ))}
          </div>
          
          {/* Animated Line on Hover */}
          <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold-500 group-hover:w-full transition-all duration-700 ease-in-out"></div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

// --- MAIN COMPONENT ---
export default function Projects() {
  return (
    <section className="py-32 px-6 bg-stone-950 relative border-t border-stone-900">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
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

        {/* Projects Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

      </div>
    </section>
  );
}