"use client"
import React, { useState } from 'react'
import { ProjectsData } from '@/projects'
import { Card, CardDescription, CardTitle } from './ui/card'
import { Button } from './ui/button'

const Projects = () => {
    return (
        <section id="projects" className="px-6 py-16 md:px-20 lg:px-40 bg-gray-50">
            <main className="flex flex-col items-center gap-12 max-w-7xl mx-auto text-center">
                {/* Section Heading */}
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold text-zinc-800">
                        My Projects
                    </h2>
                    <p className="font-light text-lg md:text-xl mt-3 text-gray-600 max-w-2xl">
                        A curated showcase of my finest work, blending innovative design, robust logic, and seamless interactivity 🚀
                    </p>
                </div>

                
                {/* Project Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                    {ProjectsData.map((data, index) => (
                        <Card
                            key={data.Name}
                            className="flex flex-col justify-between rounded-xl border border-gray-200 shadow-lg hover:shadow-xl hover:scale-[1.02] transform transition-all duration-300 h-full bg-white"
                        >
                            {/* Content */}
                            <div className="flex-1 flex flex-col p-6">
                                <CardTitle className="text-xl md:text-2xl font-semibold mb-3 text-left text-gray-900">
                                    {data.Name}
                                </CardTitle>
                                <CardDescription className="text-gray-600 mb-4 text-left text-sm md:text-base">
                                    {data.Description}
                                </CardDescription>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {data.Techstack.split(",").map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="bg-blue-100 text-blue-800 text-xs md:text-sm px-3 py-1 rounded-full font-medium"
                                        >
                                            {tech.trim()}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Bottom: Buttons */}
                            <div className="flex gap-4 p-6 pt-0 mt-auto">
                                <Button 
                                    asChild 
                                    variant="outline" 
                                    className="flex-1 border-blue-600 text-blue-600 hover:bg-blue-50 transition-colors"
                                >
                                    <a href={data.GithubURL} target="_blank" rel="noopener noreferrer">
                                        View Code
                                    </a>
                                </Button>
                                <Button 
                                    asChild 
                                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white transition-colors"
                                >
                                    <a href={data.LiveURL} target="_blank" rel="noopener noreferrer">
                                        Live View
                                    </a>
                                </Button>
                            </div>
                        </Card>
                    ))}
                </div>
            </main>
        </section>
    )
}

export default Projects