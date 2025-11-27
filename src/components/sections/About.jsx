import RevealOnScroll from "../RevealOnScroll"

export default function About()
{
    const frontendSkills = ["React", "Javascript"]
    const backendSkills = ["Node.js", "MongoDB"]

    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">About Me</h2>
                    <div className="rounded-xl p-8 border-white/10 border hover:translate-y-1 transition-all">
                        <p className="text-gray-300 mb-6 whitespace-pre-line">
                            Hello! I'm Dimitrios Floros, a self-driven frontend web developer. While I may not have formal work experience in web development yet, I've dedicated significant time to learning modern web technologies through hands-on learning and personal projects.<br />
                            <br />
                            My journey into web development began with a curiosity for creating interactive digital experiences. Over the past few years, I've successfully completed several online courses including "The Web Developer Bootcamp" by Colt Steele and lately specialized training in React.js. This has equipped me with solid foundations in HTML5, CSS, JavaScript, and modern frontend frameworks.<br />
                            <br />
                            My approach to development is methodical and problem-solving focused – I enjoy breaking down complex challenges into manageable solutions, much like how I've tackled game development projects using Construct 2 in the past.<br />
                            <br />
                            What sets me apart is my commitment to continuous learning and improvement. As someone who has worked extensively with hardware and software troubleshooting, I bring a unique perspective to frontend development, approaching problems systematically while maintaining attention to detail.<br />
                            <br />
                            I'm eager to contribute my skills, enthusiasm, and problem-solving abilities to a dynamic team where I can grow as a developer and help create exceptional user experiences through clean, efficient code. My goal is to become a well-rounded full-stack developer, combining strong frontend skills with backend knowledge to deliver complete solutions.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                                <h3 className="text-xl font-boldmb-4">Frontend</h3>
                                <div className="flex flex-wrap gap-2"></div>{
                                    frontendSkills.map((tech, key) => (<span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-small hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,30,246,0.2)] transition">{tech}</span>))
                                }
                            </div>
                            <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                                <h3 className="text-xl font-boldmb-4">Backtend</h3>
                                <div className="flex flex-wrap gap-2"></div>{
                                    backendSkills.map((tech, key) => (<span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-small hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,30,246,0.2)] transition">{tech}</span>))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}