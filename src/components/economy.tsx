
import {useRef} from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Economy = () => {
    const scrollRefs = useRef<(HTMLDivElement | null)[]>([]);

    // Use the custom hook for intersection observer
    useIntersectionObserver(scrollRefs);

    return (
        <section className={`bg-white p-10 mx-auto`} >
            <h1 className="heading-primary mb-8 text-primary">Economie</h1>

            <div className={`grid md:grid-cols-2 gap-4`}>
                <div
                    ref={(el) => (scrollRefs.current[0] = el)}
                    className={`animate-scale-in animate-delay-300`}
                >
                    <div className={`w-full rounded-4xl`}>

                      <img src={`https://cotonou.mairie.bj/public/medias/economie-cotonou-1688213145.png`} className={``}

                          
                             alt={`Fresque mural`}/>
                    </div>
                </div>
                <div
                    ref={(el) => (scrollRefs.current[1] = el)}
                    className={`animate-scroll animate-delay-300`}
                >
                    <h1 className="heading-primary mb-8 text-primary">Situation économique</h1>
                    <p className={`text-lg font-medium leading-9 mb-8`}>Les activités économiques exercées dans la ville de
                        Cotonou relèvent surtout du secteur tertiaire,
                        tel que le commerce et les services, qui sont appuyées par quelques industries manufacturières.
                        Quant aux activités agricoles, elles n'occupent qu'une petite frange de la population qui pratique
                        le maraîchage, soit 80% des actifs agricoles. L'artisanat et le commerce constituent la base de
                        l'économie locale de la municipalité, du fait de la présence de grands opérateurs économiques.</p>

        
                </div>
            </div>
        </section>
    );
};

export default Economy;
