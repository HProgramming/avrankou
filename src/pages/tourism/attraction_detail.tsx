import { useParams, Link } from 'react-router-dom';
import BackButton from '../../components/BackButton.tsx';
import {attractions} from "./touristic_attraction.ts";

const Attraction_detail = () => {
    const { id } = useParams<{ id: string }>();

    const attraction = attractions.find((a) => a.id === id);

    if (!attraction) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-10 h-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Attraction non trouvée</h2>
                    <p className="text-gray-600 mb-8">
                        L'attraction que vous recherchez n'existe pas ou a été déplacée.
                    </p>
                    <Link
                        to="/attractions"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-full transition-all duration-300"
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Retour aux attractions
                    </Link>
                </div>
            </div>
        );
    }

    // Get other attractions for recommendations
    const otherAttractions = attractions.filter((a) => a.id !== id).slice(0, 3);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div
                className="relative h-[50vh] min-h-[400px] bg-cover bg-center"
                style={{ backgroundImage: `url(${attraction.imageUrl})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-between">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 w-full">
                        <BackButton variant="white" href="/attractions" label="Retour aux attractions" />
                    </div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
                        <div className="flex items-center gap-2 text-white/80 text-sm mb-3">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {attraction.location}
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            {attraction.name}
                        </h1>
                        <p className="text-lg text-white/90 max-w-2xl">
                            {attraction.shortDescription}
                        </p>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <article className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                À propos de {attraction.name}
                            </h2>
                            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
                                <p>{attraction.fullDescription}</p>
                            </div>

                            {/* Highlights */}
                            <div className="mt-10 pt-8 border-t border-gray-100">
                                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                                    Points forts
                                </h3>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {attraction.highlights.map((highlight, index) => (
                                        <div key={index} className="flex items-start gap-3">
                                            <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                                <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span className="text-gray-700">{highlight}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </article>

                        {/* Share Section */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mt-6">
                            <div className="flex items-center justify-between">
                                <span className="text-gray-700 font-medium">Partager cette page</span>
                                <div className="flex items-center gap-3">
                                    <button
                                        onClick={() => {
                                            if (navigator.share) {
                                                navigator.share({
                                                    title: attraction.name,
                                                    text: attraction.shortDescription,
                                                    url: window.location.href
                                                });
                                            }
                                        }}
                                        className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-emerald-100 hover:text-emerald-600 transition-colors"
                                    >
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        {/* Info Card */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-8">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                Informations pratiques
                            </h3>

                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">Localisation</p>
                                        <p className="text-sm text-gray-500">{attraction.location}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">Horaires</p>
                                        <p className="text-sm text-gray-500">Accessible toute l'année</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">Visite guidée</p>
                                        <p className="text-sm text-gray-500">Guides locaux disponibles</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 pt-6 border-t border-gray-100">
                                <Link
                                    to="/write-to-executive-secretary"
                                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-colors"
                                >
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    Organiser une visite
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Other Attractions */}
            {otherAttractions.length > 0 && (
                <div className="bg-gray-100 py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-8">
                            Autres attractions à découvrir
                        </h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {otherAttractions.map((otherAttraction) => (
                                <Link
                                    key={otherAttraction.id}
                                    to={`/attractions/${otherAttraction.id}`}
                                    style={{ backgroundImage: `url(${otherAttraction.imageUrl})` }}
                                    className="group h-[300px] bg-cover bg-blend-overlay rounded-xl bg-black/20 hover:bg-black/40 bg-center text-white text-center flex flex-col justify-center items-center cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                                >
                                    <h3 className="text-xl font-semibold text-white drop-shadow-lg px-4">{otherAttraction.name}</h3>
                                    <span className="mt-3 inline-flex items-center gap-2 text-white/80 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        Découvrir
                                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Attraction_detail;