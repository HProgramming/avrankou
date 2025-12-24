import { useState } from 'react';
import { Link } from 'react-router-dom';
import BackButton from '../components/BackButton';

interface Article {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    category: string;
    imageUrl: string;
    author: string;
    date: string;
    readTime: string;
    featured?: boolean;
}

const articles: Article[] = [
    {
        id: 'inauguration-centre-sante',
        title: "Inauguration du nouveau centre de santé d'Avrankou",
        excerpt: "Le Maire a inauguré ce mardi le nouveau centre de santé communal, un investissement majeur pour améliorer l'accès aux soins des populations.",
        content: "",
        category: "Santé",
        imageUrl: "/foret.jpg",
        author: "Service Communication",
        date: "2024-12-20",
        readTime: "3 min",
        featured: true
    },
    {
        id: 'fete-vodoun-2025',
        title: "Préparatifs de la fête nationale du Vodoun 2025",
        excerpt: "La commune se prépare activement pour célébrer la fête nationale du Vodoun le 10 janvier prochain avec un programme riche en événements culturels.",
        content: "",
        category: "Culture",
        imageUrl: "/vodoun.JPG",
        author: "Service Culturel",
        date: "2024-12-18",
        readTime: "4 min"
    },
    {
        id: 'rehabilitation-routes',
        title: "Réhabilitation des routes communales : bilan positif",
        excerpt: "Les travaux de réhabilitation des principales routes de la commune avancent bien. Plus de 15 km de voirie ont été rénovés cette année.",
        content: "",
        category: "Infrastructure",
        imageUrl: "/riviere_noire.jpg",
        author: "Service Technique",
        date: "2024-12-15",
        readTime: "5 min"
    },
    {
        id: 'rentree-scolaire',
        title: "Rentrée scolaire 2024-2025 : les nouveautés",
        excerpt: "La rentrée scolaire s'est déroulée dans de bonnes conditions avec l'ouverture de deux nouvelles écoles maternelles.",
        content: "",
        category: "Éducation",
        imageUrl: "/zekpon.jpeg",
        author: "Service Éducation",
        date: "2024-12-10",
        readTime: "3 min"
    },
    {
        id: 'marche-agricole',
        title: "Nouveau marché agricole : une opportunité pour les producteurs",
        excerpt: "L'inauguration du nouveau marché agricole offre aux agriculteurs locaux un espace moderne pour commercialiser leurs produits.",
        content: "",
        category: "Économie",
        imageUrl: "/foret.jpg",
        author: "Service Économique",
        date: "2024-12-05",
        readTime: "4 min"
    },
    {
        id: 'campagne-vaccination',
        title: "Campagne de vaccination gratuite pour les enfants",
        excerpt: "Une campagne de vaccination gratuite se tiendra du 15 au 20 décembre dans tous les centres de santé de la commune.",
        content: "",
        category: "Santé",
        imageUrl: "/vodoun_1.JPG",
        author: "Service Santé",
        date: "2024-12-01",
        readTime: "2 min"
    }
];

const categories = ['Tous', 'Santé', 'Culture', 'Infrastructure', 'Éducation', 'Économie', 'Environnement'];

const categoryColors: Record<string, { bg: string; text: string }> = {
    'Santé': { bg: 'bg-red-100', text: 'text-red-700' },
    'Culture': { bg: 'bg-purple-100', text: 'text-purple-700' },
    'Infrastructure': { bg: 'bg-blue-100', text: 'text-blue-700' },
    'Éducation': { bg: 'bg-yellow-100', text: 'text-yellow-700' },
    'Économie': { bg: 'bg-emerald-100', text: 'text-emerald-700' },
    'Environnement': { bg: 'bg-green-100', text: 'text-green-700' }
};

