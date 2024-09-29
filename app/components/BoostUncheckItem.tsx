import Cross from '@/public/svg/cross.svg'
import Image from 'next/image'

interface Props {
  children: string; 
}

export default function CheckItemBoost({children}: Props) {
    return (
        <li className='flex items-center space-x-4'>
            <div className='bg-gradient-to-b from-[#181818] to-[#636363] rounded-full p-1 flex-shrink-0'>
                <Image src={Cross} width={27} height={27} alt="logo Swiss Berry" />
            </div>
            <span className='text-[18px] font-medium text-neutral-300'>{children}</span>
        </li>
    )
}
