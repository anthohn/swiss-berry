import Image from 'next/image';
import ArrowTopRight from '@/public/svg/arrow-top-right.svg';
import { StaticImageData } from "next/image";

interface ProjectItemProps {
    displayLink: string; // Le texte à afficher
    urlLink: string; // L'URL à ouvrir
    imageSrc: StaticImageData;
    title: string;
}

export default function ProjectItem({ displayLink, urlLink, imageSrc, title }: ProjectItemProps) {
    return (
        <div className='relative flex flex-col h-[450px] sm:w-9/12 md:w-8/12 lg:w-7/12 xl:w-5/12 border border-neutral-400 bg-[#D9D9D9] bg-opacity-5 rounded-3xl mx-4 sm:mx-10'>
            <div className='absolute inset-0 blur-[8rem] bg-[#61658F] -z-10'></div>

            <div className='p-4 flex flex-col'>
                <a href={urlLink} target="_blank" rel="noopener noreferrer" className='border border-neutral-400 rounded-3xl px-8 py-2 bg-[#D9D9D9] bg-opacity-10 mb-4 w-fit'>
                    {displayLink}
                </a>
                <div className="relative w-full h-[280px] mx-auto">
                    <Image 
                        src={imageSrc}
                        alt={`Image projet ${title}`}
                        className='object-cover rounded-3xl shadow-xl'
                        fill
                    />
                </div>
            </div>
            <div className='rounded-3xl items-center flex justify-between h-12 py-10 px-8 bg-[#D9D9D9] bg-opacity-10'>
                <h3 className='text-lg font-semibold'>{title}</h3>
                <a href={urlLink} target='_blank' className='bg-gradient-to-b from-[#3B4297] to-[#131531] rounded-full p-2 shadow-xl'>
                    <Image src={ArrowTopRight} width={35} height={35} alt="Logo de lien" />
                </a>
            </div>
        </div>
    );
}
