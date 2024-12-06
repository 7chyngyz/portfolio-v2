import React from "react";
import aboutImg from '../../../../public/assets/masha.jpg'

const About = () => {
    return (
        <section id="about" className="w-full py-16 bg-gray-900 text-white text-center px-6">
            <div className="max-w-6xl mx-auto flex items-center justify-center flex-col md:flex-row">
                {/* Контент About */}
                <div className="md:w-1/2 text-center md:text-left">
                    <h2 className="text-4xl md:text-5xl font-mono font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-600 mb-6 uppercase tracking-widest animate-pulse">
                        About Me
                    </h2>
                    <p className="text-base font-mono md:text-lg text-gray-300 mb-6 leading-relaxed tracking-wide">
                        Yo! I'm a passionate frontend developer, always on the lookout for new challenges. I specialize in crafting sleek and functional web interfaces. With a focus on accessibility and user experience, I strive to build products that are not just functional but beautiful and easy to use. I believe that with the right code, we can shape the future of the digital world.
                    </p>
                    {/* Skills */}
                    <div className="mt-8">
                        <h3 className="text-lg md:text-xl font-mono font-semibold text-gray-200">
                            My Skills:
                        </h3>
                        <div className="flex gap-20">
                            <ul className="mt-4 font-mono text-gray-400 text-base space-y-2">
                                <li>React / Next.js</li>
                                <li>UI/UX Design</li>
                                <li>JavaScript / TypeScript</li>
                                <li>Tailwind CSS / SCSS</li>
                                <li>Git & GitHub</li>
                            </ul>
                            <ul className="mt-4 font-mono text-gray-400 text-base space-y-2">
                                <li>React / Next.js</li>
                                <li>UI/UX Design</li>
                                <li>JavaScript / TypeScript</li>
                                <li>Tailwind CSS / SCSS</li>
                                <li>Git & GitHub</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Фотка */}
                <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
                    <img
                        src={aboutImg.src}
                        alt="aboutImg"
                        className="w-80 h-80 object-cover border-8 border-gray-800 shadow-2xl transform hover:scale-110 hover:rotate-6 transition-all duration-500 rounded-lg"
                    />
                </div>
            </div>
            {/* Background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-700 opacity-20 blur-lg rounded-lg -z-10"></div>
        </section>
    );
};

export default About;
