import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

export default function Footer()
{
    return (
        <footer className="bg-black/80 backdrop-blur-lg border-t border-white/10 py-6 mt-12">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm mb-4 md:mb-0">
                        Created by Dimitrios Floros © 2025
                    </p>
                    <div className="flex space-x-4">
                        <a
                            href="https://www.linkedin.com/in/dimitriosfl/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            <FaLinkedin size={20} />
                        </a>
                        <a
                            href="https://github.com/dimitriosfl"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            <FaGithub size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
