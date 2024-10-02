'use client'
import ContactForm from "@/app/contact/ContactForm";
import { motion } from "framer-motion";

export default function Contact() {
    return (
            <motion.div
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                delay: 0,
                duration: 1.5,
                ease: "easeInOut",
            }}
            className="flex flex-col space-y-10 lg:space-y-0 lg:flex-row space-x-0 lg:space-x-16 w-full md:w-9/12 lg:w-11/12 xl:w-10/12 2xl:w-8/12 mx-auto my-56">
                <div className="w-full lg:w-1/2 flex flex-col space-y-20  p-4 lg:p-0">
                    <div className="flex flex-wrap justify-center">
                        <p className='hidden bg-gradient-to-b from-[#3B4297] to-[#131531] w-14 h-14 rounded-full sm:flex items-center justify-center z-10 text-3xl'>1</p>
                        <div className="flex-grow ml-4 flex flex-col space-y-5 basis-[80%]">
                            <h3 className="text-2xl md:text-3xl font-semibold">Remplissez le formulaire de contact</h3>
                            <p className="text-[16px] md:text-[18px] leading-6 text-neutral-400">Veuillez remplir le formulaire de contact avec vos coordonnées. De cette façon, nous pouvons préparer pour vous et votre entreprise avant l’entretien.</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center">
                        <p className='hidden bg-gradient-to-b from-[#3B4297] to-[#131531] w-14 h-14 rounded-full sm:flex items-center justify-center z-10 text-3xl'>2</p>
                        <div className="flex-grow ml-4 flex flex-col space-y-5 basis-[80%]">
                            <h3 className="text-2xl md:text-3xl font-semibold">Première consultation gratuite</h3>
                            <p className="text-[16px] md:text-[18px] leading-6 text-neutral-400">Nous apprenons à nous connaître dès la première conversation. Nous examinons votre situation actuelle, vos objectifs et discutons de vos idées et de la portée de votre projet de site Web prévu. Enfin, vous recevrez une offre sans engagement.</p>
                        </div>
                    </div>

                </div>
                <div className="w-full lg:w-1/2 p-4 lg:p-0">
                    <ContactForm />
                </div>
            </motion.div>
    );
}
