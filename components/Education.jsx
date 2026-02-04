'use client'
import { motion } from "framer-motion";

const education = [
  {
    level: "Degree / Specialization",
    institution: "Tilak Maharashtra Vidyapeeth",
    major: "Bachelor of Computer Applications (BCA)",
    period: "2023 — 2026 (In Progress)",
    result: "Current CGPA: 7.90",
    details: "Core focus on Computer Science, System Architecture, and Software Engineering.",
    status: "Active"
  },
  {
    level: "Higher Secondary (XII)",
    institution: "Hutatma Hirarji Jr. College, Karjat",
    major: "Commerce (HSC)",
    period: "Completed 2023",
    result: "82%",
    details: "Mastered fundamentals of Book-Keeping, Economics, and Organizational Management.",
    status: "Certified"
  },
  {
    level: "Secondary School (X)",
    institution: "St. Thomas School, Kalyan",
    major: "Maharashtra State Board",
    period: "Completed 2020",
    result: "80.2%",
    details: "Solid foundation in Algebra, Geometry, and Multi-disciplinary Sciences.",
    status: "Certified"
  }
];

export default function Education() {
  return (
    <section className="py-24 bg-black text-white px-6 border-t border-stone-900">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h3 className="text-stone-500 uppercase tracking-[0.3em] text-sm mb-4">
            Academic Background
          </h3>
          <h2 className="text-4xl font-serif font-bold text-stone-200">
            Foundational <span className="text-stone-600 italic">Clearance</span>.
          </h2>
        </div>

        <div className="space-y-12 relative">
          {/* Vertical Line */}
          <div className="absolute left-0 top-0 w-px h-full bg-stone-900 ml-[11px] md:ml-[15px]"></div>

          {education.map((edu, i) => (
            <motion.div 
              key={edu.level}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="relative pl-12 md:pl-16 group"
            >
              {/* Bullet Point */}
              <div className="absolute left-0 top-1.5 w-6 h-6 md:w-8 md:h-8 border border-stone-800 bg-black flex items-center justify-center z-10 group-hover:border-stone-500 transition-colors">
                <div className="w-1 h-1 bg-stone-600 group-hover:bg-stone-200"></div>
              </div>

              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h4 className="text-xl font-serif font-bold text-stone-100 group-hover:text-stone-300 transition-colors">
                  {edu.institution}
                </h4>
                <span className="text-stone-500 font-mono text-[10px] tracking-widest uppercase">
                  {edu.period}
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-stone-400 text-sm font-medium">{edu.major}</span>
                  <span className="text-stone-700">|</span>
                  <span className="text-stone-200 text-sm font-mono">{edu.result}</span>
                </div>
                
                <p className="text-stone-500 text-sm font-light leading-relaxed max-w-2xl">
                  {edu.details}
                </p>

                <div className="flex items-center gap-2 pt-2">
                  <span className={`w-1.5 h-1.5 rounded-full ${edu.status === 'Active' ? 'bg-green-900 animate-pulse' : 'bg-stone-800'}`}></span>
                  <span className="text-[10px] text-stone-600 uppercase tracking-tighter">{edu.status}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}