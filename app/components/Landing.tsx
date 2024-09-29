
import CheckItem from './CheckItem';

export default function Landing() {
    return(
        <>
            <section className="w-8/12 flex flex-col space-y-24 mx-auto text-center pt-40">
                <h1 className="text-6xl font-medium">Votre présence en ligne,<br/> sublimée par notre expertise.</h1>
                <ul className="flex flex-wrap justify-center space-x-10 text-xl"> 
                    <CheckItem>Solution sur mesure</CheckItem>
                    <CheckItem>Hébergement sécurisé</CheckItem>
                    <CheckItem>Flexibilité totale</CheckItem>
                </ul>
                <div>
                    <a href="/contact" className=' text-xl rounded-xl w-auto p-5 bg-gradient-to-b from-[#3B4297] to-[#131531]'>Discutions de votre projet</a>
                </div>
            </section>
        </>
    )
}