import Image from "next/image";
import Link from "next/link";
import { links } from "@/lib/data";
import LogoSwissBerry from '@/public/svg/logo.svg';
import LinkedIn from "@/public/linkedIn.png"
import { ThemeToggle } from "../theme-toggle";

export default function Footer() {

    return (
        <>
            <div className="flex flex-col border-t space-y-10 p-10 rounded-2xl">
                <a className="flex items-center mx-auto space-x-4" href="https://swiss-berry.com">
                    <Image src={LogoSwissBerry} width={50} height={50} alt="logo Swiss Berry" />
                    <span className="text-3xl font-bold text-primary-light dark:text-primary-dark">Swissberry</span>
                </a>
                <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0  space-x-0 md:space-x-20 mx-auto text-primary-light dark:text-primary-dark">
                    {links.map((link) => (
                    <Link key={link.href} href={link.href} className="hover:text-gray-400">
                        {link.label} 
                    </Link>
                
                    ))}
                    <Link href="/politique-de-confidentialite" className="hover:text-gray-400">Politique de confidentialité</Link>
                    <ThemeToggle />
                </div>
                <a className="mx-auto" href="https://www.linkedin.com/company/swiss-berry/">
                    <Image src={LinkedIn} width={25} height={15} alt="logo Swiss Berry" />
                </a>
                <p className="mx-auto text-sm">© 2024 Swiss Berry. Tous droits réservé.</p>
            </div>
        </>
    );
}
