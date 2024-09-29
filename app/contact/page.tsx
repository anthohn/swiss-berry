'use client'
import ContactForm from "@/app/contact/ContactForm";

export default function Contact() {
    return (
            <div className="flex flex-wrap w-8/12 mx-auto mt-48">
                <div className="w-1/2 flex flex-col space-y-20">
                    <div className="flex flex-wrap bg-orange-500rounded-lg">
                        <p className='bg-gradient-to-b from-[#3B4297] to-[#131531] w-14 h-14 rounded-full flex items-center justify-center z-10 text-3xl'>1</p>
                        <div className="w-10/12 ml-4 flex flex-col space-y-5">
                            <h3 className="text-3xl font-semibold">Remplissez le formulaire de contact</h3>
                            <p className="text-[20px] leading-6 text-neutral-400">Veuillez remplir le formulaire de contact avec vos coordonnées. De cette façon, nous pouvons préparer pour vous et votre entreprise avant l’entretien.</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap bg-orange-500rounded-lg">
                        <p className='bg-gradient-to-b from-[#3B4297] to-[#131531] w-14 h-14 rounded-full flex items-center justify-center z-10 text-3xl'>2</p>
                        <div className="w-10/12 ml-4 flex flex-col space-y-5">
                            <h3 className="text-3xl font-semibold">Première consultation gratuite</h3>
                            <p className="text-[20px] leading-6 text-neutral-400">Nous apprenons à nous connaître dès la première conversation. Nous examinons votre situation actuelle, vos objectifs et discutons de vos idées et de la portée de votre projet de site Web prévu. Enfin, vous recevrez une offre sans engagement.</p>
                        </div>
                    </div>
                </div>
                <div className="w-1/2">
                    <ContactForm />
                </div>
            </div>
    );
}
