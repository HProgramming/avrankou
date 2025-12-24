import React from 'react';
import { Link } from 'react-router-dom';
import useIntersectionObserver from '../../hooks/useIntersectionObserver.ts';
import BackButton from '../../components/BackButton.tsx';
import {attractions} from "./touristic_attraction.ts";




const TouristicAttractions = () => {
    const attractionRefs = React.useRef<(HTMLDivElement | null)[]>([]);

    useIntersectionObserver(attractionRefs, 0.1);

    return (
        <div className={`bg-gray-50 min-h-screen`}>
            {/* Header */}
            <div className="bg-emerald-700 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <BackButton className="mb-6" />
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">
                        Attractions touristiques d'Avrankou
                    </h1>
                    <p className="text-lg text-emerald-100 max-w-3xl">
                        Explorez les trésors cachés de notre commune. Des forêts sacrées aux rivières mystérieuses,
                        en passant par les sites historiques et la riche culture vodoun, Avrankou vous invite
                        à un voyage au cœur de l'authenticité béninoise.
                    </p>
                </div>
            </div>

            {/* Stats */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
                <div className="bg-white rounded-2xl shadow-lg p-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-emerald-600">{attractions.length}</div>
                            <div className="text-sm text-gray-500">Sites à découvrir</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-emerald-600">9</div>
                            <div className="text-sm text-gray-500">Arrondissements</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-emerald-600">100+</div>
                            <div className="text-sm text-gray-500">Années de tradition</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-emerald-600">365</div>
                            <div className="text-sm text-gray-500">Jours d'accueil</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Introduction */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-emerald-50 rounded-2xl p-8 mb-12">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                            <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold text-emerald-900 mb-2">
                                Bienvenue dans le patrimoine d'Avrankou
                            </h2>
                            <p className="text-emerald-800 leading-relaxed">
                                La commune d'Avrankou regorge de sites naturels et culturels d'une richesse exceptionnelle.
                                Terre de traditions vodoun, notre commune préserve un héritage spirituel et historique
                                unique au monde. Chaque site raconte une histoire, chaque lieu porte l'empreinte des
                                ancêtres. Nous vous invitons à explorer ces trésors avec respect et curiosité.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Attractions Grid */}
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Nos sites touristiques</h2>
                <div className={`grid md:grid-cols-2 gap-6`}>
                    {attractions.map((attraction, index) =>
                        <Link
                            key={attraction.id}
                            to={`/attractions/${attraction.id}`}
                            ref={(el) => (attractionRefs.current[index] = el as unknown as HTMLDivElement | null)}
                            style={{backgroundImage: `url(${attraction.imageUrl})`}}
                            className={`group animate-scroll h-[400px] bg-cover bg-blend-overlay rounded-xl bg-black/20 hover:bg-black/40 bg-center text-white text-center flex flex-col justify-center items-center cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${
                                index % 4 === 0 ? 'animate-delay-300' :
                                index % 4 === 1 ? 'animate-delay-500' :
                                index % 4 === 2 ? 'animate-delay-700' : 'animate-delay-900'
                            }`}
                        >
                            <h3 className="text-2xl font-semibold text-white drop-shadow-lg px-4">{attraction.name}</h3>
                            <span className="mt-4 inline-flex items-center gap-2 text-white/80 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Découvrir
                                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </span>
                        </Link>
                    )}
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gray-100 py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        Planifiez votre visite
                    </h2>
                    <p className="text-gray-600 mb-8">
                        Vous souhaitez organiser une visite guidée ou obtenir plus d'informations sur nos sites touristiques ?
                        Contactez-nous et nous vous aiderons à préparer votre découverte d'Avrankou.
                    </p>
                    <Link
                        to="/write-to-executive-secretary"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-full transition-colors"
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Nous contacter
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default TouristicAttractions;
