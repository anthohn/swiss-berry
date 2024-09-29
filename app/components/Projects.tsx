import { projects } from '@/lib/data'
import ProjectItem from './ProjectItem';

export default function Projects() {
    return (
        <>
            <section className="pt-40 w-9/12 mx-auto h-screen">
                <h2 className="text-6xl font-medium leading-tight text-center">Projets</h2>
                <div className="flex flex-wrap justify-between pt-28">
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
