'use client'

import { useEffect, useState } from "react";
import Link from "next/link";

export default function NavbarComponent() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 rounded-b-4xl transition-colors duration-300 ${scrolled ? "bg-white/50 backdrop-blur-xl shadow-md text-black" : "text-white"
                }`}
        >
            <nav className="w-full px-8 py-6 flex flex-row justify-between">
                <Link
                    href="/"
                    className="text-xl uppercase tracking-wide font-semibold"
                >
                    Karang Taruna
                </Link>
                <ul className="flex flex-row items-center justify-center gap-5">
                    <li>
                        <a href="#home" className="relative group">
                            Home
                            <span className="absolute -bottom-1 left-0 h-0.5 w-0 group-hover:w-full duration-300 bg-black"></span>
                        </a>
                    </li>
                    <li>
                        <a href="#about" className="relative group">
                            About
                            <span className="absolute -bottom-1 left-0 h-0.5 w-0 group-hover:w-full duration-300 bg-black"></span>
                        </a>
                    </li>
                    <li>
                        <a href="#rundown" className="relative group">
                            Rundown
                            <span className="absolute -bottom-1 left-0 h-0.5 w-0 group-hover:w-full duration-300 bg-black"></span>
                        </a>
                    </li>
                    <li>
                        <a href="#regist" className="relative group">
                            Registration
                            <span className="absolute -bottom-1 left-0 h-0.5 w-0 group-hover:w-full duration-300 bg-black"></span>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}