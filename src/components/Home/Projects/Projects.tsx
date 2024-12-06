"use client";
import { projects } from "@/data/Data";
import Link from "next/link";
import React, { useState } from "react";

const Projects = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    console.log(setActiveIndex);



    return (
        <section id="projects" className="w-full py-16 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white px-6">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl sm:text-5xl text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-gray-600 mb-10 uppercase tracking-wide">
                    Projects Reloaded
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            className="p-6 bg-gray-700 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
                        >
                            {/* Project Image */}
                            <div className="overflow-hidden rounded-lg mb-4">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-40 object-cover transition-transform duration-500 hover:scale-110"
                                />
                            </div>
                            {/* Content */}
                            <h3 className="text-xl font-bold text-white mb-2">
                                {project.title}
                            </h3>
                            <p
                                className={`text-sm text-gray-300 transition-opacity ${activeIndex === idx ? "opacity-100" : "opacity-50 line-clamp-2"
                                    }`}
                            >
                                {project.description}
                            </p>
                            <div className="flex justify-between items-center mt-4">
                                <Link
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-lg font-medium hover:shadow-md transition-transform transform hover:scale-105"
                                >
                                    View Project
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
