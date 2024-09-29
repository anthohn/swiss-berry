'use client'
import Link from "next/link";
// import { usePathname } from 'next/navigation';
import { links } from "@/lib/data";
import Image from "next/image";
import LogoSwissBerry from '@/public/svg/logo-text-blanc.svg'



export default function Header() {

    // const pathname = usePathname();

    return(
        <>
        {/* fixed */}
          <nav className=" w-full p-8 z-50">
            <div className="mx-auto w-9/12 flex flex-wrap items-center justify-between">
                <a href="/" className="flex-shrink-0">
                <Image src={LogoSwissBerry} width={150} height={150} alt="logo Swiss Berry" />
                </a>
                <ul className="flex flex-wrap space-x-12">
                {links.map((link) => (
                    <li key={link.href}>
                    <Link href={link.href} className="text-white text-lg font-bold">
                        {link.label}
                    </Link>
                    </li>
                ))}
                </ul>
            </div>
            </nav>



        </>
    )
}