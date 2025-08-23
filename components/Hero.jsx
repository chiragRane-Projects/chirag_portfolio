import React from 'react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import Link from 'next/link'
import Image from 'next/image'
import profilePic from "@/public/profilepic.png"


const Hero = () => {
    return (
        <main className='p-5 overflow-x-hidden'>
            <section className='md:grid md:grid-cols-2 md:gap-8 flex flex-col justify-center items-center'>
                <aside className='md:px-6 flex flex-col gap-6'>
                    <Badge className="bg-sky-500 rounded-full px-3 py-2 md:px-6 md:py-3 text-center mx-auto md:mx-0">
                        <p className="text-sm sm:text-base md:text-lg font-semibold">
                            Full Stack Developer | AI-ML Engineer | Data Scientist
                        </p>
                    </Badge>

                    <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-center md:text-left'>
                        Crafting Digital Experiences <br />
                        From Concept To Code
                    </h2>

                    <h2 className='text-center md:text-left text-md text-gray-600 font-light'>
                        Hi, I am Chirag Vaibhav Rane. I build beautiful, functional and scalable digital solutions.
                    </h2>

                    <div className="flex flex-col gap-4 sm:flex-row sm:justify-start sm:items-start justify-center items-center">
                        <Link href="#projects">
                            <Button className="cursor-pointer">
                                <p className='text-md font-medium'>View Projects</p>
                            </Button>
                        </Link>

                        <Link href="mailto:beingchirag6@gmail.com">
                            <Button className="bg-transparent border-2 border-sky-500 hover:bg-transparent cursor-pointer">
                                <p className="text-black text-md font-medium">Contact Me</p>
                            </Button>
                        </Link>
                    </div>

                </aside>

                <aside className='flex justify-center items-center bg-transparent'> 
                    <Image src={profilePic} alt="profile pic" className='w-72 h-72 object-cover'/>
                </aside>
            </section>
        </main>
    )
}

export default Hero