import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

interface BaseSlide {
    name: string;
    imageUrl: string;
    type: string;
}

interface TouristPlace extends BaseSlide {
    type: 'place';
    description?: string;
    link: string;
}

interface Personality extends BaseSlide {
    type: 'personality';
    description: string;
    link: string;
}

type Slide = TouristPlace | Personality;

const touristPlaces: TouristPlace[] = [
    {
        name: "La forêt sacrée",
        description: "Un sanctuaire naturel préservé au cœur d'Avrankou",
        imageUrl: "/foret.jpg",
        type: "place",
        link: "/attractions"
    },
    {
        name: "La rivière noire",
        description: "Un cours d'eau mystique aux eaux sombres et apaisantes",
        imageUrl: "/riviere_noire.jpg",
        type: "place",
        link: "/attractions"
    },
    {
        name: "Le site de Zèkpon",
        description: "Source d'eau sacrée aux nombreuses vertus thérapeutiques",
        imageUrl: "/zekpon.jpeg",
        type: "place",
        link: "/attractions"
    },
    {
        name: "Culture Vodoun",
        description: "Héritage spirituel et culturel ancestral du Bénin",
        imageUrl: "/vodoun.JPG",
        type: "place",
        link: "/attractions"
    },
];

const personalities: Personality[] = [
    {
        name: "Atawe",
        description: "Chasseur légendaire de Tori-Agué qui a découvert Avlan",
        imageUrl: "/peuplement-avrankou.jpg",
        type: "personality",
        link: "/history"
    },
];

const allSlides: Slide[] = [...touristPlaces, ...personalities];

const PersonalitiesAndPlacesSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    const goToSlide = useCallback((index: number) => {
        if (isTransitioning || index === currentSlide) return;
        setIsTransitioning(true);
        setCurrentSlide(index);
        setTimeout(() => setIsTransitioning(false), 800);
    }, [isTransitioning, currentSlide]);

    const nextSlide = useCallback(() => {
        goToSlide(currentSlide === allSlides.length - 1 ? 0 : currentSlide + 1);
    }, [currentSlide, goToSlide]);

    const prevSlide = useCallback(() => {
        goToSlide(currentSlide === 0 ? allSlides.length - 1 : currentSlide - 1);
    }, [currentSlide, goToSlide]);

    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(nextSlide, 6000);
        return () => clearInterval(interval);
    }, [nextSlide, isPaused]);

    return (
        <div
            className="relative w-full h-[85vh] min-h-[600px] max-h-[900px] overflow-hidden bg-gray-900"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Slides */}
            {allSlides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-1000 ease-out ${
                        index === currentSlide
                            ? 'opacity-100 scale-100'
                            : 'opacity-0 scale-105'
                    }`}
                >
                    {/* Image avec effet Ken Burns subtil */}
                    <div
                        className={`absolute inset-0 bg-cover bg-center transition-transform duration-[8000ms] ease-out ${
                            index === currentSlide ? 'scale-110' : 'scale-100'
                        }`}
                        style={{
                            backgroundImage: `url(${slide.imageUrl})`,
                        }}
                    />

                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
                </div>
            ))}

            {/* Contenu */}
            <div className="relative z-10 h-full flex flex-col justify-end pb-24 px-6 sm:px-12 lg:px-20">
                <div className="max-w-4xl">
                    {/* Badge */}
                    <div
                        className={`inline-flex items-center gap-2 mb-4 transition-all duration-700 ${
                            isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
                        }`}
                        style={{ transitionDelay: '200ms' }}
                    >
                        <span className={`px-4 py-1.5 text-xs font-semibold tracking-wider uppercase rounded-full ${
                            allSlides[currentSlide].type === 'personality'
                                ? 'bg-amber-500/90 text-white'
                                : 'bg-emerald-600/90 text-white'
                        }`}>
                            {allSlides[currentSlide].type === 'personality' ? 'Personnalité' : 'Lieu touristique'}
                        </span>
                    </div>

                    {/* Titre */}
                    <h2
                        className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight transition-all duration-700 ${
                            isTransitioning ? 'opacity-0 translate-y-6' : 'opacity-100 translate-y-0'
                        }`}
                        style={{ transitionDelay: '300ms' }}
                    >
                        {allSlides[currentSlide].name}
                    </h2>

                    {/* Description */}
                    <p
                        className={`text-lg sm:text-xl text-white/90 max-w-2xl leading-relaxed transition-all duration-700 ${
                            isTransitioning ? 'opacity-0 translate-y-6' : 'opacity-100 translate-y-0'
                        }`}
                        style={{ transitionDelay: '400ms' }}
                    >
                        {allSlides[currentSlide].type === 'personality'
                            ? (allSlides[currentSlide] as Personality).description
                            : (allSlides[currentSlide] as TouristPlace).description || ''
                        }
                    </p>

                    {/* Boutons d'action */}
                    <div
                        className={`mt-8 flex flex-wrap gap-4 transition-all duration-700 ${
                            isTransitioning ? 'opacity-0 translate-y-6' : 'opacity-100 translate-y-0'
                        }`}
                        style={{ transitionDelay: '500ms' }}
                    >
                        {/* Bouton principal - lien vers la page spécifique */}
                        <Link
                            to={allSlides[currentSlide].link}
                            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-emerald-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:bg-emerald-500 hover:shadow-lg hover:shadow-emerald-500/25 hover:-translate-y-0.5"
                        >
                            <span className="relative z-10">
                                {allSlides[currentSlide].type === 'personality' ? 'Lire l\'histoire' : 'Voir les attractions'}
                            </span>
                            <svg
                                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>

                        {/* Bouton secondaire - Découvrir Avrankou */}
                        <Link
                            to="/discover"
                            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-medium rounded-full overflow-hidden transition-all duration-300 hover:bg-white hover:text-gray-900 hover:border-white"
                        >
                            <span className="relative z-10">Découvrir Avrankou</span>
                            <svg
                                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Navigation arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white transition-all duration-300 hover:bg-white hover:text-gray-900 hover:scale-110"
                aria-label="Slide précédent"
            >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white transition-all duration-300 hover:bg-white hover:text-gray-900 hover:scale-110"
                aria-label="Slide suivant"
            >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* Progress indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
                {allSlides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className="group relative h-1 rounded-full overflow-hidden transition-all duration-300"
                        style={{ width: index === currentSlide ? '48px' : '24px' }}
                        aria-label={`Aller au slide ${index + 1}`}
                    >
                        <div className="absolute inset-0 bg-white/30" />
                        <div
                            className={`absolute inset-0 bg-white transition-transform duration-300 origin-left ${
                                index === currentSlide ? 'scale-x-100' : 'scale-x-0'
                            }`}
                            style={{
                                animation: index === currentSlide && !isPaused ? 'progress 6s linear' : 'none'
                            }}
                        />
                    </button>
                ))}
            </div>

            {/* Slide counter */}
            <div className="absolute bottom-8 right-8 z-20 hidden sm:flex items-center gap-2 text-white/70 text-sm font-medium">
                <span className="text-white text-lg">{String(currentSlide + 1).padStart(2, '0')}</span>
                <span>/</span>
                <span>{String(allSlides.length).padStart(2, '0')}</span>
            </div>

            {/* Style pour l'animation de progression */}
            <style>{`
                @keyframes progress {
                    from { transform: scaleX(0); }
                    to { transform: scaleX(1); }
                }
            `}</style>
        </div>
    );
};

export default PersonalitiesAndPlacesSlider;