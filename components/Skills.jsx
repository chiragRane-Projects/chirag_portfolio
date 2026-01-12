'use client'
import { motion } from "framer-motion";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section className="py-24 bg-black text-white px-6">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-gold-500 uppercase tracking-widest text-sm mb-12 border-b border-stone-800 pb-4">
          Capabilities & Inventory
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05, backgroundColor: "#1c1917" }}
              className="p-6 border border-stone-800 bg-stone-950/50 hover:border-gold-500/50 transition-colors group cursor-crosshair flex flex-col justify-between h-40"
            >
              <div className="flex justify-between items-start">
                <span className="text-stone-500 text-xs uppercase">{skill.category}</span>
                <div className="w-2 h-2 rounded-full bg-stone-800 group-hover:bg-gold-500 transition-colors"></div>
              </div>
              
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{skill.logo}</span>
                  <h4 className="text-xl font-serif font-bold text-stone-300 group-hover:text-white">
                    {skill.name}
                  </h4>
                </div>
                {/* Decorative Line */}
                <div className="w-full h-1 bg-stone-800 mt-3 overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-gold-600"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}