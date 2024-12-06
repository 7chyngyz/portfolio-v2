"use client";
import Link from "next/link";
import { HiBars3BottomRight } from "react-icons/hi2";
import { useEffect, useState } from "react";
import { FaDownload } from "react-icons/fa";
import { navLinks } from "@/constants/constants";

interface Props {
    openNav: () => void;
}

const NavBar = ({ openNav }: Props) => {
    const [navBg, setNavBg] = useState<boolean>(false);

    // const handleClick = () => {
    //     // Открытие PDF файла
    //     window.open("/resume.pdf", "_blank");
    // };

    useEffect(() => {
        const handler = () => {
            if (window.scrollY >= 90) {
                setNavBg(true);
            }
            if (window.scrollY < 90) {
                setNavBg(false);
            }
        };
        window.addEventListener("scroll", handler);

        return () => {
            window.removeEventListener("scroll", handler);
        };
    }, []);

    return (
        <header
            className={`fixed ${navBg ? "bg-slate-800/80 backdrop-blur-md" : "bg-transparent"
                } h-[12vh] w-full transition-all duration-500`}
        >
            <div className="flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto">
                <h1 className="relative text-4xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 animate-pulse">
                    C7
                    <span className="absolute inset-0 border-4 border-transparent bg-gradient-to-r from-gray-500 to-gray-700 rounded-lg blur-md animate-border"></span>
                </h1>
                <div className="flex items-center space-x-10">
                    <div className="hidden  lg:flex items-center space-x-8">
                        {navLinks.map((navlink) => (
                            <Link key={navlink.id} href={navlink.url}>
                                <p className="nav__link font-mono">{navlink.label}</p>
                            </Link>
                        ))}
                    </div>
                    <div className="flex items-center space-x-4">
                        <button
                            className="relative px-6 py-2 text-sm md:text-sm font-mono font-medium text-white
  border-2 border-transparent rounded-lg bg-transparent overflow-hidden group"
                        >
                            <span className="absolute top-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full group-hover:left-0 group-hover:shadow-lg group-hover:shadow-[#FFFFFF]"></span>
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full group-hover:left-0 group-hover:shadow-lg group-hover:shadow-[#FFFFFF]"></span>
                            <span className="absolute top-0 right-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full group-hover:right-0 group-hover:shadow-lg group-hover:shadow-[#FFFFFF]"></span>
                            <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full group-hover:right-0 group-hover:shadow-lg group-hover:shadow-[#FFFFFF]"></span>

                            <span className="relative flex items-center space-x-2 z-10">
                                <span>Resume</span>
                                <FaDownload className="text-white transition-colors duration-300" />
                            </span>
                        </button>


                        <HiBars3BottomRight
                            onClick={openNav}
                            className="w-8 h-8 cursor-pointer text-white lg:hidden"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default NavBar;
