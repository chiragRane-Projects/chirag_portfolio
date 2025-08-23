"use client"
import React from "react"
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-transparent text-zinc-700 py-10 px-6 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Branding */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold text-white">Chirag</h2>
          <p className="text-sm text-gray-400">
            Building clean & user-friendly digital experiences 🚀
          </p>
        </div>

        {/* Quick Links */}
        <ul className="flex flex-wrap gap-6 text-sm font-medium justify-center">
          <li>
            <a href="#about" className="hover:text-zinc-800 transition">About</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-zinc-800 transition">Projects</a>
          </li>
          <li>
            <a href="#techstack" className="hover:text-zinc-800 transition">Techstack</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-zinc-800 transition">Contact</a>
          </li>
        </ul>

        {/* Socials */}
        <div className="flex gap-5 text-xl justify-center">
          <a href="https://github.com/chiragRane-Projects" target="_blank" rel="noopener noreferrer"
            className="hover:text-zinc-700 transition">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/chirag-v-rane/" target="_blank" rel="noopener noreferrer"
            className="hover:text-sky-600 transition">
            <FaLinkedin />
          </a>
          <a href="mailto:beingchirag6@gmail.com" className="hover:text-red-400 transition">
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-xs text-gray-500 mt-8">
        © {new Date().getFullYear()} Chirag. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
