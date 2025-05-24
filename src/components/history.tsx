import { useEffect, useRef } from 'react';

const History = () => {
    const scrollRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        scrollRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            scrollRefs.current.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, []);

    return (
        <div className={`bg-gray-200 p-10 mx-auto`}>
            <div className={`grid md:grid-cols-2 gap-4`}>

                <div 
                    ref={(el) => (scrollRefs.current[0] = el)} 
                    className={`w-full animate-scroll`}
                >
                    <h1 className="heading-primary mb-8 text-gray-700">Histoire</h1>
                    <p className={`text-lg font-medium leading-9 mb-8`}>La ville de Cotonou a été créée en 1830 sur
                        initiative du Roi Guézo, illustre roi d'Abomey. Selon l'une des légendes, son nom initial est
                        «Kutonou», signifiant «la lagune de la mort», en raison du rôle de carrefour que la ville a joué
                        dans le trafic des esclaves.</p>
                    <p className={`text-lg font-medium leading-9`}>A la fin du 19ème siècle, Cotonou s'est développé à
                        partir de quelques villages de pêcheurs situés à l'Est et à l'Ouest de la lagune. En 1888, le
                        territoire de la ville a été cédé à la France par le Roi d'Abomey, ce qui eut pour effet
                        l'accélération de son développement.</p>
                </div>
                <div 
                    ref={(el) => (scrollRefs.current[1] = el)} 
                    className={`w-full pl-8 animate-scale-in`}
                >
                    <img src={`https://cotonou.mairie.bj/public/medias/illustration-historique-1-1688213117.png`}
                         alt={"Ilustration historique"} className={``}/>
                </div>
                <div 
                    ref={(el) => (scrollRefs.current[2] = el)}
                    className={`w-full rounded-4xl animate-scale-in`}>
                    <img src={`https://cotonou.mairie.bj/public/medias/fresque-mural-port-cotonou.jpg`} className={``} alt={`Fresque mural`}/>
                </div>
                <div 
                    ref={(el) => (scrollRefs.current[3] = el)} 
                    className={`w-full animate-scroll`}
                >
                    <p className={`text-lg font-medium leading-9 mb-8`}>A partir du noyau originel des Toffins, la ville
                        de Cotonou s'est progressivement enrichie de toutes les ethnies du Bénin. Certains quartiers en
                        portent aujourd'hui la marque. Ainsi, Guincomey signifie « sur la terre des populations Guin »,
                        venues de Grand-Popo et d'Agoué pour participer à la construction du Wharf de Cotonou. De même,
                        Xwlacodji désigne la terre des Xwla.</p>
                    <p className={`text-lg font-medium leading-9 mb-8`}>Actuellement, Cotonou est devenu une ville
                        représentative du Bénin et sa croissance accélérée est en train de donner naissance à une vaste
                        région urbaine allant de Porto-Novo (à l'Est) jusqu'à Ouidah (à l'Ouest) et Abomey-Calavi (au
                        Nord). C'est cette conurbation qui est désignée aujourd'hui par le « Grand Nokoué ».</p>
                </div>
            </div>
        </div>
    )
};

export default History;

