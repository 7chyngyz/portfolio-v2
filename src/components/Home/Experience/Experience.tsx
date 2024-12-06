import React from "react";

const Experience = () => {
    return (
        <section id="experience" className="w-full py-16 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white px-6">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl sm:text-5xl text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-gray-600 mb-10 uppercase tracking-wide">
                    My Experience
                </h2>
                <div className="space-y-16">
                    {/* Experience 1 */}
                    <div className="sm:pl-16 sm:text-left text-center">
                        <div className="mt-8 sm:ml-8">
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-300">
                                Frontend Developer
                            </h3>
                            <p className="text-sm text-gray-400 font-mono mb-4">
                                XYZ Corp | 2023 - Present
                            </p>
                            <p className="text-gray-400 leading-relaxed">
                                Developed dynamic web applications with React and Next.js. Collaborated with the design team to create seamless user interfaces, and optimized website performance and accessibility.
                            </p>
                        </div>
                    </div>
                    {/* Experience 2 */}
                    <div className="sm:pl-16 sm:text-left text-center">
                        <div className="mt-8 sm:ml-8">
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-300">
                                UI/UX Designer
                            </h3>
                            <p className="text-sm text-gray-400 font-mono mb-4">
                                ABC Studios | 2021 - 2023
                            </p>
                            <p className="text-gray-400 leading-relaxed">
                                Created wireframes, prototypes, and user flows for new applications. Worked closely with clients to understand their vision and requirements, and conducted user testing to improve usability.
                            </p>
                        </div>
                    </div>
                    {/* Experience 3 */}
                    <div className="sm:pl-16 sm:text-left text-center">
                        <div className="mt-8 sm:ml-8">
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-300">
                                Web Developer Intern
                            </h3>
                            <p className="text-sm text-gray-400 font-mono mb-4">
                                123 Web Agency | 2020 - 2021
                            </p>
                            <p className="text-gray-400 leading-relaxed">
                                Assisted in front-end development using HTML, CSS, and JavaScript. Developed responsive layouts for web applications and contributed to backend development with Node.js.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;