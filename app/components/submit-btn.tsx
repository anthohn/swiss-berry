'use client'
import React from "react";
import { motion } from "framer-motion"

export default function SubmitBtn() {
  return (
    <motion.button 
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2}}
      type="submit"
      className="relative p-3 w-fit flex items-center rounded-xl bg-[#D9D9D9]" 
    >
      {/* Ajout du positionnement et d'un z-index */}
      <div className='absolute inset-0 blur-[1rem] z-[-1] bg-[#D9D9D9]'></div>
      <p className="text-[#000000] font-semibold z-10">Envoyer la demande</p>
    </motion.button>
  );
}
