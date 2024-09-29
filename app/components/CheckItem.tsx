
import Check from '@/public/svg/check.svg'
import Image from 'next/image'

interface Props {
    children: string;  // Le texte est maintenant optionnel
  }

export default function CheckItem({children}: Props) {
    return (
        <li className='flex flex-wrap items-center space-x-4'>
            <div className='bg-gradient-to-b from-[#3B4297] to-[#131531] rounded-full p-1'>
                <Image src={Check} width={25} height={25} alt="logo Swiss Berry" />
            </div>
            <p>{children}</p>
        </li>
    )
}