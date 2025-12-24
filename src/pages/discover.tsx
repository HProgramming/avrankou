import { Link, useNavigate } from 'react-router-dom';

const Discover = () => {
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    };

    const sections = [
        {
            title: "Histoire",
            description: "Découvrez l'histoire riche et fascinante de la commune d'Avrankou, depuis ses origines jusqu'à nos jours.",
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            ),
            link: "/history",
            color: "amber"
        },
        {
            title: "Géographie",
            description: "Explorez la situation géographique, le relief, le climat et les caractéristiques naturelles d'Avrankou.",
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            link: "/geographie",
            color: "emerald"
        },
        {
            title: "Démographie",
            description: "Consultez les données sur la population, la répartition par arrondissement et les statistiques démographiques.",
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            link: "/demographie",
            color: "blue"
        },
        {
            title: "Économie",
            description: "Découvrez les secteurs économiques, l'agriculture, le commerce et les activités qui font vivre la commune.",
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
            ),
            link: "/economy",
            color: "purple"
        },
        {
            title: "Potentialités",
            description: "Explorez les opportunités de développement et le potentiel économique de la commune d'Avrankou.",
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            ),
            link: "/potentialities",
            color: "orange"
        },
        {
            title: "Attractions touristiques",
            description: "Visitez les sites touristiques, les forêts sacrées, la rivière noire et les lieux culturels d'Avrankou.",
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            link: "/attractions",
            color: "rose"
        }
    ];

    const getColorClasses = (color: string) => {
        const colors: Record<string, { bg: string; iconBg: string; iconText: string; hover: string }> = {
            amber: { bg: "bg-amber-50", iconBg: "bg-amber-100", iconText: "text-amber-600", hover: "hover:border-amber-300" },
            emerald: { bg: "bg-emerald-50", iconBg: "bg-emerald-100", iconText: "text-emerald-600", hover: "hover:border-emerald-300" },
            blue: { bg: "bg-blue-50", iconBg: "bg-blue-100", iconText: "text-blue-600", hover: "hover:border-blue-300" },
            purple: { bg: "bg-purple-50", iconBg: "bg-purple-100", iconText: "text-purple-600", hover: "hover:border-purple-300" },
            orange: { bg: "bg-orange-50", iconBg: "bg-orange-100", iconText: "text-orange-600", hover: "hover:border-orange-300" },
            rose: { bg: "bg-rose-50", iconBg: "bg-rose-100", iconText: "text-rose-600", hover: "hover:border-rose-300" }
        };
        return colors[color] || colors.emerald;
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="relative bg-emerald-700 text-white">
                <div className="absolute inset-0 overflow-hidden">
                    <img
                        src="/event-avankou.jpg"
                        alt="Avrankou"
                        className="w-full h-full object-cover opacity-20"
                    />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <button
                        onClick={handleGoBack}
                        className="inline-flex items-center gap-2 text-emerald-100 hover:text-white font-medium mb-8 transition-colors group"
                    >
                        <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Retour
                    </button>

                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Découvrir Avrankou
                    </h1>
                    <p className="text-xl text-emerald-100 max-w-3xl leading-relaxed">
                        Bienvenue dans la commune d'Avrankou, située dans le département de l'Ouémé au sud-est du Bénin.
                        Explorez notre histoire, notre culture, notre économie et nos attractions touristiques.
                    </p>

                    {/* Quick Stats */}
                    <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold">127 000+</div>
                            <div className="text-emerald-200 mt-1">Habitants</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold">9</div>
                            <div className="text-emerald-200 mt-1">Arrondissements</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold">78</div>
                            <div className="text-emerald-200 mt-1">Villages</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold">250 km²</div>
                            <div className="text-emerald-200 mt-1">Superficie</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sections Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Explorez la commune
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Sélectionnez une rubrique pour en savoir plus sur Avrankou
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sections.map((section, index) => {
                        const colors = getColorClasses(section.color);
                        return (
                            <Link
                                key={index}
                                to={section.link}
                                className={`group block bg-white rounded-2xl p-6 border-2 border-gray-100 ${colors.hover} shadow-sm hover:shadow-lg transition-all duration-300`}
                            >
                                <div className={`w-16 h-16 ${colors.iconBg} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                    <div className={colors.iconText}>
                                        {section.icon}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                                    {section.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {section.description}
                                </p>
                                <div className="mt-4 flex items-center text-emerald-600 font-medium">
                                    <span>En savoir plus</span>
                                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>

            {/* Arrondissements Section */}
            <div className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Les 9 arrondissements
                        </h2>
                        <p className="text-lg text-gray-600">
                            La commune d'Avrankou est divisée en 9 arrondissements
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                        {[
                            'Avrankou (Chef-lieu)',
                            'Atchoukpa',
                            'Djomon',
                            'Gbozounmè',
                            'Kouti',
                            'Ouanho',
                            'Sado',
                            'Vodounko',
                            'Wamon'
                        ].map((arr, index) => (
                            <div
                                key={index}
                                className="bg-emerald-50 rounded-xl p-4 text-center border border-emerald-100 hover:bg-emerald-100 transition-colors"
                            >
                                <span className="w-8 h-8 bg-emerald-600 text-white rounded-full inline-flex items-center justify-center text-sm font-bold mb-2">
                                    {index + 1}
                                </span>
                                <div className="text-gray-800 font-medium text-sm">
                                    {arr}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gray-100 py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        Besoin d'informations supplémentaires ?
                    </h2>
                    <p className="text-gray-600 mb-8">
                        Notre équipe est à votre disposition pour répondre à toutes vos questions sur la commune.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/write-to-mayor"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 text-white font-semibold rounded-full hover:bg-emerald-700 transition-colors"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            Contacter la mairie
                        </Link>
                        <Link
                            to="/services"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-800 font-semibold rounded-full border-2 border-gray-200 hover:border-emerald-300 hover:bg-gray-50 transition-colors"
                        >
                            Voir les services
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Discover;