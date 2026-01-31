'use client'
import { motion } from "framer-motion";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-black text-white px-6">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-stone-500 uppercase tracking-widest text-sm mb-12 border-b border-stone-800 pb-4">
          Capabilities & <span className="text-stone-200">Inventory</span>
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -5, backgroundColor: "#0c0a09" }}
              className="p-6 border border-stone-900 bg-stone-950/40 hover:border-stone-700 transition-all duration-300 group cursor-crosshair flex flex-col justify-between h-48"
            >
              <div className="flex justify-between items-start">
                <span className="text-stone-600 text-[10px] uppercase tracking-tighter leading-none">
                  {skill.category}
                </span>
                <div className="w-1.5 h-1.5 rounded-full bg-stone-800 group-hover:bg-stone-400 transition-colors shadow-[0_0_8px_rgba(255,255,255,0.1)]"></div>
              </div>

              <div className="flex flex-col gap-4">
                {/* Removed grayscale and opacity filters to keep logos colorful */}
                <div className="relative w-8 h-8 transition-transform duration-300 group-hover:scale-110">
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className={`object-contain w-full h-full ${
                      ["NextJS", "ExpressJS"].includes(skill.name) 
                        ? "invert brightness-200" 
                        : ""
                    }`}
                  />
                </div>

                <div>
                  <h4 className="text-lg font-serif font-bold text-stone-400 group-hover:text-stone-100 transition-colors">
                    {skill.name}
                  </h4>
                  <div className="w-full h-px bg-stone-900 mt-2 overflow-hidden">
                    <motion.div
                      initial={{ x: "-100%" }}
                      whileInView={{ x: "0%" }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="h-full bg-stone-600 group-hover:bg-stone-200 transition-colors"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}