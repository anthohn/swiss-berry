import Check from '@/public/svg/check.svg'
import Image from 'next/image'

interface Props {
  children: string; 
}

export default function CheckItemBoost({children}: Props) {
    return (
        <li className='flex items-center space-x-4'>
            <div className='bg-check-light dark:bg-check-dark rounded-full p-2 flex-shrink-0 shadow-xl'>
                <Image src={Check} width={27} height={27} alt="logo Swiss Berry" />
            </div>
            <span className='text-[18px] font-medium text-secondary-light dark:text-secondary-dark'>{children}</span>
        </li>
    )
}