const Actualites = () => {
    const [selectedCategory, setSelectedCategory] = useState('Tous');
    const [searchQuery, setSearchQuery] = useState('');

    const featuredArticle = articles.find(a => a.featured);
    const regularArticles = articles.filter(a => !a.featured);

    const filteredArticles = regularArticles.filter(article => {
        const matchesCategory = selectedCategory === 'Tous' || article.category === selectedCategory;
        const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('fr-FR', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-emerald-700 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <BackButton className="mb-6" />
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">
                        Actualités
                    </h1>
                    <p className="text-lg text-emerald-100 max-w-3xl">
                        Restez informé des dernières nouvelles, événements et décisions de la commune d'Avrankou.
                    </p>
                </div>
            </div>

            {/* Search and Filters */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
                <div className="bg-white rounded-2xl shadow-lg p-6">
                    <div className="flex flex-col lg:flex-row gap-4">
                        {/* Search */}
                        <div className="flex-1">
                            <div className="relative">
                                <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                                <input
                                    type="text"
                                    placeholder="Rechercher une actualité..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                                />
                            </div>
                        </div>

                        {/* Category Filter */}
                        <div className="flex flex-wrap gap-2">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                                        selectedCategory === category
                                            ? 'bg-emerald-600 text-white'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Featured Article */}
                {featuredArticle && selectedCategory === 'Tous' && !searchQuery && (
                    <div className="mb-12">
                        <h2 className="text-sm font-semibold text-emerald-600 uppercase tracking-wide mb-4">À la une</h2>
                        <Link
                            to={`/actualites/${featuredArticle.id}`}
                            className="group block bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
                        >
                            <div className="grid md:grid-cols-2 gap-0">
                                <div
                                    className="h-64 md:h-full min-h-[300px] bg-cover bg-center"
                                    style={{ backgroundImage: `url(${featuredArticle.imageUrl})` }}
                                />
                                <div className="p-8 flex flex-col justify-center">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[featuredArticle.category]?.bg} ${categoryColors[featuredArticle.category]?.text}`}>
                                            {featuredArticle.category}
                                        </span>
                                        <span className="text-sm text-gray-500">{formatDate(featuredArticle.date)}</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors">
                                        {featuredArticle.title}
                                    </h3>
                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        {featuredArticle.excerpt}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                                                <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium text-gray-900">{featuredArticle.author}</p>
                                                <p className="text-xs text-gray-500">{featuredArticle.readTime} de lecture</p>
                                            </div>
                                        </div>
                                        <span className="inline-flex items-center gap-2 text-emerald-600 font-medium group-hover:gap-3 transition-all">
                                            Lire l'article
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                )}

                {/* Articles Grid */}
                <div className="mb-6 flex items-center justify-between">
                    <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                        {selectedCategory === 'Tous' ? 'Toutes les actualités' : `Actualités ${selectedCategory}`}
                    </h2>
                    <p className="text-sm text-gray-500">
                        {filteredArticles.length} article{filteredArticles.length > 1 ? 's' : ''}
                    </p>
                </div>

                {filteredArticles.length === 0 ? (
                    <div className="text-center py-16 bg-white rounded-2xl border border-gray-100">
                        <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                        </svg>
                        <h3 className="text-lg font-medium text-gray-900 mb-2">Aucun article trouvé</h3>
                        <p className="text-gray-500">Essayez de modifier vos critères de recherche</p>
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredArticles.map((article) => (
                            <Link
                                key={article.id}
                                to={`/actualites/${article.id}`}
                                className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300"
                            >
                                <div
                                    className="h-48 bg-cover bg-center relative"
                                    style={{ backgroundImage: `url(${article.imageUrl})` }}
                                >
                                    <div className="absolute top-4 left-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[article.category]?.bg} ${categoryColors[article.category]?.text}`}>
                                            {article.category}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        {formatDate(article.date)}
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors line-clamp-2">
                                        {article.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                                        {article.excerpt}
                                    </p>
                                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                        <span className="text-xs text-gray-500">{article.readTime} de lecture</span>
                                        <span className="inline-flex items-center gap-1 text-emerald-600 text-sm font-medium group-hover:gap-2 transition-all">
                                            Lire
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}

                {/* Load More */}
                {filteredArticles.length > 0 && (
                    <div className="text-center mt-12">
                        <button className="inline-flex items-center gap-2 px-8 py-3 bg-white border-2 border-emerald-600 text-emerald-600 font-semibold rounded-full hover:bg-emerald-600 hover:text-white transition-all duration-300">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                            Charger plus d'articles
                        </button>
                    </div>
                )}
            </div>

            {/* Newsletter Section */}
            <div className="bg-emerald-700 py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        Restez informé
                    </h2>
                    <p className="text-emerald-100 mb-8 max-w-xl mx-auto">
                        Inscrivez-vous à notre newsletter pour recevoir les dernières actualités de la commune directement dans votre boîte mail.
                    </p>
                    <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Votre adresse email"
                            className="flex-1 px-6 py-3 rounded-full border-2 border-transparent focus:border-white focus:outline-none bg-white/10 text-white placeholder-emerald-200"
                        />
                        <button
                            type="submit"
                            className="px-8 py-3 bg-white text-emerald-700 font-semibold rounded-full hover:bg-emerald-50 transition-colors"
                        >
                            S'inscrire
                        </button>
                    </form>
                </div>
            </div>

            {/* Quick Links */}
            <div className="bg-gray-100 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-6">
                        <Link
                            to="/services"
                            className="bg-white rounded-xl p-6 flex items-center gap-4 hover:shadow-lg transition-shadow"
                        >
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900">Services municipaux</h3>
                                <p className="text-sm text-gray-500">Découvrez nos services</p>
                            </div>
                        </Link>
                        <Link
                            to="/documentations"
                            className="bg-white rounded-xl p-6 flex items-center gap-4 hover:shadow-lg transition-shadow"
                        >
                            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900">Documentation</h3>
                                <p className="text-sm text-gray-500">Télécharger des documents</p>
                            </div>
                        </Link>
                        <Link
                            to="/write-to-mayor"
                            className="bg-white rounded-xl p-6 flex items-center gap-4 hover:shadow-lg transition-shadow"
                        >
                            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900">Contact</h3>
                                <p className="text-sm text-gray-500">Écrire au Maire</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Actualites;