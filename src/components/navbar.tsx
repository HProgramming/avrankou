import { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isParticipezDropdownOpen, setIsParticipezDropdownOpen] = useState(false);


    return (
        <header className="bg-white border-b-2 border-gray-200 shadow-sm sticky top-0 z-50">
            {/* Top utility bar */}
            <div className="bg-gray-50 border-b border-gray-200 py-2 text-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center">
                        <div className="flex space-x-4 text-gray-600">
                            <span>Commune d'Avrankou</span>
                            <span>•</span>
                            <span>République du Bénin</span>
                        </div>
                        <div className="hidden md:flex items-center space-x-4 text-gray-600">
                            <div className="flex items-center space-x-2">
                                <button className='flex flex-row items-center space-x-2 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200'>
                                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                    <span>Rechercher</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20 lg:h-24">
                <div className="flex items-center">
                    <a href="/" className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-500 rounded-lg flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-2xl">A</span>
                    </div>
                    <div className="hidden sm:block">
                        <div className="text-2xl lg:text-3xl font-bold text-blue-600">
                            Avrankou
                        </div>
                        <div className="text-sm text-gray-600 font-medium">
                            Commune d'Avrankou
                        </div>
                    </div>
                    </a>
                </div>

                <nav className="hidden md:flex items-center space-x-1 h-full">
                    <div
                    className="relative"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                    >
                    <button className="px-6 py-5 text-gray-800  hover:text-gray-600 font-semibold transition-all duration-200 flex items-center border-b-4 border-transparent hover:border-gray-700">
                        La Commune
                    </button>
                    </div>

                    <a
                    href="/services"
                    className="px-6 py-5 text-gray-800  hover:text-gray-600 font-semibold transition-all duration-200 flex items-center border-b-4 border-transparent hover:border-gray-700"
                    >
                    Services
                    </a>

                    <a
                    href="/documentations"
                    className="px-6 py-5 text-gray-800  hover:text-gray-600 font-semibold transition-all duration-200 flex items-center border-b-4 border-transparent hover:border-gray-700"
                    >
                    Documentations
                    </a>

                    <a
                    href="/actualites"
                    className="px-6 py-5 text-gray-800  hover:text-gray-600 font-semibold transition-all duration-200 flex items-center border-b-4 border-transparent hover:border-gray-700"
                    >
                    Actualités
                    </a>

                    {/* Participez Dropdown Menu */}
                    <div
                    className="relative"
                    onMouseEnter={() => setIsParticipezDropdownOpen(true)}
                    onMouseLeave={() => setIsParticipezDropdownOpen(false)}
                    >
                    <button className="px-6 py-5 text-gray-800 hover:text-gray-600 font-semibold transition-all duration-200 flex items-center border-b-4 border-transparent hover:border-gray-700">
                        Participez
                    </button>
                    </div>

                    {isDropdownOpen && (
                        <div className="absolute top-full left-0 mt-0 w-full bg-white shadow-xl border border-gray-200 py-3 z-50">
                            <a
                                href="/decouvrir-avrankou"
                                className="block px-6 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 font-semibold border-l-4 border-transparent hover:border-blue-600"
                            >
                                <div className="flex items-center">
                                    <svg className="w-5 h-5 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    Découvrir Avrankou
                                </div>
                            </a>
                            <a
                                href="/histoire"
                                className="block px-8 py-2 text-gray-600 hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200"
                            >
                                <div className="flex items-center">
                                    <svg className="w-4 h-4 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                    Historique
                                </div>
                            </a>
                            <a
                                href="/economie"
                                className="block px-8 py-2 text-gray-600 hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200"
                            >
                                <div className="flex items-center">
                                    <svg className="w-4 h-4 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                    </svg>
                                    Économie
                                </div>
                            </a>
                            <a
                                href="/potentialites"
                                className="block px-8 py-2 text-gray-600 hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200"
                            >
                                <div className="flex items-center">
                                    <svg className="w-4 h-4 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                    Potentialités
                                </div>
                            </a>
                            <a
                                href="/attractions"
                                className="block px-8 py-2 text-gray-600 hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200"
                            >
                                <div className="flex items-center">
                                    <svg className="w-4 h-4 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    Attractions touristiques
                                </div>
                            </a>
                            <div className="border-t border-gray-200 my-3 mx-6"></div>
                            <a
                                href="/geographie"
                                className="block px-6 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 font-medium"
                            >
                                <div className="flex items-center">
                                    <svg className="w-5 h-5 mr-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Géographie
                                </div>
                            </a>
                            <a
                                href="/demographie"
                                className="block px-6 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 font-medium"
                            >
                                <div className="flex items-center">
                                    <svg className="w-5 h-5 mr-3 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    Démographie
                                </div>
                            </a>
                        </div>
                    )}
                    {isParticipezDropdownOpen && (
                        <div className="absolute top-full left-0 mt-0 w-full bg-white shadow-xl border border-gray-200 py-3 z-50">
                        <a
                            href="/signaler"
                            className="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 font-medium border-l-4 border-transparent hover:border-blue-600"
                        >
                            <div className="flex items-center">
                                <svg className="w-5 h-5 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                                </svg>
                                Signaler
                            </div>
                            <p className="text-sm text-gray-500 mt-1 ml-8">Signaler un problème</p>
                        </a>
                        <a
                            href="/ecrire-au-maire"
                            className="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 font-medium border-l-4 border-transparent hover:border-blue-600"
                        >
                            <div className="flex items-center">
                                <svg className="w-5 h-5 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                Écrire au maire
                            </div>
                            <p className="text-sm text-gray-500 mt-1 ml-8">Contactez le maire</p>
                        </a>
                        <a
                            href="/ecrire-au-secretaire-executif"
                            className="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 font-medium border-l-4 border-transparent hover:border-blue-600"
                        >
                            <div className="flex items-center">
                                <svg className="w-5 h-5 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                                Écrire au sécrétaire exécutif
                            </div>
                            <p className="text-sm text-gray-500 mt-1 ml-8">Contactez le sécrétaire</p>
                        </a>
                        </div>
                    )}
                </nav>

                {/* Mobile menu button */}
                <button
                    className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <svg
                    className={`h-6 w-6 transition-transform duration-200 ${
                        isMenuOpen ? 'rotate-90' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    >
                    {isMenuOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                    </svg>
                </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                <div className="md:hidden border-t border-gray-200 bg-gray-50 py-4">
                    <div className="flex flex-col space-y-1">
                    {/* Mobile Dropdown */}
                    <div>
                        <button
                        className="w-full text-left px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600 font-semibold transition-colors duration-200 flex items-center justify-between"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        >
                        La Commune
                        <svg
                            className={`h-4 w-4 transition-transform duration-200 ${
                            isDropdownOpen ? 'rotate-180' : ''
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                        </button>

                        {isDropdownOpen && (
                        <div className="bg-white border border-gray-200 rounded-lg mx-4 mt-2 shadow-sm">
                            <a
                            href="/decouvrir-avrankou"
                            className="block px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600 font-semibold border-l-4 border-transparent hover:border-blue-600 transition-colors duration-200"
                            >
                            Découvrir Avrankou
                            </a>
                            <a
                            href="/histoire"
                            className="block px-6 py-2 text-gray-600 hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200"
                            >
                            Historique
                            </a>
                            <a
                            href="/economie"
                            className="block px-6 py-2 text-gray-600 hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200"
                            >
                            Économie
                            </a>
                            <a
                            href="/potentialites"
                            className="block px-6 py-2 text-gray-600 hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200"
                            >
                            Potentialités
                            </a>
                            <a
                            href="/attractions"
                            className="block px-6 py-2 text-gray-600 hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200"
                            >
                            Attractions touristiques
                            </a>
                            <div className="border-t border-gray-200 my-2 mx-4"></div>
                            <a
                            href="/geographie"
                            className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium transition-colors duration-200"
                            >
                            Géographie
                            </a>
                            <a
                            href="/demographie"
                            className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium transition-colors duration-200"
                            >
                            Démographie
                            </a>
                        </div>
                        )}
                    </div>

                    <a
                        href="/services"
                        className="px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600 font-semibold transition-colors duration-200"
                    >
                        Services
                    </a>

                    <a
                        href="/documentations"
                        className="px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600 font-semibold transition-colors duration-200"
                    >
                        Documentations
                    </a>

                    <a
                        href="/actualites"
                        className="px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600 font-semibold transition-colors duration-200"
                    >
                        Actualités
                    </a>

                    {/* Mobile Participez Dropdown */}
                    <div>
                        <button
                        className="w-full text-left px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600 font-semibold transition-colors duration-200 flex items-center justify-between"
                        onClick={() => setIsParticipezDropdownOpen(!isParticipezDropdownOpen)}
                        >
                        Participez
                        <svg
                            className={`h-4 w-4 transition-transform duration-200 ${
                            isParticipezDropdownOpen ? 'rotate-180' : ''
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                        </button>

                        {isParticipezDropdownOpen && (
                        <div className="bg-white border border-gray-200 rounded-lg mx-4 mt-2 shadow-sm">
                            <a
                            href="/signaler"
                            className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium border-l-4 border-transparent hover:border-blue-600 transition-colors duration-200"
                            >
                            Signaler
                            </a>
                            <a
                            href="/ecrire-au-maire"
                            className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium border-l-4 border-transparent hover:border-blue-600 transition-colors duration-200"
                            >
                            Écrire au maire
                            </a>
                            <a
                            href="/ecrire-au-secretaire-executif"
                            className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium border-l-4 border-transparent hover:border-blue-600 transition-colors duration-200"
                            >
                            Écrire au sécrétaire exécutif
                            </a>
                        </div>
                        )}
                    </div>
                    </div>
                </div>
                )}
            </div>
        </header>
    );
};

export default Navbar;
