
import CheckItem from './CheckItem';

export default function Landing() {
    return(
        <>
            <section className="flex flex-col space-y-20 mx-auto text-center pt-12 sm:pt-28">
                <h1 className="text-4xl md:text-5xl xl:text-6xl font-medium leading-tight">Votre présence en ligne,<br/> sublimée par notre expertise.</h1>
                <ul className="flex flex-col space-y-4 md:flex-row md:space-y-0 justify-center mx-auto md:space-x-6 text-xl items-start"> 
                    <CheckItem>Solution sur mesure</CheckItem>
                    <CheckItem>Hébergement sécurisé</CheckItem>
                    <CheckItem>Flexibilité totale</CheckItem>
                </ul>
                    <a href='/contact' className="mx-auto relative p-5 w-fit flex items-center rounded-xl bg-gradient-to-b from-[#3B4297] to-[#131531]">
                        <div className='absolute inset-0 blur-[1rem] z-[-1] bg-[#3B4297]'></div>
                        <p className="font-medium text-xl  z-10">Discutions de votre projet</p>
                    </a>
            </section>
        </>
    )
}