"use client";
import React, { useState } from "react";

const Hero = () => {
    const [position, setPosition] = useState("FrontEnd Developer");
    console.log(setPosition);


    const scrollToSection = () => {
        const section = document.getElementById("contact");
        section?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            id="home"
            className="w-full h-screen bg-gray-900 text-white flex flex-col justify-center items-center px-6 overflow-hidden pt-28"
        >
            {/* Intro Text */}
            <div className="absolute top-24 left-1/2 transform -translate-x-1/2">
                <p className="font-mono text-2xl text-gray-400">Yo, my name is</p>
            </div>

            {/* Name */}
            <div className="w-full text-center sm:text-left px-6 sm:px-12 md:px-20 lg:px-48">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-gray-600 mb-4 uppercase tracking-tight leading-tight transform scale-110 hover:scale-125 transition-all">
                    Chyngyz Sultanmuratov
                </h1>
            </div>

            {/* Position */}
            <div className="max-w-4xl text-center sm:text-left px-6 sm:px-12 md:px-20">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-300 uppercase tracking-widest transform hover:scale-110 transition-all">
                    I’m a <span className="text-gray-500">{position}</span>
                </h2>
                <p className="text-sm sm:text-base md:text-lg lg:text-[17px] mt-6 text-gray-400 leading-relaxed tracking-widest font-mono">
                    What’s good? I'm a frontend developer who’s all about that next-level digital hustle. I craft web interfaces that hit hard. From flawless design to killer user experience, I’m here to make the web feel like art.
                </p>

                {/* Button to Scroll */}
                <button
                    onClick={scrollToSection}
                    className="mt-12 py-3 px-8 bg-transparent border-2 border-gray-600 text-gray-300 font-mono rounded-lg hover:bg-gray-600 hover:border-gray-500 hover:text-white transition-all duration-300 transform hover:scale-110"
                >
                    Let’s Talk
                </button>
            </div>

            {/* Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-700 opacity-60 blur-xl rounded-xl -z-10"></div>
        </section>
    );
};

export default Hero;
