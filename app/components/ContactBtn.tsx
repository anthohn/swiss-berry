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
      className="fixed bottom-5 right-5 px-3 py-3 w-fit flex items-center rounded-full bg-gradient-to-b from-[#3B4297] z-20 to-[#131531] border-2" // fixed + bottom + right
    >
      {/* Ajout du positionnement et d'un z-index */}
      <div className='absolute inset-0 blur-[1rem] z-[-1]  bg-[#3B4297]'></div>
      <div className="flex flex-col items-center">
        <Image src={Mail} width={35} height={35} alt="Mail Icon" />
        <p className="font-semibold text-md z-10">Contact</p>
      </div>
    </motion.a>

    
  );
}