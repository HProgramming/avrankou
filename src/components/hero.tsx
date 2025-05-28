import {ChevronRightIcon} from "./icons";

const Hero = () => {
    return (
        <div className={`bg-[url('./assets/hero.jpg')] min-h-[300px] sm:min-h-[400px] md:h-[469px] bg-cover bg-center text-white`}>
            <div className={`container mx-auto`}>
                <div className="flex items-center p-4 sm:p-6 md:p-10 text-sm sm:text-md text-white font-semibold">
                    <a href="/">Home</a>
                    <ChevronRightIcon/>
                    <a href="/discover">La ville - Mairie d'Avrankou</a>
                </div>
                <div className={`mt-3 sm:mt-4 md:mt-5 p-4 sm:p-6 md:p-10`}>
                    <h1 className="heading-primary mb-4 sm:mb-6 md:mb-8">Avrankou</h1>
                    <p className={`max-w-full sm:max-w-96 text-base sm:text-lg font-medium leading-7 sm:leading-8`}>Tout savoir sur la ville d'Avrankou : son histoire, ses forces, opportunités et attractions
                        touristiques.</p>
                </div>

            </div>
        </div>
    )
}
export default Hero;
