import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const attractions = [
    {
        name: "Le Monument aux Dévoués",
        imageUrl: "/l-esplanade-aux-devoues.jpg",
    },
    {
        name: "L'esplanade de l'Amazone",
        imageUrl: "/l-esplanade-de-l-amazone.jpg",
    },
    {
        name: "La statue de Bio Guera",
        imageUrl: "/la-statue-bio-guera.jpg",
    },
    {
        name: "Place des Martyrs",
        imageUrl: "/place-des-martyrs.jpg",
    },
    {
        name: "La route des pêches",
        imageUrl: "/route-des-peches.jpg",
    },
    {
        name: "Le Jardin de Mathieu",
        imageUrl: "/le-jardin-de-mathieu.png",
    }
];

const TouristicAtraction = () => {
    const attractionRefs = React.useRef<(HTMLDivElement | null)[]>([]);

    useIntersectionObserver(attractionRefs, 0.1);

    return (
        <div className={`bg-[#eeeeee] w-full `}>
            <h1
                className="heading-primary mb-8 text-primary text-center pt-44 animate-scroll visible">
                Attractions touristiques d'Avrankou</h1>

            <div className={`grid md:grid-cols-3 gap-4 bg-white container mx-auto p-10 rounded-md`}>
                {attractions.map((attraction, index) =>
                    <div
                        key={index}
                        ref={(el) => (attractionRefs.current[index] = el)}
                        style={{backgroundImage: `url(${attraction.imageUrl})`}}
                        className={`animate-scroll h-[400px] w-96 bg-cover bg-blend-overlay rounded-md bg-black/15 bg-center text-white text-center flex justify-center items-center ${
                            index % 6 === 0 ? 'animate-delay-300' :
                            index % 6 === 1 ? 'animate-delay-500' :
                            index % 6 === 2 ? 'animate-delay-700' :
                            index % 6 === 3 ? 'animate-delay-900' :
                            index % 6 === 4 ? 'animate-delay-1100' : 'animate-delay-1300'
                        }`}
                    >
                            <h5 className={`text-2xl font-semibold text-white`}>{attraction.name}</h5>

                    </div>)
                }
            </div>
        </div>
    )
}
export default TouristicAtraction;
