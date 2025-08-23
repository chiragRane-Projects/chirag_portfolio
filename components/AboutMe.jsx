import React from 'react'

const AboutMe = () => {
    return (
        <section id="about" className="px-6 py-16 md:px-20 lg:px-40">
            <main className="flex flex-col items-center gap-6 max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold underline">
                    Hey 👋🏻
                </h2>

                <p className="text-base md:text-lg leading-relaxed text-gray-700">
                    Hi, I’m <span className="font-semibold">Chirag</span> — a full-stack developer with a love for
                    crafting clean, engaging, and user-friendly web and mobile experiences.
                </p>

                <p className="text-base md:text-lg leading-relaxed text-gray-700">
                    While I enjoy working across the stack, my sweet spot is <span className="font-semibold">backend development</span>,
                    where logic meets code and systems come to life.
                </p>

                <p className="text-base md:text-lg leading-relaxed text-gray-700">
                    Right now, I’m building real-world projects with
                    <span className="font-semibold"> MERN Stack</span> and
                    <span className="font-semibold"> FastAPI</span>,
                    while balancing that with part-time freelance projects.
                    Beyond code, I’m driven by curiosity — always experimenting,
                    learning new tools, and pushing myself to build better products.
                </p>

                <p className="text-base md:text-lg leading-relaxed text-gray-700">
                    If you’ve got an exciting idea or opportunity, I’m always open to a conversation. 🚀
                </p>
            </main>
        </section>
    )
}

export default AboutMe
