import Image from 'next/image'
import WebPerso from '@/public/svg/webPerso.svg'
import SEO from '@/public/svg/SEO.svg'


export default function Services() {
    return(
        <>
            <section className="pt-40 w-9/12 mx-auto">
                <h2 className="text-6xl font-medium leading-tight text-center">Nos services</h2>
                <div className="flex flex-wrap pt-20">
                    <div className="w-5/12">
                        <div className='flex flex-col items-center space-y-[20rem] w-10/12 mx-auto'>
                            <div className="relative">
                            <div className='absolute inset-0 blur-[8rem] bg-[#61658F] -z-10'></div>
                            <Image
                                src={WebPerso}
                                alt=""
                                className="object-cover"
                                />
                            </div>
                            <div className="flex flex-col space-y-4 ">
                                <h3 className='font-semibold text-3xl'>Optimisation SEO avancée</h3>
                                <p className='text-[18px] text-justify leading-6 text-neutral-400'>Ne laissez pas votre site se perdre dans le web ! Grâce à Next.js, nous propulsons votre visibilité et attirons un trafic qualifié, maximisant ainsi votre potentiel commercial.</p>
                            </div>
                            <div className="relative">
                                <div className='absolute inset-0 blur-[8rem] bg-[#61658F] -z-10'></div>
                                <Image
                                    src={SEO}
                                    alt=""
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="w-2/12 relative  flex flex-col items-center">
                        <p className='bg-gradient-to-b from-[#3B4297] to-[#131531] mt-[12rem] mb-[34rem] w-14 h-14 rounded-full flex items-center justify-center relative z-10 text-3xl'>1</p>
                        <p className='bg-gradient-to-b from-[#3B4297] to-[#131531] mb-[34rem] w-14 h-14 rounded-full flex items-center justify-center relative z-10 text-3xl'>2</p>          
                        <p className='bg-gradient-to-b from-[#3B4297] to-[#131531] w-14 h-14 rounded-full flex items-center justify-center relative z-10 text-3xl'>3</p>          
                    <div className="absolute left-1/2 h-full border-l-2 border-neutral-400"></div>
                    </div>
                    <div className="w-5/12">
                        <div className='flex flex-col items-center space-y-[20rem] space w-10/12 mx-auto mt-32'>  
                            <div className="flex flex-col space-y-4">
                            <h3 className='font-semibold text-3xl'>Développement web personnalisé</h3>
                            <p className='text-[18px] text-justify leading-6 text-neutral-400'>Transformez votre vision en réalité avec des sites web sur mesure qui captivent et convertissent. Chaque projet est conçu pour offrir une expérience utilisateur exceptionnelle sur tous les appareils.</p>
                        </div>
                        <div className="relative">
                            <div className='absolute inset-0 blur-[8rem] bg-[#61658F] -z-10'></div>
                            <Image
                                src={SEO}
                                alt=""
                                className="object-cover"
                            />
                        </div>
                        <div className="flex flex-col space-y-4">
                            <h3 className='font-semibold text-3xl'>Maintenance continue</h3>
                            <p className='text-[18px] text-justify leading-6 text-neutral-400'>Assurez la pérennité de votre site avec notre maintenance proactive. Mises à jour régulières, sauvegardes et surveillance 24/7 garantissent que votre site reste performant. Concentrez-vous sur votre activité, nous nous occupons du reste !</p>
                        </div>
                        </div>
                    </div>
                </div>

               
            </section>
        </>
    )
}