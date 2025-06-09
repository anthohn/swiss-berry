'use client'
import React from "react";
import { motion } from "framer-motion"
import Mail from '@/public/svg/mail.svg';
import Image from "next/image";


export default function ContactBtn() {
  return (
    <motion.a 
      whileHover={{ scale: 1.08 }}
      transition={{ duration: 0.2 }}
      href="/contact"
      className="fixed bottom-5 right-5 px-4 py-4 w-fit flex items-center rounded-full bg-gradient-to-b from-[#3B4297] z-20 to-[#131531] border-2" // fixed + bottom + right
    >
      {/* Ajout du positionnement et d'un z-index */}
      <div className='absolute inset-0 blur-[1rem] z-[-1]  bg-fadebackgroud-light dark:bg-fadebackgroud-dark'></div>
      <div className="flex flex-col items-center">
        <Image src={Mail} width={35} height={35} alt="Mail Icon" />
        <p className="text-primary-light dark:text-primary-dark font-medium text-sm z-10">Contact</p>
      </div>
    </motion.a>

    
  );
}