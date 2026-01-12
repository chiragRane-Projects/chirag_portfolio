'use client'
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function ProjectDetail({ project }) {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const nextImage = () => {
    setCurrentImgIndex((prev) => (prev === project.images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImgIndex((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <p className="text-stone-400">Project not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="border-b border-stone-800 bg-stone-950/50">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <Link href="/#projects">
            <Button variant="ghost" className="text-stone-400 hover:text-gold-500 p-0 mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Button>
          </Link>
          
          <div className="flex flex-col md:flex-row justify-between items-start gap-6">
            <div>
              <span className="text-gold-500 font-mono text-xs tracking-[0.3em] uppercase block mb-2">
                Case File No. {project.id}
              </span>
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-stone-100 mb-4">
                {project.title}
              </h1>
              <p className="text-stone-400 text-lg mb-6">{project.tagline}</p>
              
              <div className="flex gap-4">
                <Link href={project.link} target="_blank">
                  <Button className="bg-gold-600 hover:bg-gold-500 text-black rounded-none">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Live
                  </Button>
                </Link>
                {project.github && project.github !== "#" && (
                  <Link href={project.github} target="_blank">
                    <Button variant="outline" className="border-stone-700 text-stone-300 hover:border-gold-500 rounded-none">
                      <Github className="w-4 h-4 mr-2" />
                      Source Code
                    </Button>
                  </Link>
                )}
              </div>
            </div>
            
            <div className="text-right">
              <span className="text-stone-500 font-mono text-sm border border-stone-800 px-3 py-2">
                {project.year}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="relative h-[400px] md:h-[600px] w-full mb-8 border border-stone-800">
          <Image
            src={project.images[currentImgIndex]}
            alt={project.title}
            fill
            className="object-cover"
          />
          
          {/* Navigation */}
          {project.images.length > 1 && (
            <div className="absolute inset-0 flex justify-between items-center px-4">
              <button 
                onClick={prevImage}
                className="p-3 bg-black/50 hover:bg-gold-600/80 text-white rounded-full transition-colors backdrop-blur-sm"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={nextImage}
                className="p-3 bg-black/50 hover:bg-gold-600/80 text-white rounded-full transition-colors backdrop-blur-sm"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          )}
          
          {/* Image Counter */}
          <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm px-3 py-1 text-sm">
            {currentImgIndex + 1} / {project.images.length}
          </div>
        </div>

        {/* Image Thumbnails */}
        {project.images.length > 1 && (
          <div className="flex gap-4 mb-16 overflow-x-auto">
            {project.images.map((img, index) => (
              <button
                key={index}
                onClick={() => setCurrentImgIndex(index)}
                className={`relative w-24 h-16 border-2 transition-colors ${
                  index === currentImgIndex ? 'border-gold-500' : 'border-stone-800'
                }`}
              >
                <Image src={img} alt={`${project.title} ${index + 1}`} fill className="object-cover" />
              </button>
            ))}
          </div>
        )}

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl font-serif font-bold text-gold-500 mb-6 border-b border-stone-800 pb-2">
                Mission Overview
              </h2>
              <p className="text-stone-300 leading-relaxed text-lg">
                {project.description}
              </p>
            </motion.section>

            {/* Features */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-2xl font-serif font-bold text-gold-500 mb-6 border-b border-stone-800 pb-2">
                Key Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.features?.map((feature, index) => (
                  <div key={index} className="border border-stone-800 p-6 bg-stone-950/30">
                    <h3 className="text-lg font-semibold text-stone-200 mb-3">{feature.title}</h3>
                    <p className="text-stone-400 text-sm">{feature.description}</p>
                  </div>
                )) || (
                  <p className="text-stone-400 col-span-2">Features information will be added soon.</p>
                )}
              </div>
            </motion.section>

            {/* Challenges */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h2 className="text-2xl font-serif font-bold text-gold-500 mb-6 border-b border-stone-800 pb-2">
                Challenges & Solutions
              </h2>
              <div className="space-y-6">
                {project.challenges?.map((challenge, index) => (
                  <div key={index} className="border-l-2 border-gold-600 pl-6">
                    <h3 className="text-lg font-semibold text-stone-200 mb-2">{challenge.title}</h3>
                    <p className="text-stone-400 mb-3">{challenge.problem}</p>
                    <p className="text-stone-300 text-sm">
                      <span className="text-gold-500 font-semibold">Solution:</span> {challenge.solution}
                    </p>
                  </div>
                )) || (
                  <p className="text-stone-400">Challenge details will be added soon.</p>
                )}
              </div>
            </motion.section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="border border-stone-800 p-6 bg-stone-950/30"
            >
              <h3 className="text-lg font-serif font-bold text-gold-500 mb-4">
                Arsenal Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <Badge 
                    key={tech} 
                    variant="outline" 
                    className="rounded-none border-stone-700 text-stone-400 bg-transparent"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </motion.div>

            {/* Project Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="border border-stone-800 p-6 bg-stone-950/30"
            >
              <h3 className="text-lg font-serif font-bold text-gold-500 mb-4">
                Operation Details
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-stone-400">Year:</span>
                  <span className="text-stone-200">{project.year}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-400">Status:</span>
                  <span className="text-green-400">Completed</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-400">Type:</span>
                  <span className="text-stone-200">Web Application</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}