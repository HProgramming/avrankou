import {useRef} from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Economy = () => {
    const scrollRefs = useRef<(HTMLDivElement | null)[]>([]);

    // Use the custom hook for intersection observer
    useIntersectionObserver(scrollRefs);

    return (
        <div className={`bg-white p-10 mx-auto`}>
            <h1 className="heading-primary mb-8 text-primary">Economie</h1>

            <div className={`grid md:grid-cols-2 gap-4`}>
                <div
                    ref={(el) => (scrollRefs.current[0] = el)}
                    className={`animate-scale-in animate-delay-300`}
                >
                    <div className={`w-full rounded-4xl`}>
                        <img src={`https://cotonou.mairie.bj/public/medias/economie-cotonou-1688213145.png`}
                             className={``}
                             alt={`Fresque mural`}/>
                    </div>
                </div>
                <div
                    ref={(el) => (scrollRefs.current[1] = el)}
                    className={`animate-scroll animate-delay-300`}
                >
                    <h1 className="heading-primary mb-8 text-primary">Situation économique</h1>
                    <p className={`text-lg font-medium leading-9 mb-8`}>
                        Avrankou se distingue par la diversité de ses activités : élevage, pêche, pisciculture,
                        artisanat, commerce, et surtout agriculture, qui occupe 60 % de la population. Le palmier à
                        huile, produit phare, a contribué au rayonnement de la commune, notamment avec l'installation
                        d'une huilerie dès 1947. Grâce à sa proximité avec le Nigéria et Porto-Novo, Avrankou bénéficie
                        également d’un fort potentiel économique.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Economy;
