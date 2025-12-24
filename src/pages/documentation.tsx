import { useState } from 'react';
import { Link } from 'react-router-dom';
import BackButton from '../components/BackButton';

interface Document {
    id: string;
    title: string;
    description: string;
    category: string;
    fileType: 'pdf' | 'doc' | 'xls';
    fileSize: string;
    date: string;
    downloadUrl: string;
}

const documents: Document[] = [
    {
        id: '1',
        title: "Formulaire de demande d'acte de naissance",
        description: "Formulaire à remplir pour obtenir une copie intégrale ou un extrait d'acte de naissance",
        category: "État Civil",
        fileType: 'pdf',
        fileSize: '245 Ko',
        date: '2024-12-01',
        downloadUrl: '#'
    },
    {
        id: '2',
        title: "Formulaire de demande de permis de construire",
        description: "Dossier complet pour toute demande de permis de construire dans la commune",
        category: "Urbanisme",
        fileType: 'pdf',
        fileSize: '1.2 Mo',
        date: '2024-11-15',
        downloadUrl: '#'
    },
    {
        id: '3',
        title: "Guide des démarches administratives",
        description: "Guide complet des procédures administratives de la commune d'Avrankou",
        category: "Guides",
        fileType: 'pdf',
        fileSize: '3.5 Mo',
        date: '2024-10-20',
        downloadUrl: '#'
    },
    {
        id: '4',
        title: "Budget communal 2024",
        description: "Document budgétaire de la commune pour l'exercice 2024",
        category: "Finances",
        fileType: 'pdf',
        fileSize: '890 Ko',
        date: '2024-01-05',
        downloadUrl: '#'
    },
    {
        id: '5',
        title: "Délibérations du conseil communal",
        description: "Comptes rendus des délibérations du conseil communal",
        category: "Délibérations",
        fileType: 'pdf',
        fileSize: '2.1 Mo',
        date: '2024-11-30',
        downloadUrl: '#'
    },
    {
        id: '6',
        title: "Plan de développement communal (PDC)",
        description: "Document stratégique de développement de la commune 2023-2027",
        category: "Planification",
        fileType: 'pdf',
        fileSize: '8.5 Mo',
        date: '2023-06-15',
        downloadUrl: '#'
    },
    {
        id: '7',
        title: "Formulaire de demande de légalisation",
        description: "Formulaire pour la légalisation de documents administratifs",
        category: "État Civil",
        fileType: 'pdf',
        fileSize: '156 Ko',
        date: '2024-09-10',
        downloadUrl: '#'
    },
    {
        id: '8',
        title: "Tarifs des services municipaux",
        description: "Grille tarifaire des différents services de la mairie",
        category: "Finances",
        fileType: 'pdf',
        fileSize: '320 Ko',
        date: '2024-01-01',
        downloadUrl: '#'
    }
];

const categories = ['Tous', 'État Civil', 'Urbanisme', 'Finances', 'Délibérations', 'Guides', 'Planification'];

const Documentation = () => {
    const [selectedCategory, setSelectedCategory] = useState('Tous');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredDocuments = documents.filter(doc => {
        const matchesCategory = selectedCategory === 'Tous' || doc.category === selectedCategory;
        const matchesSearch = doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              doc.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const getFileIcon = (fileType: string) => {
        switch (fileType) {
            case 'pdf':
                return (
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 2l5 5h-5V4zM8.5 13.5a1 1 0 100 2 1 1 0 000-2zm3.5 0a1 1 0 100 2 1 1 0 000-2zm3.5 0a1 1 0 100 2 1 1 0 000-2z"/>
                        </svg>
                    </div>
                );
            case 'doc':
                return (
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                    </div>
                );
            default:
                return (
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                    </div>
                );
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-emerald-700 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <BackButton className="mb-6" />
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">
                        Documentation
                    </h1>
                    <p className="text-lg text-emerald-100 max-w-3xl">
                        Téléchargez les formulaires, guides et documents officiels de la commune d'Avrankou.
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
                                    placeholder="Rechercher un document..."
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

            {/* Documents Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="mb-6 flex items-center justify-between">
                    <p className="text-gray-600">
                        {filteredDocuments.length} document{filteredDocuments.length > 1 ? 's' : ''} trouvé{filteredDocuments.length > 1 ? 's' : ''}
                    </p>
                </div>

                {filteredDocuments.length === 0 ? (
                    <div className="text-center py-16">
                        <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <h3 className="text-lg font-medium text-gray-900 mb-2">Aucun document trouvé</h3>
                        <p className="text-gray-500">Essayez de modifier vos critères de recherche</p>
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 gap-6">
                        {filteredDocuments.map((doc) => (
                            <div key={doc.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-lg transition-shadow">
                                <div className="flex items-start gap-4">
                                    {getFileIcon(doc.fileType)}
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-start justify-between gap-4">
                                            <div>
                                                <span className="inline-block px-2 py-1 text-xs font-medium text-emerald-700 bg-emerald-50 rounded-full mb-2">
                                                    {doc.category}
                                                </span>
                                                <h3 className="font-semibold text-gray-900 mb-1">{doc.title}</h3>
                                                <p className="text-sm text-gray-500 mb-3">{doc.description}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-4 text-xs text-gray-400">
                                                <span className="uppercase">{doc.fileType}</span>
                                                <span>{doc.fileSize}</span>
                                                <span>{new Date(doc.date).toLocaleDateString('fr-FR')}</span>
                                            </div>
                                            <a
                                                href={doc.downloadUrl}
                                                className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 rounded-lg hover:bg-emerald-100 transition-colors text-sm font-medium"
                                            >
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                                </svg>
                                                Télécharger
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Help Section */}
            <div className="bg-gray-100 py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        Vous ne trouvez pas le document recherché ?
                    </h2>
                    <p className="text-gray-600 mb-8">
                        Contactez-nous et nous vous aiderons à trouver le document dont vous avez besoin.
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
    );
};

export default Documentation;