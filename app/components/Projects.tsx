import { projects } from '@/lib/data'
import ProjectItem from './ProjectItem';

export default function Projects() {
    return (
        <>
            <section className="pt-40 w-full md:w-11/12 xl:w-10/12 2xl:w-9/12 mx-auto">
                <h2 className="text-6xl font-medium leading-tight text-center">Projets</h2>
                <div className="flex flex-col space-y-16 xl:space-y-0 xl:flex-row pt-28 items-center">
                    {projects.map((project, index) => (
                        <ProjectItem 
                            key={index}
                            displayLink={project.displayLink} 
                            urlLink={project.urlLink} 
                            imageSrc={project.imageSrc} 
                            title={project.title} 
                        />
                    ))}
                </div>
            </section>
        </>
    );
}
