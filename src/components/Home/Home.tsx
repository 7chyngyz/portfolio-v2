import React from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Experience from './Experience/Experience';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';

const Home = () => {
    return (
        <div className='overflow-hidden'>
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Contact />
        </div>
    );
};

export default Home;