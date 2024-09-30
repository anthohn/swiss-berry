import Image from 'next/image'
import WebPerso from '@/public/svg/webPerso.svg'
import SEO from '@/public/svg/SEO.svg'

export default function Services() {
    return (
        <>
            <section className="pt-40 w-11/12 xl:w-9/12 mx-auto">

                <h2 className="text-6xl font-medium leading-tight text-center pb-20">Nos services</h2>

                {/* Web Perso */}
                <div className="flex flex-row justify-between items-center relative h-[300px] md:h-[600px]">
                    <div className='hidden relative w-5/12 md:flex justify-center'>
                        <div className='absolute inset-0 blur-[8rem] bg-[#61658F] -z-10'></div> 
                        <Image
                            src={WebPerso}
                            alt=""
                            className="object-cover w-10/12 "
                        />
                    </div>
                    
                    <div className="hidden md:flex absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-neutral-400 z-0"></div>
                    <p className='bg-gradient-to-b from-[#3B4297] to-[#131531] w-14 h-14 rounded-full flex items-center justify-center text-3xl z-10'>1</p>
                    
                    <div className="flex w-10/12 md:w-5/12 flex-col space-y-4">
                        <h3 className='font-semibold text-3xl'>Développement web personnalisé</h3>
                        <p className='text-[18px] text-justify leading-6 text-neutral-400'>Transformez votre vision en réalité avec des sites web sur mesure qui captivent et convertissent. Chaque projet est conçu pour offrir une expérience utilisateur exceptionnelle sur tous les appareils.</p>
                    </div>
                </div>

                {/* SEO */}
                <div className="flex flex-row justify-between items-center relative h-[300px] md:h-[600px]">
                    <div className="flex w-10/12 md:w-5/12 flex-col space-y-4">
                        <h3 className='font-semibold text-3xl'>Optimisation SEO avancée</h3>
                        <p className='text-[18px] text-justify leading-6 text-neutral-400'>Ne laissez pas votre site se perdre dans le web ! Grâce à Next.js, nous propulsons votre visibilité et attirons un trafic qualifié, maximisant ainsi votre potentiel commercial.</p>
                    </div>
                    <div className="hidden md:flex absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-neutral-400 z-0"></div>
                    <p className='bg-gradient-to-b from-[#3B4297] to-[#131531] w-14 h-14 rounded-full flex items-center justify-center text-3xl z-10'>2</p>
                    <div className='hidden relative w-5/12 md:flex justify-center'>
                    <div className='absolute inset-0 blur-[8rem] bg-[#61658F] -z-10'></div>
                        <Image
                            src={SEO}
                            alt=""
                            className="object-cover w-10/12"
                        />
                    </div>
                </div>

                {/* Maintenance */}

                <div className="flex flex-row justify-between items-center relative h-[300px] md:h-[600px]">
                <div className='hidden relative w-5/12 md:flex justify-center'>
                    <div className='absolute inset-0 blur-[8rem] bg-[#61658F] -z-10'></div> 
                        <div className='w-10/12 h-96 border rounded-3xl border-neutral-600'
                        />
                    </div>
                    
                    <div className="hidden md:flex absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-neutral-400 z-0"></div>
                    <p className='bg-gradient-to-b from-[#3B4297] to-[#131531] w-14 h-14 rounded-full flex items-center justify-center text-3xl z-10'>3</p>
                    
                    <div className="flex w-10/12 md:w-5/12 flex-col space-y-4">
                        <h3 className='font-semibold text-3xl'>Maintenance continue</h3>
                        <p className='text-[18px] text-justify leading-6 text-neutral-400'>Assurez la pérennité de votre site avec notre maintenance proactive. Mises à jour régulières, sauvegardes et surveillance 24/7 garantissent que votre site reste performant. Concentrez-vous sur votre activité, nous nous occupons du reste !</p>
                    </div>
                </div>






            </section>
        </>
    )
}
