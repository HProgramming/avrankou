import { Link } from 'react-router-dom';
import BackButton from '../components/BackButton';

const Demography = () => {
    const populationData = [
        { year: '1979', population: '45 000', growth: '-' },
        { year: '1992', population: '68 000', growth: '+3.2%' },
        { year: '2002', population: '87 000', growth: '+2.5%' },
        { year: '2013', population: '115 000', growth: '+2.6%' },
        { year: '2023', population: '127 000', growth: '+1.0%' }
    ];

    const arrondissements = [
        { name: 'Avrankou', population: '18 500', percentage: 14.6 },
        { name: 'Atchoukpa', population: '15 200', percentage: 12.0 },
        { name: 'Djomon', population: '14 800', percentage: 11.7 },
        { name: 'Gbozounmè', population: '13 500', percentage: 10.6 },
        { name: 'Kouti', population: '12 900', percentage: 10.2 },
        { name: 'Ouanho', population: '14 100', percentage: 11.1 },
        { name: 'Sado', population: '13 200', percentage: 10.4 },
        { name: 'Vodounko', population: '12 400', percentage: 9.8 },
        { name: 'Wamon', population: '12 400', percentage: 9.8 }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-emerald-700 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <BackButton className="mb-6" />
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">
                        Démographie d'Avrankou
                    </h1>
                    <p className="text-lg text-emerald-100 max-w-3xl">
                        Population, statistiques et données démographiques de la commune d'Avrankou.
                    </p>
                </div>
            </div>

            {/* Key Stats */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                        <div className="text-3xl font-bold text-emerald-600 mb-1">127 000+</div>
                        <div className="text-gray-600">Habitants</div>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                        <div className="text-3xl font-bold text-blue-600 mb-1">508</div>
                        <div className="text-gray-600">Hab/km²</div>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                        <div className="text-3xl font-bold text-amber-600 mb-1">52%</div>
                        <div className="text-gray-600">Femmes</div>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                        <div className="text-3xl font-bold text-purple-600 mb-1">56%</div>
                        <div className="text-gray-600">Moins de 25 ans</div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Évolution de la population */}
                        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                                    <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                    </svg>
                                </div>
                                Évolution de la population
                            </h2>
                            <p className="text-gray-600 mb-6">
                                La population d'Avrankou a connu une croissance régulière au cours des dernières décennies,
                                passant de 45 000 habitants en 1979 à plus de 127 000 habitants aujourd'hui.
                            </p>
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="border-b border-gray-200">
                                            <th className="text-left py-3 px-4 font-semibold text-gray-900">Année</th>
                                            <th className="text-left py-3 px-4 font-semibold text-gray-900">Population</th>
                                            <th className="text-left py-3 px-4 font-semibold text-gray-900">Croissance annuelle</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {populationData.map((row, index) => (
                                            <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                                                <td className="py-3 px-4 text-gray-900 font-medium">{row.year}</td>
                                                <td className="py-3 px-4 text-gray-600">{row.population}</td>
                                                <td className="py-3 px-4">
                                                    {row.growth !== '-' ? (
                                                        <span className="inline-flex items-center px-2 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm">
                                                            {row.growth}
                                                        </span>
                                                    ) : (
                                                        <span className="text-gray-400">-</span>
                                                    )}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* Répartition par arrondissement */}
                        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                                    <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                Répartition par arrondissement
                            </h2>
                            <div className="space-y-4">
                                {arrondissements.map((arr, index) => (
                                    <div key={index}>
                                        <div className="flex items-center justify-between mb-1">
                                            <span className="font-medium text-gray-900">{arr.name}</span>
                                            <span className="text-sm text-gray-500">{arr.population} hab. ({arr.percentage}%)</span>
                                        </div>
                                        <div className="w-full bg-gray-100 rounded-full h-2.5">
                                            <div
                                                className="bg-emerald-600 h-2.5 rounded-full transition-all duration-500"
                                                style={{ width: `${arr.percentage * 6}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Caractéristiques démographiques */}
                        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                                    <svg className="w-5 h-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                </div>
                                Caractéristiques démographiques
                            </h2>
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="bg-gray-50 rounded-xl p-6">
                                    <h3 className="font-semibold text-gray-900 mb-4">Structure par âge</h3>
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-600">0-14 ans</span>
                                            <span className="font-medium text-gray-900">42%</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-600">15-24 ans</span>
                                            <span className="font-medium text-gray-900">14%</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-600">25-64 ans</span>
                                            <span className="font-medium text-gray-900">38%</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-600">65 ans et plus</span>
                                            <span className="font-medium text-gray-900">6%</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 rounded-xl p-6">
                                    <h3 className="font-semibold text-gray-900 mb-4">Répartition par sexe</h3>
                                    <div className="space-y-4">
                                        <div>
                                            <div className="flex justify-between mb-1">
                                                <span className="text-gray-600">Hommes</span>
                                                <span className="font-medium">48%</span>
                                            </div>
                                            <div className="w-full bg-gray-200 rounded-full h-3">
                                                <div className="bg-blue-500 h-3 rounded-full" style={{ width: '48%' }}></div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between mb-1">
                                                <span className="text-gray-600">Femmes</span>
                                                <span className="font-medium">52%</span>
                                            </div>
                                            <div className="w-full bg-gray-200 rounded-full h-3">
                                                <div className="bg-pink-500 h-3 rounded-full" style={{ width: '52%' }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Ethnies et langues */}
                        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
                                    <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                                    </svg>
                                </div>
                                Ethnies et langues
                            </h2>
                            <div className="prose prose-gray max-w-none">
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    La population d'Avrankou est composée principalement des groupes ethniques suivants :
                                </p>
                                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                                    <div className="bg-amber-50 rounded-xl p-4 border border-amber-100">
                                        <h4 className="font-semibold text-amber-900 mb-2">Groupes ethniques</h4>
                                        <ul className="text-amber-800 text-sm space-y-1">
                                            <li>• Goun (majoritaire)</li>
                                            <li>• Yoruba</li>
                                            <li>• Tori</li>
                                            <li>• Fon</li>
                                        </ul>
                                    </div>
                                    <div className="bg-amber-50 rounded-xl p-4 border border-amber-100">
                                        <h4 className="font-semibold text-amber-900 mb-2">Langues parlées</h4>
                                        <ul className="text-amber-800 text-sm space-y-1">
                                            <li>• Goun (langue locale principale)</li>
                                            <li>• Français (langue officielle)</li>
                                            <li>• Yoruba</li>
                                            <li>• Fon</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Quick facts */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-4">Données clés</h3>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                                    <span className="text-gray-600">Population totale</span>
                                    <span className="font-semibold text-gray-900">127 000+</span>
                                </div>
                                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                                    <span className="text-gray-600">Densité</span>
                                    <span className="font-semibold text-gray-900">508 hab/km²</span>
                                </div>
                                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                                    <span className="text-gray-600">Taux de croissance</span>
                                    <span className="font-semibold text-gray-900">~2.5%/an</span>
                                </div>
                                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                                    <span className="text-gray-600">Âge médian</span>
                                    <span className="font-semibold text-gray-900">18 ans</span>
                                </div>
                                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                                    <span className="text-gray-600">Taille moyenne ménage</span>
                                    <span className="font-semibold text-gray-900">5.2 personnes</span>
                                </div>
                                <div className="flex items-center justify-between py-3">
                                    <span className="text-gray-600">Nombre de villages</span>
                                    <span className="font-semibold text-gray-900">78</span>
                                </div>
                            </div>
                        </div>

                        {/* Religions */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-4">Religions</h3>
                            <div className="space-y-3">
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-sm text-gray-600">Christianisme</span>
                                        <span className="text-sm font-medium">45%</span>
                                    </div>
                                    <div className="w-full bg-gray-100 rounded-full h-2">
                                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-sm text-gray-600">Vodoun</span>
                                        <span className="text-sm font-medium">35%</span>
                                    </div>
                                    <div className="w-full bg-gray-100 rounded-full h-2">
                                        <div className="bg-amber-500 h-2 rounded-full" style={{ width: '35%' }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-sm text-gray-600">Islam</span>
                                        <span className="text-sm font-medium">15%</span>
                                    </div>
                                    <div className="w-full bg-gray-100 rounded-full h-2">
                                        <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '15%' }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-sm text-gray-600">Autres</span>
                                        <span className="text-sm font-medium">5%</span>
                                    </div>
                                    <div className="w-full bg-gray-100 rounded-full h-2">
                                        <div className="bg-gray-400 h-2 rounded-full" style={{ width: '5%' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Related links */}
                        <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100">
                            <h3 className="text-lg font-bold text-emerald-900 mb-4">Voir aussi</h3>
                            <div className="space-y-2">
                                <Link to="/geographie" className="flex items-center gap-2 text-emerald-700 hover:text-emerald-900 transition-colors">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                    Géographie
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

export default Demography;