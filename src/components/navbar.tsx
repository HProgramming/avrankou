import { useState, useEffect } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isParticipezDropdownOpen, setIsParticipezDropdownOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    // Handle Escape key to close search overlay
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && isSearchOpen) {
                setIsSearchOpen(false);
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isSearchOpen]);


    return (
        <>
        <header className="bg-gradient-to-r from-green-100 via-red-50  to-yellow-50 border-b-2 border-gray-200 shadow-sm sticky top-0 z-50">
            {/* Top utility bar */}
            <div className="bg-gradient-to-r from-green-800 via-red-100  to-yellow-500 border-b border-gray-200 py-2 text-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center">
                        <div className="flex space-x-4 text-white">
                            <span>Commune d'Avrankou</span>
                            <span>•</span>
                            <span>République du Bénin</span>
                        </div>
                        <div className="hidden md:flex items-center space-x-4 text-gray-600">
                            <div className="flex items-center space-x-2">
                                <button
                                    onClick={() => setIsSearchOpen(true)}
                                    className='flex flex-row items-center space-x-2 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200'
                                >
                                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                    <span>Rechercher</span>
                                </button>
                            </div>
                        </div>
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsSearchOpen(true)}
                                className='flex items-center justify-center w-8 h-8 bg-gray-500 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200'
                                aria-label="Rechercher"
                            >
                                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main navbar */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20 lg:h-24">
                <div className="flex items-center">
                    <a href="/" className="flex items-center space-x-2">
                        <div className={`w-24 h-24`}>
                            <img src="logo.jpg"   alt={""}/>
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

                <nav className="hidden md:flex items-center space-x-1 h-full relative">
                    <div
                    className="relative"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                    >
                    <button className={`px-6 py-5 text-gray-800 hover:text-gray-600 font-semibold transition-all duration-200 flex items-center border-b-4 ${isDropdownOpen ? 'border-gray-700' : 'border-transparent hover:border-gray-700'}`}>
                        La Commune
                    </button>

                    {/* Full-width Mega Menu for La Commune - Now inside the same div as the button */}
                    {isDropdownOpen && (
                        <div 
                            className="absolute left-0 right-0 top-full bg-white shadow-xl border-t border-gray-200 py-12 z-50 w-screen"
                            style={{ marginLeft: 'calc(-50vw + 50%)' }}
                        >
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="grid grid-cols-3 gap-12">
                                    <div className="px-4">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-6">Découvrir</h3>
                                        <a
                                            href="/decouvrir-avrankou"
                                            className="block px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 font-semibold border-l-4 border-transparent hover:border-blue-600 rounded"
                                        >
                                            <div className="flex items-center">
                                                <svg className="w-5 h-5 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                <div>
                                                    <div>Découvrir Avrankou</div>
                                                    <div className="text-sm text-gray-500">Présentation générale</div>
                                                </div>
                                            </div>
                                        </a>
                                        <a
                                            href="/histoire"
                                            className="block px-4 py-3 text-gray-600 hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200 rounded"
                                        >
                                            <div className="flex items-center">
                                                <svg className="w-4 h-4 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                                </svg>
                                                <div>
                                                    <div>Historique</div>
                                                    <div className="text-sm text-gray-500">Histoire de la commune</div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>

                                    <div className="px-4">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-6">Économie & Développement</h3>
                                        <a
                                            href="/economie"
                                            className="block px-4 py-3 text-gray-600 hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200 rounded"
                                        >
                                            <div className="flex items-center">
                                                <svg className="w-4 h-4 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                                </svg>
                                                <div>
                                                    <div>Économie</div>
                                                    <div className="text-sm text-gray-500">Secteurs économiques</div>
                                                </div>
                                            </div>
                                        </a>
                                        <a
                                            href="/potentialites"
                                            className="block px-4 py-3 text-gray-600 hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200 rounded"
                                        >
                                            <div className="flex items-center">
                                                <svg className="w-4 h-4 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                                </svg>
                                                <div>
                                                    <div>Potentialités</div>
                                                    <div className="text-sm text-gray-500">Opportunités de développement</div>
                                                </div>
                                            </div>
                                        </a>
                                        <a
                                            href="/attractions"
                                            className="block px-4 py-3 text-gray-600 hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200 rounded"
                                        >
                                            <div className="flex items-center">
                                                <svg className="w-4 h-4 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                <div>
                                                    <div>Attractions touristiques</div>
                                                    <div className="text-sm text-gray-500">Sites et monuments</div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>

                                    <div className="px-4">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-6">Territoire</h3>
                                        <a
                                            href="/geographie"
                                            className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 font-medium rounded"
                                        >
                                            <div className="flex items-center">
                                                <svg className="w-4 h-4 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <div>
                                                    <div>Géographie</div>
                                                    <div className="text-sm text-gray-500">Situation et relief</div>
                                                </div>
                                            </div>
                                        </a>
                                        <a
                                            href="/demographie"
                                            className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 font-medium rounded"
                                        >
                                            <div className="flex items-center">
                                                <svg className="w-4 h-4 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                                </svg>
                                                <div>
                                                    <div>Démographie</div>
                                                    <div className="text-sm text-gray-500">Population et statistiques</div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    </div>

                    <a
                    href="/services"
                    className="px-6 py-5 text-gray-800 hover:text-gray-600 font-semibold transition-all duration-200 flex items-center border-b-4 border-transparent hover:border-gray-700"
                    >
                    Services
                    </a>

                    <a
                    href="/documentations"
                    className="px-6 py-5 text-gray-800 hover:text-gray-600 font-semibold transition-all duration-200 flex items-center border-b-4 border-transparent hover:border-gray-700"
                    >
                    Documentations
                    </a>

                    <a
                    href="/actualites"
                    className="px-6 py-5 text-gray-800 hover:text-gray-600 font-semibold transition-all duration-200 flex items-center border-b-4 border-transparent hover:border-gray-700"
                    >
                    Actualités
                    </a>

                    {/* Participez Dropdown Menu */}
                    <div
                    className="relative"
                    onMouseEnter={() => setIsParticipezDropdownOpen(true)}
                    onMouseLeave={() => setIsParticipezDropdownOpen(false)}
                    >
                    <button className={`px-6 py-5 text-gray-800 hover:text-gray-600 font-semibold transition-all duration-200 flex items-center border-b-4 ${isParticipezDropdownOpen ? 'border-gray-700' : 'border-transparent hover:border-gray-700'}`}>
                        Participez
                    </button>

                    {/* Full-width Mega Menu for Participez - Now inside the same div as the button */}
                    {isParticipezDropdownOpen && (
                        <div 
                            className="absolute left-0 right-0 top-full bg-white shadow-xl border-t border-gray-200 py-12 z-50 w-screen"
                            style={{ marginLeft: 'calc(-50vw + 50%)' }}
                        >
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="grid grid-cols-3 gap-12">
                                    <div className="px-4">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-6">Services citoyens</h3>
                                        <a
                                            href="/signaler"
                                            className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 font-medium border-l-4 border-transparent hover:border-blue-600 rounded"
                                        >
                                            <div className="flex items-center">
                                                <svg className="w-5 h-5 mr-3 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.664-.833-2.464 0L4.34 16.5C3.57 17.333 4.532 19 6.072 19z" />
                                                </svg>
                                                <div>
                                                    <div>Signaler un problème</div>
                                                    <div className="text-sm text-gray-500">Voirie, éclairage, propreté</div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>

                                    <div className="px-4">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-6">Contact institutionnel</h3>
                                        <a
                                            href="/ecrire-au-maire"
                                            className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 font-medium border-l-4 border-transparent hover:border-blue-600 rounded mb-3"
                                        >
                                            <div className="flex items-center">
                                                <svg className="w-5 h-5 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                                <div>
                                                    <div>Écrire au maire</div>
                                                    <div className="text-sm text-gray-500">Contacts et suggestions</div>
                                                </div>
                                            </div>
                                        </a>
                                        <a
                                            href="/ecrire-au-secretaire-executif"
                                            className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 font-medium border-l-4 border-transparent hover:border-blue-600 rounded"
                                        >
                                            <div className="flex items-center">
                                                <svg className="w-5 h-5 mr-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                </svg>
                                                <div>
                                                    <div>Secrétaire exécutif</div>
                                                    <div className="text-sm text-gray-500">Questions administratives</div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    </div>
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

        {/* Search Overlay */}
        {isSearchOpen && (
            <div className="fixed inset-0 bg-white z-[60] flex flex-col">
                {/* Search Header */}
                <div className="bg-gray-50 border-b border-gray-200 py-4">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-green-500 rounded-lg flex items-center justify-center shadow-lg">
                                    <span className="text-white font-bold text-lg">A</span>
                                </div>
                                <div>
                                    <div className="text-xl font-bold text-blue-600">Avrankou</div>
                                    <div className="text-sm text-gray-600">Recherche</div>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsSearchOpen(false)}
                                className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-colors duration-200"
                                aria-label="Fermer la recherche"
                            >
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Search Form */}
                <div className="flex-1 flex items-start justify-center pt-16 pb-8 px-4 sm:px-6 lg:px-8">
                    <div className="w-full max-w-4xl">
                        <div className="text-center mb-8">
                            <h1 className="text-3xl font-bold text-gray-900 mb-2">Rechercher sur le site</h1>
                            <p className="text-lg text-gray-600">Trouvez rapidement les informations qui vous intéressent</p>
                        </div>

                        <form className="mb-8">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Que recherchez-vous ?"
                                    className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none transition-all duration-200"
                                    autoFocus
                                />
                                <button
                                    type="submit"
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2"
                                >
                                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                    <span>Rechercher</span>
                                </button>
                            </div>
                        </form>

                        {/* Quick Search Categories */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-200 cursor-pointer">
                                <div className="flex items-center space-x-3 mb-3">
                                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                        </svg>
                                    </div>
                                    <h3 className="font-semibold text-gray-900">Services municipaux</h3>
                                </div>
                                <p className="text-gray-600 text-sm">État civil, urbanisme, taxes, démarches administratives</p>
                            </div>

                            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-green-300 hover:shadow-md transition-all duration-200 cursor-pointer">
                                <div className="flex items-center space-x-3 mb-3">
                                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                    </div>
                                    <h3 className="font-semibold text-gray-900">Documents & Formulaires</h3>
                                </div>
                                <p className="text-gray-600 text-sm">Télécharger des documents officiels et formulaires</p>
                            </div>

                            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all duration-200 cursor-pointer">
                                <div className="flex items-center space-x-3 mb-3">
                                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                                        <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4h.5a2.5 2.5 0 010 5H16v6a1 1 0 01-1 1H9a1 1 0 01-1-1v-6H7.5a2.5 2.5 0 010-5H8z" />
                                        </svg>
                                    </div>
                                    <h3 className="font-semibold text-gray-900">Actualités & Événements</h3>
                                </div>
                                <p className="text-gray-600 text-sm">Dernières nouvelles et événements de la commune</p>
                            </div>
                        </div>

                        <div className="mt-8 text-center">
                            <p className="text-gray-500 text-sm">
                                Appuyez sur <kbd className="px-2 py-1 bg-gray-100 rounded text-xs">Échap</kbd> pour fermer
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )}
        </>
    );
};

export default Navbar;
