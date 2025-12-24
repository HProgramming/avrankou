import { Link } from 'react-router-dom';
import {
    BankNotesIcon,
    ChatIcon,
    ExclamationCircleIcon,
    PhoneMobileIcon
} from "../components/icons.tsx";
import PersonalitiesAndPlacesSlider from "../components/PersonalitiesAndPlacesSlider.tsx";

interface QuickAccessCardProps {
    title: string;
    description: string;
    link: string;
    icon: React.ReactNode;
    external?: boolean;
}

const QuickAccessCard = ({ title, description, link, icon, external }: QuickAccessCardProps) => {
    const content = (
        <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 transition-colors duration-300 group-hover:bg-emerald-600 group-hover:text-white">
                {icon}
            </div>
            <div className="flex-1 min-w-0">
                <h3 className="text-base font-semibold text-gray-900 mb-1 group-hover:text-emerald-600 transition-colors">
                    {title}
                </h3>
                <p className="text-sm text-gray-500 line-clamp-2">
                    {description}
                </p>
            </div>
            {external && (
                <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
            )}
        </div>
    );

    if (external) {
        return (
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-white rounded-2xl p-6 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-xl hover:border-emerald-200 hover:-translate-y-1"
            >
                {content}
            </a>
        );
    }

    return (
        <Link
            to={link}
            className="group relative bg-white rounded-2xl p-6 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-xl hover:border-emerald-200 hover:-translate-y-1"
        >
            {content}
        </Link>
    );
};

interface NewsCardProps {
    title: string;
    excerpt: string;
    imageUrl: string;
    category: string;
    date: string;
    featured?: boolean;
}

