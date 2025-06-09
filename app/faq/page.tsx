'use client';
import { faq } from '@/lib/data';
import Image from 'next/image';
import { motion } from "framer-motion";
import Link from 'next/link';
import Title2 from '../components/Title2';

export default function Faq() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                delay: 0,
                duration: 1.5,
                ease: "easeInOut",
            }}
            viewport={{ once: true }}
            className="flex flex-col space-y-20 my-44 w-11/12 xl:w-9/12 mx-auto"
        >
            <div className='flex flex-col space-y-4'>
                <Title2>FAQ</Title2>
                <p className='text-neutral-400 text-[18px]'>
                    Tout ce que vous devez savoir sur nous. Vous ne trouvez pas la réponse que vous cherchez ?
                    <Link href="/contact" className="text-blue-500 hover:underline ml-1 trnasition transition-opacity">N&apos;hésitez pas à discuter avec notre équipe.</Link>
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-12">
                {faq.map((item, index) => (
                    <div key={index} className='relative flex flex-col space-y-4 border border-neutral-400 bg-[#D9D9D9] bg-opacity-10 rounded-3xl p-8'>
                        <div className='absolute inset-0 blur-[10rem] bg-[#3B4297] bg-opacity-50 -z-10'></div>
                        <Image src={item.icon} width={45} height={45} alt="Icon" className='mx-auto' />
                        <h2 className='text-xl font-semibold'>{item.question}</h2>
                        <p className='text-neutral-400 text-justify'>{item.answer}</p>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}