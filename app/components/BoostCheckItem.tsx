import Check from '@/public/svg/check.svg'
import Image from 'next/image'

interface Props {
  children: string; 
}

export default function CheckItemBoost({children}: Props) {
    return (
        <li className='flex items-center space-x-4'>
            <div className='bg-gradient-to-b from-[#3B4297] to-[#131531] rounded-full p-2 flex-shrink-0 shadow-xl'>
                <Image src={Check} width={27} height={27} alt="logo Swiss Berry" />
            </div>
            <span className='text-[18px] font-medium text-neutral-300'>{children}</span>
        </li>
    )
}
