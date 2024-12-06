"use client";
import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-950 text-white py-8">
            <div className="max-w-6xl mx-auto text-center">
                <p className="text-sm text-gray-400">
                    &copy; {new Date().getFullYear()} 7chyngyz. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
