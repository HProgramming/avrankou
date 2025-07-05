import { Link } from 'react-router-dom';
import {ChevronRightIcon} from "./icons";

const Hero = () => {
    return (
        <div className={`bg-[url('./assets/hero.jpg')] h-[469px] bg-cover bg-center text-white`}>
            <div className={`container mx-auto`}>
                <div className="flex items-center p-10 text-md text-white font-semibold">
                    <Link to="/">Home</Link>
                    <ChevronRightIcon/>
                    <Link to="/discover">La ville - Mairie d'Avrankou</Link>
                </div>
                <div className={`mt-5 `}>
                    <h1 className="heading-primary mb-8">Avrankou</h1>
                    <p className={`max-w-96 text-lg font-medium leading-8`}>Tout savoir sur la ville d'Avrankou : son histoire, ses forces, opportunités et attractions
                        touristiques.</p>
                </div>

            </div>
        </div>
    )
}
export default Hero;
