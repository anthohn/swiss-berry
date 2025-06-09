'use client'
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { links } from "@/lib/data";
import Image from "next/image";
import LogoSwissBerry from '@/public/svg/logo.svg';

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
                className={`w-full p-6 z-50 fixed top-0 transition-all duration-300 
                    ${scrolled || isOpen ? 'bg-[#161838] bg-opacity-90' : 'bg-transparent'}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ 
                    delay: 0.6,
                    duration: 1 }}
            >
                <div className="mx-auto flex items-center justify-between  max-w-screen-2xl">
                    {/* Logo */}
                    <a href="/" className="flex flex-shrink-0 items-center space-x-4">
                        <Image src={LogoSwissBerry} width={50} height={50} alt="logo Swiss Berry" />
                        <span className="text-3xl font-bold text-primary-light dark:text-primary-dark">Swissberry</span>
                    </a>

                    {/* Hamburger Menu Button for small screens */}
                    <div className="block md:hidden">
                        <button onClick={toggleMenu} className="relative w-8 h-8 flex items-center justify-center">
                            {/* Barre du haut */}
                            <motion.span
                                className="block absolute h-0.5 w-6 bg-white"
                                initial={false}
                                animate={isOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -8 }}
                                transition={{ duration: 0.3 }}
                            />
                            {/* Barre du milieu */}
                            <motion.span
                                className="block absolute h-0.5 w-6 bg-white"
                                initial={false}
                                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                                transition={{ duration: 0.3 }}
                            />
                            {/* Barre du bas */}
                            <motion.span
                                className="block absolute h-0.5 w-6 bg-white"
                                initial={false}
                                animate={isOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 8 }}
                                transition={{ duration: 0.3 }}
                            />
                        </button>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex md:space-x-8">
                        {/* Menu visible en mode bureau */}
                        {links.map((link) => (
                            <Link key={link.href} href={link.href} className="text-primary-light dark:text-primary-dark text-lg font-bold hover:text-gray-400">
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Menu mobile avec AnimatePresence */}
                    <AnimatePresence>
                        {isOpen && (
                            <motion.ul
                                className="flex-col md:hidden absolute top-[118px] left-0 right-0 bg-[#161838] bg-opacity-90 text-center"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                {links.map((link) => (
                                    <motion.li
                                        key={link.href}
                                        className="my-2 p-6"
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.2, delay: 0.1 }}
                                    >
                                        <Link href={link.href} onClick={toggleMenu} className="text-white text-lg font-bold hover:text-gray-400">
                                            {link.label}
                                        </Link>
                                    </motion.li>
                                ))}
                            </motion.ul>
                        )}
                    </AnimatePresence>
                </div>
            </motion.nav>
        </>
    );
}
