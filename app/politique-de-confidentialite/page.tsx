'use client';
import { privacyPolicy } from '@/lib/data';
import { motion } from "framer-motion";
import Link from 'next/link';

export default function PrivacyPolicy() {
    const lastUpdate = "03 octobre 2024"; // Exemple de dernière mise à jour

    return (
        <motion.div
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                delay: 0,
                duration: 1.5,
                ease: "easeInOut",
            }}
            viewport={{ once: true }} className="flex flex-col space-y-10 my-44 w-11/12 xl:w-9/12 mx-auto">
            <div className='flex flex-col space-y-4'>
                <h1 className='text-6xl font-medium'>Politique de confidentialité</h1>
                <p className='text-neutral-400 text-[18px]'>
                    Tout ce que vous devez savoir sur notre politique de confidentialité. Vous ne trouvez pas la réponse que vous cherchez ?
                    <Link href="/contact" className="text-blue-500 hover:underline ml-1 transition transition-opacity">N'hésitez pas à discuter avec notre équipe.</Link>
                </p>
                <p className='text-neutral-400'>Dernière mise à jour : {lastUpdate}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-1 xl:grid-cols-1 gap-8">
                {privacyPolicy.map((item, index) => (
                    <div key={index} className='relative flex flex-col border border-neutral-400 bg-[#D9D9D9] bg-opacity-10 rounded-3xl p-6'>
                        <div className='absolute inset-0 blur-[10rem] bg-[#3B4297] bg-opacity-50 -z-10'></div>
                        <h2 className='text-xl font-semibold'>{index + 1}. {item.section}</h2>
                        <p className='text-neutral-400'>{item.description}</p>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}