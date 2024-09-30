import CheckItemBoost from './BoostCheckItem';
import BoostUncheckItem from './BoostUncheckItem';



export default function Boost() {
    return(
        <>
            <section className="pt-40 w-full md:w-11/12 xl:w-10/12 2xl:w-9/12 mx-auto">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight text-center mx-10 lg:mx-0">Comment un site performant booste votre <br/> chiffre d&apos;affaires</h2>
                <div className="flex flex-col space-y-16 xl:space-y-0 xl:flex-row pt-44 items-center justify-center">

                    <div className="sm:w-9/12 md:w-8/12 lg:w-7/12 xl:w-5/12 mx-4 sm:mx-10">
                        <div className="relative bg-[#D9D9D9] bg-opacity-5 rounded-3xl border">
                            <h3 className="absolute text-3xl font-semibold w-full text-center border-b bg-[#D9D9D9] bg-opacity-5 py-4 rounded-3xl">Site web classique</h3>
                            <ul className='pt-24 space-y-4 p-6'>
                                <BoostUncheckItem>Ne génère pas ou peu de demandes clients, car il n&apos;est pas optimisé pour la conversion.</BoostUncheckItem>
                                <BoostUncheckItem>Manque de compétitivité, car il ne se distingue pas des autres.</BoostUncheckItem>
                                <BoostUncheckItem>Ne communique pas clairement la valeur ajoutée des services de l&apos;entreprise.</BoostUncheckItem>
                                <BoostUncheckItem>N&apos;a pas un impact visuel percutant sur les visiteurs.</BoostUncheckItem>
                            </ul>
                        </div>

                    </div>

                    <div className="sm:w-9/12 md:w-8/12 lg:w-7/12 xl:w-5/12 mx-4 sm:mx-10">
                        <div className="bg-[#D9D9D9] relative bg-opacity-5 rounded-3xl border">
                        <div className='absolute inset-0 blur-[8rem] bg-[#61658F] -z-10'></div>
                            <h3 className="absolute text-3xl font-semibold w-full text-center border-b bg-[#D9D9D9] bg-opacity-40 py-4 rounded-3xl">Site performant</h3>
                            <ul className='pt-24 space-y-4 p-6'>
                                <CheckItemBoost>Séduit et impressionne les visiteurs dès la première seconde avec un design haut de gamme.</CheckItemBoost>
                                <CheckItemBoost>Met clairement en avant la valeur ajoutée des services de l&apos;entreprise avec des textes accrocheurs.</CheckItemBoost>
                                <CheckItemBoost>Crée une impression de qualité qui reflète parfaitement la marque.</CheckItemBoost>
                                <CheckItemBoost>Apporte une clarté sur l&apos;identité et l&apos;offre de l&apos;entreprise.</CheckItemBoost>
                                <CheckItemBoost>Génère efficacement des demandes clients grâce à une conception orientée conversion.</CheckItemBoost>
                            </ul>
                        </div>
                    </div>



                </div>

               
            </section>
        </>
    )
}