'use client'
import { projects } from '@/lib/data'
import ProjectItem from './ProjectItem';
import { motion } from "framer-motion";


export default function Projects() {
    return (
        <>
            <section className="pt-40 w-full md:w-11/12 xl:w-10/12 2xl:w-9/12 mx-auto">
                <motion.h2 
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1}}
                transition={{
                  delay: 0,
                  duration: 0.8,
                  ease: "easeInOut"
                }}
                className="text-6xl font-medium leading-tight text-center">Projets</motion.h2>
                <motion.div
                    initial={{ opacity: 0}}
                    whileInView={{ opacity: 1}}
                    transition={{
                    delay: 0,
                    duration: 0.8,
                    ease: "easeInOut"
                    }}
                    className="flex flex-col space-y-16 xl:space-y-0 xl:flex-row pt-28 items-center">
                    {projects.map((project, index) => (
                        <ProjectItem 
                            key={index}
                            displayLink={project.displayLink} 
                            urlLink={project.urlLink} 
                            imageSrc={project.imageSrc} 
                            title={project.title} 
                        />
                    ))}
                </motion.div>
            </section>
        </>
    );
}
