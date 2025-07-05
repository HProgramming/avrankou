import { Link } from 'react-router-dom';
import BackButton from '../components/BackButton';

const services = [
    {
        category: "État Civil",
        description: "Documents administratifs officiels",
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
            </svg>
        ),
        items: [
            { name: "Acte de naissance", description: "Demande de copie intégrale ou extrait" },
            { name: "Acte de mariage", description: "Certificat de mariage civil" },
            { name: "Acte de décès", description: "Déclaration et copie d'acte" },
            { name: "Certificat de vie", description: "Attestation de vie" },
            { name: "Légalisation", description: "Légalisation de documents" }
        ]
    },
    {
        category: "Urbanisme",
        description: "Permis et autorisations de construction",
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
        ),
        items: [
            { name: "Permis de construire", description: "Autorisation de construction" },
            { name: "Permis de lotir", description: "Autorisation de lotissement" },
            { name: "Certificat d'urbanisme", description: "Information sur les règles d'urbanisme" },
            { name: "Autorisation de travaux", description: "Travaux de modification" }
        ]
    },
    {
        category: "Fiscalité locale",
        description: "Taxes et impôts communaux",
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
        items: [
            { name: "Taxe foncière", description: "Impôt sur les propriétés bâties" },
            { name: "Patente", description: "Taxe professionnelle" },
            { name: "Taxe d'habitation", description: "Taxe sur les logements" },
            { name: "Redevances", description: "Droits d'occupation" }
        ]
    },
    {
        category: "Social",
        description: "Aide et accompagnement social",
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
        items: [
            { name: "Aide sociale", description: "Accompagnement des personnes vulnérables" },
            { name: "Certificat d'indigence", description: "Attestation de situation précaire" },
            { name: "Aide aux sinistrés", description: "Assistance en cas de catastrophe" }
        ]
    },
    {
        category: "Environnement",
        description: "Gestion des espaces et déchets",
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        items: [
            { name: "Collecte des déchets", description: "Ramassage des ordures ménagères" },
            { name: "Espaces verts", description: "Entretien des parcs et jardins" },
            { name: "Assainissement", description: "Gestion des eaux usées" }
        ]
    },
    {
        category: "Éducation & Culture",
        description: "Écoles et activités culturelles",
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
        ),
        items: [
            { name: "Inscription scolaire", description: "Écoles maternelles et primaires" },
            { name: "Cantine scolaire", description: "Restauration scolaire" },
            { name: "Activités culturelles", description: "Événements et manifestations" },
            { name: "Bibliothèque", description: "Accès aux ressources documentaires" }
        ]
    }
];

const Services = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-emerald-700 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <BackButton className="mb-6" />
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">
                        Services municipaux
                    </h1>
                    <p className="text-lg text-emerald-100 max-w-3xl">
                        Retrouvez l'ensemble des services proposés par la Mairie d'Avrankou pour accompagner les citoyens dans leurs démarches administratives.
                    </p>
                </div>
            </div>

            {/* Quick actions */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
                <div className="grid sm:grid-cols-3 gap-4">
                    <a
                        href="https://service-public.bj/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white rounded-xl shadow-lg p-6 flex items-center gap-4 hover:shadow-xl transition-shadow"
                    >
                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-900">Démarches en ligne</h3>
                            <p className="text-sm text-gray-500">Service-public.bj</p>
                        </div>
                    </a>
                    <a
                        href="https://paiement.tresorbenin.bj/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white rounded-xl shadow-lg p-6 flex items-center gap-4 hover:shadow-xl transition-shadow"
                    >
                        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-900">Paiement en ligne</h3>
                            <p className="text-sm text-gray-500">Trésor public</p>
                        </div>
                    </a>
                    <Link
                        to="/signaler"
                        className="bg-white rounded-xl shadow-lg p-6 flex items-center gap-4 hover:shadow-xl transition-shadow"
                    >
                        <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.664-.833-2.464 0L4.34 16.5C3.57 17.333 4.532 19 6.072 19z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-900">Signaler un problème</h3>
                            <p className="text-sm text-gray-500">Voirie, éclairage...</p>
                        </div>
                    </Link>
                </div>
            </div>

            {/* Services List */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid lg:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                            <div className="p-6 border-b border-gray-100">
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600">
                                        {service.icon}
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-bold text-gray-900">{service.category}</h2>
                                        <p className="text-sm text-gray-500">{service.description}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <ul className="space-y-4">
                                    {service.items.map((item, itemIndex) => (
                                        <li key={itemIndex} className="flex items-start gap-3">
                                            <svg className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <div>
                                                <h3 className="font-medium text-gray-900">{item.name}</h3>
                                                <p className="text-sm text-gray-500">{item.description}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Contact CTA */}
            <div className="bg-gray-100 py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                        Besoin d'aide pour vos démarches ?
                    </h2>
                    <p className="text-gray-600 mb-8">
                        Notre équipe est à votre disposition pour vous accompagner dans toutes vos démarches administratives.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/write-to-executive-secretary"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-full transition-colors"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            Contacter le Secrétaire Exécutif
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;