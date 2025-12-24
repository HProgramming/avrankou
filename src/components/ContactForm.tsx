import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import BackButton from './BackButton';

interface ContactFormProps {
    recipientTitle: string;
    recipientName: string;
    recipientRole: string;
    recipientImage?: string;
    accentColor?: string;
}

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
}

const ContactForm = ({
    recipientTitle,
    recipientName,
    recipientRole,
    recipientImage = './avrankou.svg',
    accentColor = 'emerald'
}: ContactFormProps) => {
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulation d'envoi
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSubmitted(true);
    };

    const subjects = [
        "Demande d'audience",
        "Réclamation",
        "Suggestion",
        "Demande d'information",
        "Signalement",
        "Remerciement",
        "Autre"
    ];

    const colorClasses = {
        emerald: {
            bg: 'bg-emerald-600',
            bgHover: 'hover:bg-emerald-700',
            bgLight: 'bg-emerald-50',
            text: 'text-emerald-600',
            border: 'border-emerald-600',
            focus: 'focus:ring-emerald-500 focus:border-emerald-500',
            gradient: 'from-emerald-600 to-emerald-700'
        },
        amber: {
            bg: 'bg-amber-600',
            bgHover: 'hover:bg-amber-700',
            bgLight: 'bg-amber-50',
            text: 'text-amber-600',
            border: 'border-amber-600',
            focus: 'focus:ring-amber-500 focus:border-amber-500',
            gradient: 'from-amber-600 to-amber-700'
        }
    };

    const colors = colorClasses[accentColor as keyof typeof colorClasses] || colorClasses.emerald;

    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-12 text-center">
                        <div className={`w-20 h-20 ${colors.bgLight} rounded-full flex items-center justify-center mx-auto mb-6`}>
                            <svg className={`w-10 h-10 ${colors.text}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Message envoyé avec succès</h2>
                        <p className="text-gray-600 mb-8">
                            Votre message a été transmis {recipientTitle === 'Monsieur le Maire' ? 'au Maire' : 'au Secrétaire Exécutif'}.
                            Vous recevrez une réponse dans les plus brefs délais.
                        </p>
                        <Link
                            to="/"
                            className={`inline-flex items-center gap-2 px-6 py-3 ${colors.bg} ${colors.bgHover} text-white font-medium rounded-full transition-all duration-300`}
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
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        {recipientTitle}
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Adressez votre message directement {recipientTitle === 'Écrire au Maire' ? 'au Maire' : 'au Secrétaire Exécutif'} de la commune d'Avrankou.
                        Nous vous répondrons dans les meilleurs délais.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Sidebar - Info destinataire */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-8">
                            <div className="text-center mb-6">
                                <div className={`w-24 h-24 ${colors.bgLight} rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden`}>
                                    <img
                                        src={recipientImage}
                                        alt={recipientName}
                                        className="w-16 h-16 object-contain"
                                    />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900">{recipientName}</h3>
                                <p className={`text-sm ${colors.text} font-medium`}>{recipientRole}</p>
                            </div>

                            <div className="border-t border-gray-100 pt-6 space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className={`w-8 h-8 ${colors.bgLight} rounded-lg flex items-center justify-center flex-shrink-0`}>
                                        <svg className={`w-4 h-4 ${colors.text}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">Délai de réponse</p>
                                        <p className="text-sm text-gray-500">5 à 10 jours ouvrés</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className={`w-8 h-8 ${colors.bgLight} rounded-lg flex items-center justify-center flex-shrink-0`}>
                                        <svg className={`w-4 h-4 ${colors.text}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">Confidentialité</p>
                                        <p className="text-sm text-gray-500">Vos données sont protégées</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className={`w-8 h-8 ${colors.bgLight} rounded-lg flex items-center justify-center flex-shrink-0`}>
                                        <svg className={`w-4 h-4 ${colors.text}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">Accusé de réception</p>
                                        <p className="text-sm text-gray-500">Par email automatique</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Formulaire */}
                    <div className="lg:col-span-2">
                        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                            <div className="space-y-6">
                                {/* Nom et Prénom */}
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                                            Nom <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            required
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 border border-gray-200 rounded-xl ${colors.focus} transition-colors`}
                                            placeholder="Votre nom"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                                            Prénom <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            required
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 border border-gray-200 rounded-xl ${colors.focus} transition-colors`}
                                            placeholder="Votre prénom"
                                        />
                                    </div>
                                </div>

                                {/* Email et Téléphone */}
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                            Email <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 border border-gray-200 rounded-xl ${colors.focus} transition-colors`}
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
                                            className={`w-full px-4 py-3 border border-gray-200 rounded-xl ${colors.focus} transition-colors`}
                                            placeholder="+229 XX XX XX XX"
                                        />
                                    </div>
                                </div>

                                {/* Objet */}
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                        Objet du message <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        id="subject"
                                        name="subject"
                                        required
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 border border-gray-200 rounded-xl ${colors.focus} transition-colors bg-white`}
                                    >
                                        <option value="">Sélectionnez un objet</option>
                                        {subjects.map((subject, index) => (
                                            <option key={index} value={subject}>{subject}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* Message */}
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                        Votre message <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={6}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 border border-gray-200 rounded-xl ${colors.focus} transition-colors resize-none`}
                                        placeholder="Décrivez votre demande en détail..."
                                    />
                                    <p className="mt-2 text-sm text-gray-500">
                                        {formData.message.length} / 2000 caractères
                                    </p>
                                </div>

                                {/* Mentions légales */}
                                <div className="bg-gray-50 rounded-xl p-4">
                                    <p className="text-xs text-gray-500">
                                        En soumettant ce formulaire, vous acceptez que vos données personnelles soient traitées
                                        par la Mairie d'Avrankou dans le cadre de votre demande. Ces informations sont conservées
                                        de manière sécurisée et ne seront pas partagées avec des tiers.
                                    </p>
                                </div>

                                {/* Bouton submit */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full py-4 px-6 ${colors.bg} ${colors.bgHover} text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed`}
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
                                            Envoyer le message
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;