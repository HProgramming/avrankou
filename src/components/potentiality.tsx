import {useEffect, useRef, useState} from "react";
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const POTENTIALITIES =
    [
        {
            name: "Forces",
            values: ["Existence du marché international Dantokpa, des marchés secondaires et des supérettes, boutiques et magasins de stockage.",
                "Forte demande des produits et services.", "Possibilité du commerce de proximité et facilité d'accès aux produits de premières nécessités."
                , "Existence de plusieurs corps de métiers.", "Existence de mécanismes d'appui pour la formation et le perfectionnement des artisans.",
                "Proximité des villes à grandes potentialités touristiques.",
                "Forte fréquentation des touristes.", "Disponibilité et bonne répartition géographique des hôtels et motels de différents standings."],
        },
        {
            name: "Opportunités",
            values: ["La mise en oeuvre du PAG.",
                "Disponibilité d'espace pouvant abriter les marchés secondaires.",
                "Cotonou : centre d'affaires et densité de la population.",
                "Proximité du Nigéria qui est un grand marché de consommation."],
        }
    ];
const Potentiality = () => {
    const [current, setCurrent] = useState<string>(POTENTIALITIES[0].name);
    const scrollRefs = useRef<(HTMLDivElement | null)[]>([]);
    const listItemRefs = useRef<(HTMLLIElement | null)[]>([]);

    useIntersectionObserver(scrollRefs);

    useIntersectionObserver(listItemRefs, 0.2);

    useEffect(() => {
        listItemRefs.current = [];
    }, [current]);

    const updateCurrent = (value: string) => {
        setCurrent(value);
    }

    return (
        <div>
            <div className={`bg-blue-secondary w-full h-64 relative`}>
                <h1
                    ref={(el) => (scrollRefs.current[0] = el)}
                    className="heading-primary mb-8 text-primary text-center pt-10 animate-scroll animate-delay-300"
                >
                    Potentialité
                </h1>
                <div
                    ref={(el) => (scrollRefs.current[1] = el)}
                    className={`absolute -top-[125] left-28 w-5/6 min-h-32 rounded-xl py-7 bg-white flex animate-scale-in animate-delay-500`}>
                    <div
                        ref={(el) => (scrollRefs.current[2] = el)}
                        className={`h-full w-44 rounded-l-xl animate-scroll animate-delay-700`}
                    >
                        {POTENTIALITIES.map((p, index) => {
                            return (
                                <div
                                    key={index}
                                    onClick={updateCurrent.bind(this, p.name)}
                                    className={current === p.name ?
                                        `my-5 bg-[#004B70] px-6 py-2 text-white cursor-pointer transition-all duration-300` :
                                        `my-5 text-blue-500 hover:bg-blue-100 px-6 py-2 transition-all duration-300`
                                    }
                                >
                                    <p className={`text-center text-lg font-semibold cursor-pointer`}>{p.name}</p>
                                </div>
                            )
                        })}
                    </div>
                    <div
                        ref={(el) => (scrollRefs.current[3] = el)}
                        className={`w-full h-full animate-scroll animate-delay-700`}
                    >
                        <div className={`ml-10 w-full h-full p-2 py-8`}>
                            <ul className={`text-lg font-medium leading-9`}>
                                {POTENTIALITIES.map((p) => {
                                    return current === p.name && p.values.map((v, i) => {
                                        return (
                                            <li
                                                key={i}
                                                className={`list-disc `}>
                                                {v}
                                            </li>
                                        )
                                    })
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`bg-[#eeeeee] w-full h-64`}></div>
        </div>
    );
}


export default Potentiality;