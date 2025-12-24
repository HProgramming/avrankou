import { Link } from 'react-router-dom';
import BackButton from '../components/BackButton';

const Geography = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-emerald-700 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <BackButton className="mb-6" />
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">
                        Géographie d'Avrankou
                    </h1>
                    <p className="text-lg text-emerald-100 max-w-3xl">
                        Découvrez la situation géographique, le relief et les caractéristiques naturelles de la commune d'Avrankou.
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Situation géographique */}
                        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                                    <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                Situation géographique
                            </h2>
                            <div className="prose prose-gray max-w-none">
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    La commune d'Avrankou est située dans le département de l'Ouémé, au sud-est du Bénin.
                                    Elle est localisée entre <strong>6°33' et 6°40' de latitude Nord</strong> et entre
                                    <strong>2°35' et 2°45' de longitude Est</strong>.
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    Avrankou s'étend sur une superficie d'environ <strong>250 km²</strong>, ce qui en fait
                                    l'une des communes de taille moyenne du département de l'Ouémé. Elle est traversée par
                                    plusieurs cours d'eau qui contribuent à la fertilité de ses terres.
                                </p>
                            </div>
                        </section>

                        {/* Limites */}
                        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                                    <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                                    </svg>
                                </div>
                                Limites administratives
                            </h2>
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="bg-gray-50 rounded-xl p-4">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="text-2xl">⬆️</span>
                                        <span className="font-semibold text-gray-900">Au Nord</span>
                                    </div>
                                    <p className="text-gray-600">Commune d'Adjarra</p>
                                </div>
                                <div className="bg-gray-50 rounded-xl p-4">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="text-2xl">⬇️</span>
                                        <span className="font-semibold text-gray-900">Au Sud</span>
                                    </div>
                                    <p className="text-gray-600">Commune de Porto-Novo</p>
                                </div>
                                <div className="bg-gray-50 rounded-xl p-4">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="text-2xl">➡️</span>
                                        <span className="font-semibold text-gray-900">À l'Est</span>
                                    </div>
                                    <p className="text-gray-600">République Fédérale du Nigéria</p>
                                </div>
                                <div className="bg-gray-50 rounded-xl p-4">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="text-2xl">⬅️</span>
                                        <span className="font-semibold text-gray-900">À l'Ouest</span>
                                    </div>
                                    <p className="text-gray-600">Commune de Sakété</p>
                                </div>
                            </div>
                        </section>

                        {/* Relief et climat */}
                        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
                                    <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                                    </svg>
                                </div>
                                Relief et climat
                            </h2>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-2">Relief</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Le relief de la commune d'Avrankou est généralement plat avec quelques légères ondulations.
                                        L'altitude moyenne varie entre 20 et 50 mètres au-dessus du niveau de la mer.
                                        On y trouve des zones de plateau et des bas-fonds propices à l'agriculture.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-2">Climat</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Avrankou bénéficie d'un climat subéquatorial caractérisé par quatre saisons :
                                    </p>
                                    <ul className="mt-3 space-y-2">
                                        <li className="flex items-start gap-2 text-gray-600">
                                            <svg className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            Grande saison des pluies (avril à juillet)
                                        </li>
                                        <li className="flex items-start gap-2 text-gray-600">
                                            <svg className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            Petite saison sèche (août à septembre)
                                        </li>
                                        <li className="flex items-start gap-2 text-gray-600">
                                            <svg className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            Petite saison des pluies (octobre à novembre)
                                        </li>
                                        <li className="flex items-start gap-2 text-gray-600">
                                            <svg className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            Grande saison sèche (décembre à mars)
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-2">Pluviométrie</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        La pluviométrie annuelle varie entre 1000 et 1400 mm, avec des températures
                                        oscillant entre 25°C et 32°C tout au long de l'année.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Hydrographie */}
                        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <div className="w-10 h-10 bg-cyan-100 rounded-xl flex items-center justify-center">
                                    <svg className="w-5 h-5 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                    </svg>
                                </div>
                                Hydrographie
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                La commune d'Avrankou dispose d'un réseau hydrographique relativement dense composé de :
                            </p>
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="bg-cyan-50 rounded-xl p-4 border border-cyan-100">
                                    <h4 className="font-semibold text-cyan-900 mb-2">Cours d'eau principaux</h4>
                                    <ul className="text-cyan-800 text-sm space-y-1">
                                        <li>• La rivière Sô</li>
                                        <li>• La rivière noire (Tohouè)</li>
                                        <li>• Plusieurs ruisseaux saisonniers</li>
                                    </ul>
                                </div>
                                <div className="bg-cyan-50 rounded-xl p-4 border border-cyan-100">
                                    <h4 className="font-semibold text-cyan-900 mb-2">Zones humides</h4>
                                    <ul className="text-cyan-800 text-sm space-y-1">
                                        <li>• Marécages</li>
                                        <li>• Bas-fonds inondables</li>
                                        <li>• Zones de cultures maraîchères</li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Quick facts */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-4">En bref</h3>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                                    <span className="text-gray-600">Superficie</span>
                                    <span className="font-semibold text-gray-900">250 km²</span>
                                </div>
                                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                                    <span className="text-gray-600">Altitude moyenne</span>
                                    <span className="font-semibold text-gray-900">20-50 m</span>
                                </div>
                                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                                    <span className="text-gray-600">Pluviométrie</span>
                                    <span className="font-semibold text-gray-900">1000-1400 mm/an</span>
                                </div>
                                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                                    <span className="text-gray-600">Température</span>
                                    <span className="font-semibold text-gray-900">25-32°C</span>
                                </div>
                                <div className="flex items-center justify-between py-3">
                                    <span className="text-gray-600">Département</span>
                                    <span className="font-semibold text-gray-900">Ouémé</span>
                                </div>
                            </div>
                        </div>

                        {/* Arrondissements */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-4">Arrondissements</h3>
                            <p className="text-sm text-gray-500 mb-4">
                                La commune compte 9 arrondissements :
                            </p>
                            <ul className="space-y-2">
                                {[
                                    'Avrankou',
                                    'Atchoukpa',
                                    'Djomon',
                                    'Gbozounmè',
                                    'Kouti',
                                    'Ouanho',
                                    'Sado',
                                    'Vodounko',
                                    'Wamon'
                                ].map((arr, index) => (
                                    <li key={index} className="flex items-center gap-2 text-gray-700">
                                        <span className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center text-xs font-medium text-emerald-700">
                                            {index + 1}
                                        </span>
                                        {arr}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Related links */}
                        <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100">
                            <h3 className="text-lg font-bold text-emerald-900 mb-4">Voir aussi</h3>
                            <div className="space-y-2">
                                <Link to="/demographie" className="flex items-center gap-2 text-emerald-700 hover:text-emerald-900 transition-colors">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                    Démographie
                                </Link>
                                <Link to="/history" className="flex items-center gap-2 text-emerald-700 hover:text-emerald-900 transition-colors">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                    Histoire
                                </Link>
                                <Link to="/economy" className="flex items-center gap-2 text-emerald-700 hover:text-emerald-900 transition-colors">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                    Économie
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Geography;