const NewsCard = ({ title, excerpt, imageUrl, category, date, featured }: NewsCardProps) => {
    if (featured) {
        return (
            <article className="group relative bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-xl">
                <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative h-64 md:h-full min-h-[300px] overflow-hidden">
                        <img
                            src={imageUrl}
                            alt={title}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent md:bg-gradient-to-r" />
                    </div>
                    <div className="p-8 md:p-10 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="px-3 py-1 text-xs font-semibold text-emerald-700 bg-emerald-50 rounded-full">
                                {category}
                            </span>
                            <span className="text-sm text-gray-400">{date}</span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-emerald-600 transition-colors">
                            {title}
                        </h3>
                        <p className="text-gray-600 mb-6 line-clamp-3">
                            {excerpt}
                        </p>
                        <div className="mt-auto">
                            <span className="inline-flex items-center gap-2 text-emerald-600 font-medium group-hover:gap-3 transition-all">
                                Lire la suite
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
            </article>
        );
    }

    return (
        <article className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="relative h-48 overflow-hidden">
                <img
                    src={imageUrl}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-semibold text-white bg-emerald-600 rounded-full">
                        {category}
                    </span>
                </div>
            </div>
            <div className="p-6">
                <span className="text-sm text-gray-400 mb-2 block">{date}</span>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-emerald-600 transition-colors">
                    {title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                    {excerpt}
                </p>
                <span className="inline-flex items-center gap-2 text-emerald-600 text-sm font-medium">
                    Lire la suite
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </span>
            </div>
        </article>
    );
};

const quickAccessItems = [
    {
        title: "Portail national",
        description: "Accédez au portail officiel du gouvernement béninois",
        link: "https://gouv.bj/",
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        external: true
    },
    {
        title: "Démarches en ligne",
        description: "Effectuez vos démarches administratives depuis chez vous",
        link: "https://service-public.bj/",
        icon: <PhoneMobileIcon />,
        external: true
    },
    {
        title: "Paiement en ligne",
        description: "Payez vos taxes et redevances communales en toute sécurité",
        link: "https://paiement.tresorbenin.bj/#/recette-non-fiscales-communales",
        icon: <BankNotesIcon />,
        external: true
    },
    {
        title: "Signaler un problème",
        description: "Signalez un incident ou un problème dans votre quartier",
        link: "/signaler",
        icon: <ExclamationCircleIcon />,
        external: false
    },
    {
        title: "Écrire au Maire",
        description: "Envoyez un message directement au Maire de la commune",
        link: "/write-to-mayor",
        icon: <ChatIcon />,
        external: false
    },
    {
        title: "Écrire au SE",
        description: "Contactez le Secrétaire Exécutif de la commune",
        link: "/write-to-executive-secretary",
        icon: <ChatIcon />,
        external: false
    }
];

const newsItems = [
    {
        title: "Inauguration du nouveau centre de santé communal",
        excerpt: "Le Maire a procédé à l'inauguration officielle du nouveau centre de santé moderne qui desservira plus de 10 000 habitants des arrondissements environnants.",
        imageUrl: "https://cdn.paris.fr/paris/2025/07/03/large-ba84bfcf5b0041e8b7fca6f255a16dc2.jpg",
        category: "Santé",
        date: "15 Décembre 2024",
        featured: true
    },
    {
        title: "Réhabilitation des routes rurales",
        excerpt: "Un vaste programme de réhabilitation des pistes rurales a été lancé pour améliorer la mobilité des populations.",
        imageUrl: "/event-avankou.jpg",
        category: "Infrastructure",
        date: "10 Décembre 2024"
    },
    {
        title: "Festival culturel Vodoun 2024",
        excerpt: "La commune accueillera le grand festival annuel célébrant le patrimoine culturel et spirituel béninois.",
        imageUrl: "/vodoun_1.JPG",
        category: "Culture",
        date: "8 Décembre 2024"
    },
    {
        title: "Campagne de reboisement communautaire",
        excerpt: "Plus de 5000 arbres seront plantés dans le cadre de notre engagement pour l'environnement.",
        imageUrl: "/foret.jpg",
        category: "Environnement",
        date: "5 Décembre 2024"
    }
];

const Home = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Slider */}
            <PersonalitiesAndPlacesSlider />

            {/* Section Accès Rapide */}
            <section className="relative py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
                            Services
                        </span>
                        <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
                            Accès rapide
                        </h2>
                        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                            Retrouvez tous les services essentiels de la commune en un clic
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {quickAccessItems.map((item, index) => (
                            <QuickAccessCard key={index} {...item} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Section Actualités */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12">
                        <div>
                            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
                                Restez informé
                            </span>
                            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
                                Actualités
                            </h2>
                        </div>
                        <Link
                            to="/actualites"
                            className="mt-4 sm:mt-0 inline-flex items-center gap-2 text-emerald-600 font-medium hover:gap-3 transition-all"
                        >
                            Voir toutes les actualités
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>

                    {/* Article à la une */}
                    <div className="mb-8">
                        <NewsCard {...newsItems[0]} />
                    </div>

                    {/* Autres articles */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {newsItems.slice(1).map((item, index) => (
                            <NewsCard key={index} {...item} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Section Chiffres clés */}
            <section className="py-20 bg-emerald-700 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold">
                            Avrankou en chiffres
                        </h2>
                        <p className="mt-4 text-emerald-100 max-w-2xl mx-auto">
                            Découvrez les données clés de notre commune
                        </p>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { value: "127 000+", label: "Habitants" },
                            { value: "9", label: "Arrondissements" },
                            { value: "78", label: "Villages" },
                            { value: "250 km²", label: "Superficie" }
                        ].map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-4xl md:text-5xl font-bold mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-emerald-200 font-medium">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section CTA */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Besoin d'aide ou d'informations ?
                    </h2>
                    <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                        Notre équipe est à votre disposition pour répondre à toutes vos questions
                        concernant les services de la commune.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-600 text-white font-semibold rounded-full transition-all duration-300 hover:bg-emerald-700 hover:shadow-lg hover:-translate-y-0.5"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            Nous contacter
                        </a>
                        <a
                            href="tel:+22997000000"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-100 text-gray-900 font-semibold rounded-full transition-all duration-300 hover:bg-gray-200 hover:-translate-y-0.5"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            Appeler maintenant
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;