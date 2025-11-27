import { useEffect } from "react";
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa'

export default function Navbar({ menuOpen, setMenuOpen })
{
    useEffect(() => { document.body.style.overflow = menuOpen ? "hidden" : "" }, [menuOpen]);
    return (
        <nav className="fixed top-0 w-full z-40 bg-black/80 backdrop-blur-lg border-b border-white/10">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <a href="#home" className="font-mono text-xl font-bold text-white">DF<span className="text-blue-500">dev</span></a>
                    <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={() => setMenuOpen((prev) => !prev)}>
                        &#9776;
                    </div>
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a>
                        <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
                        <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a>
                        <a
                            href="https://www.linkedin.com/in/dimitriosfl/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-800 hover:bg-gray-900 text-white px-3 py-2 rounded-md transition-colors flex items-center mr-2"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="https://github.com/dimitriosfl"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-800 hover:bg-gray-900 text-white px-3 py-2 rounded-md transition-colors flex items-center"
                        >
                            <FaGithub />
                        </a>


                    </div>
                </div>
            </div>
        </nav>)
}