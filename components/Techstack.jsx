"use client"
import React from "react"
import { Card } from "@/components/ui/card"
import { 
    SiReact, SiNextdotjs, SiVite, SiTailwindcss, SiNodedotjs, SiExpress, 
    SiFastapi, SiFlask, SiMongodb, SiMysql, SiMariadb, SiGithub, SiGit, 
    SiVercel, SiNetlify, SiAmazonaws, SiNumpy, SiPandas, 
    SiScikitlearn, SiCanva, SiPython 
  } from "react-icons/si"
  import { FaDatabase, FaCloud } from "react-icons/fa"



const Techstack = () => {
    const techCategories = {
        Frontend: [
            { name: "React", icon: <SiReact className="text-sky-500" /> },
            { name: "NextJS", icon: <SiNextdotjs /> },
            { name: "React Native", icon: <SiReact className="text-sky-500" /> },
            { name: "Vite", icon: <SiVite className="text-purple-500" /> },
            { name: "TailwindCSS", icon: <SiTailwindcss className="text-cyan-500" /> },
        ],
        Backend: [
            { name: "NodeJS", icon: <SiNodedotjs className="text-green-600" /> },
            { name: "Express", icon: <SiExpress /> },
            { name: "FastAPI", icon: <SiFastapi className="text-green-500" /> },
            { name: "Flask", icon: <SiFlask /> },
        ],
        Databases: [
            { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
            { name: "Neon DB", icon: <FaDatabase className="text-pink-500" /> },
            { name: "MariaDB", icon: <SiMariadb className="text-blue-500" /> },
            { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
            { name: "Pocketbase", icon: <FaDatabase className="text-orange-400" /> },
        ],
        DevOps: [
            { name: "Git", icon: <SiGit className="text-red-500" /> },
            { name: "GitHub", icon: <SiGithub /> },
            { name: "Vercel", icon: <SiVercel /> },
            { name: "Netlify", icon: <SiNetlify className="text-green-500" /> },
            { name: "Render", icon: <FaCloud className="text-purple-600" /> },
            { name: "AWS EC2", icon: <FaCloud className="text-yellow-500" /> },
        ],
        "Data Science": [
            { name: "Python (DS)", icon: <SiPython className="text-yellow-500" /> },
            { name: "NumPy", icon: <SiNumpy className="text-blue-400" /> },
            { name: "Pandas", icon: <SiPandas className="text-indigo-500" /> },
            { name: "ScikitLearn", icon: <SiScikitlearn className="text-orange-500" /> },
            { name: "Matplotlib", icon: <FaDatabase className="text-pink-400" /> }, // fallback
        ],
        Tools: [
            { name: "Canva", icon: <SiCanva className="text-sky-400" /> },
        ],
    }
    return (
        <section id="techstack" className="px-6 py-16 md:px-20 lg:px-40">
            <main className="flex flex-col items-center gap-10 max-w-6xl mx-auto text-center">
                {/* Heading */}
                <div>
                    <h2 className="text-3xl font-bold underline">My Tech Stack</h2>
                    <p className="text-gray-600 mt-2 text-lg">
                        Tools, frameworks, and platforms I’ve worked with — spanning frontend, backend, databases, deployment, and data science ⚡
                    </p>
                </div>

                {/* Tech Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                    {Object.entries(techCategories).map(([category, techs]) => (
                        <Card
                            key={category}
                            className="p-6 flex flex-col gap-4 hover:shadow-lg hover:scale-[1.02] transition"
                        >
                            <h3 className="text-xl font-semibold text-left">{category}</h3>
                            <div className="flex flex-wrap gap-3">
                                {techs.map((tech, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg text-sm font-medium hover:bg-gray-200 transition"
                                    >
                                        {tech.icon}
                                        {tech.name}
                                    </div>
                                ))}
                            </div>
                        </Card>
                    ))}
                </div>
            </main>
        </section>
    )
}

export default Techstack
