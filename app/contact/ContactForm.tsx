"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import SubmitBtn from "@/app/components/submit-btn";
import Link from 'next/link';

export default function ContactForm() {
    const [isChecked, setIsChecked] = useState(false);

    const handleSubmit = async (formData: FormData) => {
        const response = await fetch("/api/send", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();

        if (data.error) {
            toast.error(data.error);
            return;
        }

        toast.success("Message envoyé avec succès !");
    };

    return (
        <>
            <form className="relative flex flex-col gap-6 w-full p-8 text-[16px] rounded-3xl border border-neutral-400 bg-[#D9D9D9] bg-opacity-20 text-neutral-400"
                onSubmit={async (e) => {
                    e.preventDefault();
                    const formData = new FormData(e.currentTarget);

                    // Vérifie si la case à cocher est cochée avant d'envoyer le formulaire
                    if (!isChecked) {
                        toast.error("Veuillez accepter les conditions de protection des données.");
                        return;
                    }

                    await handleSubmit(formData);
                }}
            >
                <div className='absolute inset-0 blur-[10rem] bg-[#3B4297] bg-opacity-50 -z-10'></div>
                <div className="flex flex-row justify-between space-x-4">
                    <input
                        className="px-4 h-12 border border-neutral-400 bg-[#EEEEEE] bg-opacity-10 focus:outline-none w-1/2 rounded-xl"
                        name="senderFirstName"
                        type="text"
                        maxLength={500}
                        placeholder="Prénom"
                        autoComplete="off"
                    />
                    <input
                        className="px-4 h-12 border border-neutral-400 bg-[#EEEEEE] bg-opacity-10 focus:outline-none w-1/2 rounded-xl"
                        name="senderLastName"
                        type="text"
                        maxLength={500}
                        placeholder="Nom"
                        autoComplete="off"
                    />
                </div>
                <input
                    className="h-12 border border-neutral-400 bg-[#EEEEEE] bg-opacity-10 focus:outline-none px-4 rounded-xl"
                    name="senderEmail"
                    type="email"
                    maxLength={500}
                    placeholder="E-mail"
                    autoComplete="off"
                />
                <input
                    className="h-12 border border-neutral-400 bg-[#EEEEEE] bg-opacity-10 focus:outline-none px-4 rounded-xl"
                    name="senderNumberPhone"
                    type="tel" // Correction de type pour le numéro de téléphone
                    maxLength={500}
                    placeholder="Numéro de téléphone"
                    autoComplete="off"
                />
                <input
                    className="h-12 border border-neutral-400 bg-[#EEEEEE] bg-opacity-10 focus:outline-none px-4 rounded-xl"
                    name="senderWebSite"
                    type="text"
                    maxLength={500}
                    placeholder="Lien de votre site web (optionnel)"
                    autoComplete="off"
                />
                <input
                    className="h-12 border border-neutral-400 bg-[#EEEEEE] bg-opacity-10 focus:outline-none px-4 rounded-xl"
                    name="senderComplInfo"
                    type="text"
                    maxLength={500}
                    placeholder="Information complémentaire (optionnel)"
                    autoComplete="off"
                />

                {/* Case à cocher pour accepter les conditions */}
                <div className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        id="dataProtection"
                        checked={isChecked}
                        onChange={() => setIsChecked(!isChecked)} // Inverse l'état de la case
                    />
                    <label htmlFor="dataProtection" className="text-[12px]">
                        Oui, j&apos;ai lu les <Link href="/politique-de-confidentialite" className="text-blue-500 hover:underline">informations sur la protection des données</Link> et j&apos;accepte que mes coordonnées et données soient collectées et stockées électroniquement pour répondre à ma requête.
                    </label>
                </div>
                <SubmitBtn />
            </form>
        </>
    );
}
