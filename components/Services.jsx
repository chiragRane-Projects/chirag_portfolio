'use client'
import { motion } from "framer-motion";
import { Terminal, Cpu, Layout, Globe, Zap, ShieldCheck } from "lucide-react";

const services = [
  {
    title: "Full-Stack Fixes",
    description: "Architecting scalable web ecosystems using Next.js and Node.js. I don't just build sites; I build assets that dominate your niche.",
    icon: <Globe className="w-6 h-6" />,
    offer: "The Full Stack Offer"
  },
  {
    title: "AI & Intelligence",
    description: "Integrating LLMs and predictive analytics into your workflow. I make your data work for you, not the other way around.",
    icon: <Cpu className="w-6 h-6" />,
    offer: "The Intelligent Edge"
  },
  {
    title: "API Architecture",
    description: "Building robust backends with FastAPI and Django. Clean, documented, and high-performance infrastructure for seamless data flow.",
    icon: <Terminal className="w-6 h-6" />,
    offer: "The Back-End Protocol"
  },
  {
    title: "UI/UX Refinement",
    description: "Transforming standard interfaces into premium digital experiences using Tailwind and Framer Motion. Elegance meets brute force.",
    icon: <Layout className="w-6 h-6" />,
    offer: "The Aesthetic Standard"
  },
  {
    title: "Database Optimization",
    description: "Restructuring PostgreSQL and MongoDB schemas for speed and reliability. I ensure your data remains accessible and secure.",
    icon: <Zap className="w-6 h-6" />,
    offer: "The Performance Pact"
  },
  {
    title: "Cloud & Deployment",
    description: "Deploying and managing assets on AWS and Linux. Secure, reliable, and automated pipelines so you never have to worry about downtime.",
    icon: <ShieldCheck className="w-6 h-6" />,
    offer: "The Infrastructure Vow"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-stone-950 px-6 border-t border-stone-900">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
            <h3 className="text-stone-500 uppercase tracking-[0.3em] text-sm mb-4">
                Professional Dealings
            </h3>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-stone-200">
                Specialized <span className="text-stone-600 italic">Operations</span>.
            </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-900">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className="bg-stone-950 p-10 group hover:bg-stone-900/50 transition-all duration-500"
            >
              <div className="text-stone-500 mb-6 group-hover:text-stone-200 transition-colors">
                {service.icon}
              </div>
              
              <h4 className="text-stone-100 font-serif text-xl font-bold mb-4 tracking-tight">
                {service.title}
              </h4>
              
              <p className="text-stone-500 text-sm leading-relaxed mb-8 font-light group-hover:text-stone-400">
                {service.description}
              </p>

              <div className="flex items-center gap-2">
                <span className="h-px w-8 bg-stone-800 group-hover:w-12 group-hover:bg-stone-500 transition-all duration-500"></span>
                <span className="text-[10px] uppercase tracking-widest text-stone-600 group-hover:text-stone-300">
                    {service.offer}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}