"use client"
import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'

const Navbar = () => {
  const navLinks = [
    { href: "#about", label: "About Me" },
    { href: "#projects", label: "Projects" },
    { href: "#techstack", label: "Techstack" },
    { href: "#contact", label: "Conatct Me"}
  ];
  return (
    <header className='flex flex-row p-5 md:p-8 items-center justify-between'>
          <Link href="/">
          <h2 className='font-semibold text-2xl'>
            Chirag Rane
          </h2>
          </Link>

          <nav className="hidden md:block">
          <ul className="flex flex-row items-center gap-6 text-black font-medium">
            {navLinks.map(({ href, label }) => (
              <Link key={href} href={href}>
                <li
                  className="relative transition-all duration-300
                  after:content-[''] after:absolute after:left-0 after:bottom-0
                  after:w-0 after:h-[2px] after:bg-sky-500 after:transition-all after:duration-300
                  hover:after:w-full cursor-pointer"
                >
                  {label}
                </li>
              </Link>
            ))}
            <Link href="/Chirag_Rane_Resume.pdf">
              <Button className="bg-transparent border-2 text-black border-zinc-800 hover:bg-transparent cursor-pointer rounded-sm">
                <p className="text-md">Download Resume</p>
              </Button>
            </Link>
          </ul>
        </nav>

        <main className='md:hidden'>
        <Link href="/Chirag_Rane_Resume.pdf">
              <Button className="bg-transparent border-2 text-black border-zinc-800 hover:bg-transparent cursor-pointer rounded-sm">
                <p className="text-md">Download Resume</p>
              </Button>
            </Link>
        </main>
    </header>
  )
}

export default Navbar