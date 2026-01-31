export default function Footer() {
    return (
        <footer className="bg-black text-stone-400 py-12 px-6 border-t border-stone-800">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <h4 className="text-white font-serif text-xl">CHIRAG VAIBHAV RANE</h4>
                    <p className="text-sm mt-2">Freelancer</p>
                </div>

                <div className="flex gap-8 text-sm tracking-widest uppercase">
                    <a href="https://www.linkedin.com/in/chirag-v-rane/" className="hover:text-slate-100 transition-colors">LinkedIn</a>
                    <a href="https://github.com/chiragRane-Projects/" className="hover:text-slate-100 transition-colors">Github</a>
                    <a
                        href="mailto:beingchirag6@gmail.com"
                        className="hover:text-slate-100 transition-colors duration-300"
                    >
                        Email
                    </a>
                </div>

                <div className="text-xs text-stone-600">
                    © {new Date().getFullYear()}. All Rights Reserved.
                </div>
            </div>
        </footer>
    )
}