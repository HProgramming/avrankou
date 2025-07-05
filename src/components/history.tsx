import {useRef} from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import BackButton from './BackButton';

const History = () => {
    const scrollRefs = useRef<(HTMLDivElement | null)[]>([]);

    // Use the custom hook for intersection observer
    useIntersectionObserver(scrollRefs);

    return (
        <section className={`bg-gray-50 min-h-screen`}>
            {/* Header */}
            <div className="bg-emerald-700 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <BackButton className="mb-6" />
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">
                        Histoire d'Avrankou
                    </h1>
                    <p className="text-lg text-emerald-100 max-w-3xl">
                        Découvrez les origines et l'évolution de la commune d'Avrankou,
                        de ses premiers habitants à la symbiose culturelle actuelle.
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className={`grid md:grid-cols-2 gap-8`}>

                <div
                    ref={(el) => (scrollRefs.current[0] = el)}
                    className={`w-full animate-scroll`}
                >
                    <p className={`text-lg font-medium leading-9 mb-8`}>
                        L'histoire des origines de cette commune fait état de ce que, quelques siècles plus tôt
                        un Nago nommé Olafa, surnommé « Avlan » et originaire de Sakété, fut le premier habitant
                        connu de la région. Il s’installa à Kogbomè et fut découvert par deux chasseurs de Tori-Agué,
                        Atawe et Houenou, grâce à la fumée de sa forge.
                    </p>
                    <p className={`text-lg font-medium leading-9`}>Une amitié naquit entre eux, mais elle se termina
                        tragiquement quand Houenou tua Avlan lors d’un affrontement, l’enterrant debout à Kogbomè, site
                        où son tombeau reste visible. Cet événement marqua le début de l’installation du peuple Toli
                        dans la région. La mort d’Avlan, annoncée par la phrase « Avlan ti ku », aurait donné naissance,
                        par déformation, au nom « Avrankou » qui désigne aujourd’hui la commune.</p>
                </div>
                <div
                    ref={(el) => (scrollRefs.current[1] = el)}
                    className={`w-full pl-8 animate-scale-in`}
                >
                    <img src={`peuplement-avrankou.jpg`}
                         alt={"Ilustration historique"} className={`mt-16`}/>
                </div>
                <div
                    ref={(el) => (scrollRefs.current[2] = el)}
                    className={`w-full rounded-4xl animate-scale-in`}>
                    <img src={`event-avankou.jpg`} className={``}
                         alt={`Fresque mural`}/>
                </div>
                <div
                    ref={(el) => (scrollRefs.current[3] = el)}
                    className={`w-full animate-scroll`}
                >
                    <p className={`text-lg font-medium leading-9 mb-8`}>Il existe dans la Commune d’Avrankou plusieurs groupes sociaux désignés sous le vocable <span className={`italic font-semibold`}>Akota</span>
                        . Ils se différencient les uns des autres à travers la litanie des salutations, les us et
                        coutumes, les interdits ou totems, les danses et chansons lors des cultes traditionnels ou autres
                        cérémonies de réjouissances et de décès.</p>
                    <p className={`text-lg font-medium leading-9 mb-8`}>En dépit des divergences ethniques et culturelles qu’on peut constater à Avrankou, les Tolinou
                        constituent l’ethnie dominante de la commune. Ils ont développé et partagé avec les autres
                        entités ethniques une longue histoire socioculturelle. Leurs traditions et leurs coutumes ont
                        fini par créer une symbiose culturelle à travers le festival identitaire et communautaire
                        <span className={`italic font-semibold`}>Tolikunkanwxé</span> qui regroupe les peuples <span className={`italic font-semibold`}>toli </span>du Bénin et de la diaspora.</p>
                </div>
                </div>
            </div>
        </section>
    )
};

export default History;
