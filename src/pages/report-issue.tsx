import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import BackButton from '../components/BackButton';

interface IssueCategory {
    id: string;
    name: string;
    description: string;
    icon: React.ReactNode;
}

const categories: IssueCategory[] = [
    {
        id: 'voirie',
        name: 'Voirie',
        description: 'Routes, trottoirs, nids de poule',
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
        )
    },
    {
        id: 'eclairage',
        name: 'Éclairage public',
        description: 'Lampadaires, zones sombres',
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
        )
    },
    {
        id: 'proprete',
        name: 'Propreté',
        description: 'Déchets, dépôts sauvages',
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
        )
    },
    {
        id: 'eau',
        name: 'Eau & Assainissement',
        description: 'Fuites, caniveaux bouchés',
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
        )
    },
    {
        id: 'espaces-verts',
        name: 'Espaces verts',
        description: 'Parcs, arbres, végétation',
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
        )
    },
    {
        id: 'autre',
        name: 'Autre',
        description: 'Autres problèmes',
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        )
    }
];

const ReportIssue = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('');
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        location: '',
        description: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-12 text-center">
                        <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg className="w-10 h-10 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Signalement enregistré</h2>
                        <p className="text-gray-600 mb-4">
                            Votre signalement a été transmis aux services compétents de la commune.
                            Vous recevrez une notification par email lors de sa prise en charge.
                        </p>
                        <div className="bg-orange-50 rounded-xl p-4 mb-8">
                            <p className="text-sm text-orange-800">
                                <strong>Numéro de suivi :</strong> SIG-{Date.now().toString().slice(-8)}
                            </p>
                        </div>
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-full transition-all duration-300"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Retour à l'accueil
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Back button */}
                <BackButton variant="dark" className="mb-8" />

                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                        <svg className="w-8 h-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.664-.833-2.464 0L4.34 16.5C3.57 17.333 4.532 19 6.072 19z" />
                        </svg>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Signaler un problème
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Aidez-nous à améliorer votre cadre de vie en signalant les problèmes que vous constatez dans la commune.
                    </p>
                </div>

                <form onSubmit={handleSubmit}>
                    {/* Category Selection */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
                        <h2 className="text-xl font-semibold text-gray-900 mb-6">Type de problème</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {categories.map((category) => (
                                <button
                                    key={category.id}
                                    type="button"
                                    onClick={() => setSelectedCategory(category.id)}
                                    className={`p-4 rounded-xl border-2 transition-all duration-200 text-left ${
                                        selectedCategory === category.id
                                            ? 'border-orange-500 bg-orange-50'
                                            : 'border-gray-200 hover:border-orange-200 hover:bg-orange-50/50'
                                    }`}
                                >
                                    <div className={`mb-2 ${selectedCategory === category.id ? 'text-orange-600' : 'text-gray-400'}`}>
                                        {category.icon}
                                    </div>
                                    <h3 className={`font-semibold ${selectedCategory === category.id ? 'text-orange-900' : 'text-gray-900'}`}>
                                        {category.name}
                                    </h3>
                                    <p className="text-sm text-gray-500">{category.description}</p>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Details Form */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
                        <h2 className="text-xl font-semibold text-gray-900 mb-6">Détails du signalement</h2>
                        <div className="space-y-6">
                            <div>
                                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                                    Localisation <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="location"
                                    name="location"
                                    required
                                    value={formData.location}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-orange-500 focus:border-orange-500 transition-colors"
                                    placeholder="Adresse ou point de repère"
                                />
                            </div>

                            <div>
                                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                                    Description du problème <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    id="description"
                                    name="description"
                                    required
                                    rows={5}
                                    value={formData.description}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-orange-500 focus:border-orange-500 transition-colors resize-none"
                                    placeholder="Décrivez le problème en détail..."
                                />
                            </div>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
                        <h2 className="text-xl font-semibold text-gray-900 mb-6">Vos coordonnées (optionnel)</h2>
                        <p className="text-sm text-gray-500 mb-6">
                            Laissez vos coordonnées si vous souhaitez être informé du suivi de votre signalement.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                                    Nom
                                </label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-orange-500 focus:border-orange-500 transition-colors"
                                    placeholder="Votre nom"
                                />
                            </div>
                            <div>
                                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                                    Prénom
                                </label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-orange-500 focus:border-orange-500 transition-colors"
                                    placeholder="Votre prénom"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-orange-500 focus:border-orange-500 transition-colors"
                                    placeholder="votre@email.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                    Téléphone
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-orange-500 focus:border-orange-500 transition-colors"
                                    placeholder="+229 XX XX XX XX"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        disabled={!selectedCategory || isSubmitting}
                        className="w-full py-4 px-6 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? (
                            <>
                                <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Envoi en cours...
                            </>
                        ) : (
                            <>
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                </svg>
                                Envoyer le signalement
                            </>
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ReportIssue;