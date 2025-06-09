'use client'
import CheckItem from './CheckItem';
import { motion } from "framer-motion";


export default function Landing() {
    return(
        <>
            <section className="flex flex-col space-y-20 mx-auto text-center pt-36 sm:pt-64">
                <motion.h1 
                    initial={{ opacity: 0}}
                    whileInView={{ opacity: 1}}
                    transition={{
                      delay: 0.9,
                      duration: 0.8,
                      ease: "easeInOut",
                    }}
                    viewport={{ once: true }}       
                    className="text-primary-light dark:text-primary-dark text-4xl md:text-5xl xl:text-6xl font-medium leading-tight">
                        Votre présence en ligne,<br/> sublimée par notre expertise.
                </motion.h1>
                <motion.ul
                    initial={{ opacity: 0}}
                    whileInView={{ opacity: 1}}
                    transition={{
                      delay: 1.2,
                      duration: 0.8,
                      ease: "easeInOut",
                    }}
                    viewport={{ once: true }}   
                    className="text-primary-light dark:text-primary-dark flex flex-col space-y-4 md:flex-row md:space-y-0 justify-center mx-auto md:space-x-6 text-xl items-start"> 
                    <CheckItem>Solution sur mesure</CheckItem>
                    <CheckItem>Hébergement sécurisé</CheckItem>
                    <CheckItem>Flexibilité totale</CheckItem>
                </motion.ul>
                <motion.a
                    initial={{ opacity: 0}}
                    whileInView={{ opacity: 1}}
                    transition={{
                        delay: 1.5,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    viewport={{ once: true }}
                    href='/contact' 
                    className="mx-auto relative p-5 w-fit flex items-center rounded-xl bg-btnBackground-light dark:bg-btnBackground-dark">
                    {/* btn background */}
                    <div className='absolute inset-0 blur-[1rem] z-[-1] bg-fadebackgroud-light dark:bg-fadebackgroud-dark'></div>
                    <p className="text-primary-light dark:text-primary-dark font-semibold text-xl z-10">Discutions de votre projet</p>
                </motion.a>
            </section>
        </>
    )
}