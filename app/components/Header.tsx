'use client'
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { links } from "@/lib/data";
import Image from "next/image";
import LogoSwissBerry from '@/public/svg/logo-text-blanc.svg';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Gestion du scroll pour ajouter un background à la navbar
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {/* Utilisation de Framer Motion pour la transition du background */}
            <motion.nav
                className={`w-full p-6 z-50 fixed top-0 transition-all duration-300 ${scrolled ? 'bg-[#161838] bg-opacity-90' : 'bg-transparent'}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ 
                    delay: 0.6,
                    duration: 1 }}
            >
                <div className="mx-auto w-11/12 flex items-center justify-between">
                    {/* Logo */}
                    <a href="/" className="flex-shrink-0">
                        <Image src={LogoSwissBerry} width={150} height={150} alt="logo Swiss Berry" />
                    </a>

                    {/* Hamburger Menu Button for small screens */}
                    <div className="block md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-white focus:outline-none"
                        >
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                            </svg>
                        </button>
                    </div>

                    {/* Navigation Links */}
                    <ul className={`flex-col md:flex-row md:flex md:space-x-8 text-center md:text-left absolute md:relative top-32 md:top-0 left-0 right-0 bg-[#161838] bg-opacity-90  md:bg-inherit  transition-all duration-300 ease-in-out ${isOpen ? "flex" : "hidden"} md:flex`}>
                        {links.map((link) => (
                            <li key={link.href} className="my-2 md:my-0">
                                <Link href={link.href} onClick={toggleMenu} className="text-white text-lg font-bold hover:text-gray-400">
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </motion.nav>
        </>
    );
}
