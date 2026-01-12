import { projects } from "@/lib/data";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectPage({ params }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
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
                  <Button className="bg-gold-600 hover:bg-gold-500 text-slate-300 rounded-none">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Live
                  </Button>
                </Link>
                {project.github && project.github !== "#" && (
                  <Link href={project.github} target="_blank">
                    <Button variant="outline" className="border-stone-700 text-stone-700 hover:border-gold-500 rounded-none">
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

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Image */}
        <div className="relative h-[400px] md:h-[600px] w-full mb-8 border border-stone-800">
          <Image
            src={project.images[0]}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <section>
              <h2 className="text-2xl font-serif font-bold text-gold-500 mb-6 border-b border-stone-800 pb-2">
                Mission Overview
              </h2>
              <p className="text-stone-300 leading-relaxed text-lg">
                {project.description}
              </p>
            </section>

            {/* Features */}
            <section>
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
            </section>

            {/* Challenges */}
            <section>
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
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Tech Stack */}
            <div className="border border-stone-800 p-6 bg-stone-950/30">
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
            </div>

            {/* Project Stats */}
            <div className="border border-stone-800 p-6 bg-stone-950/30">
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
                  <span className={`${
                    project.status === 'Completed' ? 'text-green-400' :
                    project.status === 'Live' ? 'text-blue-400' :
                    project.status === 'In Development' ? 'text-yellow-400' :
                    'text-stone-200'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-400">Type:</span>
                  <span className="text-stone-200">{project.type}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} - Chirag Rane Portfolio`,
    description: project.description,
  };
}