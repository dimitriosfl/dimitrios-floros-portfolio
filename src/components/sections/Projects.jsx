import RevealOnScroll from "../RevealOnScroll"

export default function Projects()
{

    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-xl border border-white/10 hovver:translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,30,246,0.1)] transition-all">
                            <h3 className="text-xl font-bold mb-2">Google Gemini Clone</h3>
                            <p className="text-gray-400 mb-4">A Google Gemini clone for text chat. </p>
                            <div className="flex justify-between items-center">
                                <a href="https://dimitriosfl.github.io/gemini-clone/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project</a>
                                <img src="geminiClone.jpg" alt="Project preview" className="w-80 h-45 rounded-lg ml-2" />
                            </div>
                        </div>
                        <div className="p-6 rounded-xl border border-white/10 hovver:translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,30,246,0.1)] transition-all">
                            <h3 className="text-xl font-bold mb-2">Crypto-App</h3>
                            <p className="text-gray-400 mb-4">A simple App to search and quickly find basic info for crypto coins. </p>
                            <div className="flex justify-between items-center">
                                <a href="https://dimitriosfl.github.io/crypto-app/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project</a>
                                <img src="crypto-app.jpg" alt="Project preview" className="w-80 h-45 rounded-lg ml-2" />
                            </div>
                        </div>
                        <div className="p-6 rounded-xl border border-white/10 hovver:translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,30,246,0.1)] transition-all">
                            <h3 className="text-xl font-bold mb-2">Wordle-clone</h3>
                            <p className="text-gray-400 mb-4">Fully functioning Wordle-clone game with over 2000 words to guess and no limit on rounds to play!</p>
                            <div className="flex justify-between items-center">
                                <a href="https://dimitriosfl.github.io/wordle-clone/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project</a>
                                <img src="wordle-clone.jpg" alt="Project preview" className="w-80 h-40 rounded-lg ml-2" />
                            </div>
                        </div>
                        <div className="p-6 rounded-xl border border-white/10 hovver:translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,30,246,0.1)] transition-all">
                            <h3 className="text-xl font-bold mb-2">Weather-App</h3>
                            <p className="text-gray-400 mb-4">Search for country or town and see the current weather conditions.</p>
                            <div className="flex justify-between items-center">
                                <a href="https://dimitriosfl.github.io/weather-app/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project</a>
                                <img src="weather-app.jpg" alt="Project preview" className="w-50 h-70 rounded-lg ml-2" />
                            </div>
                        </div>
                        <div className="p-6 rounded-xl border border-white/10 hovver:translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,30,246,0.1)] transition-all">
                            <h3 className="text-xl font-bold mb-2">Todo-List</h3>
                            <p className="text-gray-400 mb-4">A simple Todo App with local storage.</p>
                            <div className="flex justify-between items-center">
                                <a href="https://dimitriosfl.github.io/todo-list/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors my-4" >View Project</a>
                                <img src="todo-list.jpg" alt="Project preview" className="w-80 h-50 rounded-lg ml-2" />
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}