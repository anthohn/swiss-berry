"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import SubmitBtn from "@/app/components/submit-btn";

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
            <form className="relative flex flex-col space-y-6 w-full p-8 text-[16px] rounded-3xl border bg-[#D9D9D9] bg-opacity-20 text-neutral-400"
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
                <div className="flex flex-wrap justify-between space-x-3">
                    <input
                        className="flex-grow h-12 border bg-[#EEEEEE] bg-opacity-10 focus:outline-none px-4 rounded-xl"
                        name="senderFirstName"
                        type="text"
                        maxLength={500}
                        placeholder="Prénom"
                        autoComplete="off"
                    />
                    <input
                        className="flex-grow h-12 border bg-[#EEEEEE] bg-opacity-10 focus:outline-none px-4 rounded-xl"
                        name="senderLastName"
                        type="text"
                        maxLength={500}
                        placeholder="Nom"
                        autoComplete="off"
                    />
                </div>
                <input
                    className="h-12 border bg-[#EEEEEE] bg-opacity-10 focus:outline-none px-4 rounded-xl"
                    name="senderEmail"
                    type="email"
                    maxLength={500}
                    placeholder="E-mail"
                    autoComplete="off"
                />
                <input
                    className="h-12 border bg-[#EEEEEE] bg-opacity-10 focus:outline-none px-4 rounded-xl"
                    name="senderNumberPhone"
                    type="tel" // Correction de type pour le numéro de téléphone
                    maxLength={500}
                    placeholder="Numéro de téléphone"
                    autoComplete="off"
                />
                <input
                    className="h-12 border bg-[#EEEEEE] bg-opacity-10 focus:outline-none px-4 rounded-xl"
                    name="senderWebSite"
                    type="text"
                    maxLength={500}
                    placeholder="Lien de votre site web (optionnel)"
                    autoComplete="off"
                />
                <input
                    className="h-12 border bg-[#EEEEEE] bg-opacity-10 focus:outline-none px-4 rounded-xl"
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
                        required
                    />
                    <label htmlFor="dataProtection" className="text-[12px]">
                        Oui, j&apos;ai lu les informations sur la protection des données et j&apos;accepte que mes coordonnées et données soient collectées et stockées électroniquement pour répondre à ma requête.
                    </label>
                </div>
                
                <SubmitBtn />
            </form>
        </>
    );
}
