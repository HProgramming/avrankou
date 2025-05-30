
import { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isParticipezDropdownOpen, setIsParticipezDropdownOpen] = useState(false);

    return (
        <header className="bg-white shadow-md sticky top-0 z-50 border-b-4 border-blue-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16 lg:h-20">
            <div className="flex items-center">
                <a href="/" className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">A</span>
                </div>
                <span className="hidden sm:block text-xl lg:text-2xl font-bold text-green-500">
                    Avrankou
                </span>
                </a>
            </div>

            <nav className="hidden md:flex space-x-1">
                <div
                className="relative"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
                >
                <button className="px-4 py-2 rounded-md text-gray-700 hover:text-yellow-600 hover:bg-gray-50 font-medium transition-colors duration-200 flex items-center">
                    La Commune
                    <svg
                    className={`ml-1 h-4 w-4 transition-transform duration-200 ${
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
                    <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50">
                    <a
                        href="/decouvrir-avrankou"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-yellow-600 transition-colors duration-200 font-medium"
                    >
                        Découvrir Avrankou
                    </a>
                    <a
                        href="/histoire"
                        className="block px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-yellow-600 transition-colors duration-200 ml-4"
                    >
                        Historique
                    </a>
                    <a
                        href="/economie"
                        className="block px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-yellow-600 transition-colors duration-200 ml-4"
                    >
                        Économie
                    </a>
                    <a
                        href="/potentialites"
                        className="block px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-yellow-600 transition-colors duration-200 ml-4"
                    >
                        Potentialités
                    </a>
                    <a
                        href="/attractions"
                        className="block px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-yellow-600 transition-colors duration-200 ml-4"
                    >
                        Attractions touristiques
                    </a>
                    <div className="border-t border-gray-200 my-2"></div>
                    <a
                        href="/geographie"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-yellow-600 transition-colors duration-200"
                    >
                        Géographie
                    </a>
                    <a
                        href="/demographie"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-yellow-600 transition-colors duration-200"
                    >
                        Démographie
                    </a>
                    </div>
                )}
                </div>

                <a
                href="/services"
                className="px-4 py-2 rounded-md text-gray-700 hover:text-yellow-600 hover:bg-gray-50 font-medium transition-colors duration-200"
                >
                Services
                </a>
                
                <a
                href="/documentations"
                className="px-4 py-2 rounded-md text-gray-700 hover:text-yellow-600 hover:bg-gray-50 font-medium transition-colors duration-200"
                >
                Documentations
                </a>
                
                <a
                href="/actualites"
                className="px-4 py-2 rounded-md text-gray-700 hover:text-yellow-600 hover:bg-gray-50 font-medium transition-colors duration-200"
                >
                Actualités
                </a>
                
                {/* Participez Dropdown Menu */}
                <div
                className="relative"
                onMouseEnter={() => setIsParticipezDropdownOpen(true)}
                onMouseLeave={() => setIsParticipezDropdownOpen(false)}
                >
                <button className="px-4 py-2 rounded-md text-gray-700 hover:text-yellow-600 hover:bg-gray-50 font-medium transition-colors duration-200 flex items-center">
                    Participez
                    <svg
                    className={`ml-1 h-4 w-4 transition-transform duration-200 ${
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
                    <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50">
                    <a
                        href="/signaler"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-yellow-600 transition-colors duration-200"
                    >
                        Signaler
                    </a>
                    <a
                        href="/ecrire-au-maire"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-yellow-600 transition-colors duration-200"
                    >
                        Écrire au maire
                    </a>
                    <a
                        href="/ecrire-au-secretaire-executif"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-yellow-600 transition-colors duration-200"
                    >
                        Écrire au sécrétaire exécutif
                    </a>
                    </div>
                )}
                </div>
            </nav>

            {/* Mobile menu button */}
            <button
                className="md:hidden p-2 rounded-md text-gray-700 hover:text-yellow-600 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
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
            <div className="md:hidden border-t border-gray-200 py-4">
                <div className="flex flex-col space-y-2">
                {/* Mobile Dropdown */}
                <div>
                    <button
                    className="w-full text-left px-4 py-2 text-gray-700 hover:text-yellow-600 hover:bg-gray-50 rounded-md font-medium transition-colors duration-200 flex items-center justify-between"
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
                    <div className="ml-4 mt-2 space-y-1">
                        <a
                        href="/decouvrir-avrankou"
                        className="block px-4 py-2 text-gray-700 hover:text-yellow-600 hover:bg-gray-50 rounded-md transition-colors duration-200 font-medium"
                        >
                        Découvrir Avrankou
                        </a>
                        <a
                        href="/histoire"
                        className="block px-6 py-2 text-sm text-gray-600 hover:text-yellow-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                        >
                        Historique
                        </a>
                        <a
                        href="/economie"
                        className="block px-6 py-2 text-sm text-gray-600 hover:text-yellow-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                        >
                        Économie
                        </a>
                        <a
                        href="/potentialites"
                        className="block px-6 py-2 text-sm text-gray-600 hover:text-yellow-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                        >
                        Potentialités
                        </a>
                        <a
                        href="/attractions"
                        className="block px-6 py-2 text-sm text-gray-600 hover:text-yellow-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                        >
                        Attractions touristiques
                        </a>
                        <div className="border-t border-gray-200 my-2 mx-4"></div>
                        <a
                        href="/geographie"
                        className="block px-4 py-2 text-gray-700 hover:text-yellow-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                        >
                        Géographie
                        </a>
                        <a
                        href="/demographie"
                        className="block px-4 py-2 text-gray-700 hover:text-yellow-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                        >
                        Démographie
                        </a>
                    </div>
                    )}
                </div>

                <a
                    href="/services"
                    className="px-4 py-2 text-gray-700 hover:text-yellow-600 hover:bg-gray-50 rounded-md font-medium transition-colors duration-200"
                >
                    Services
                </a>
                
                <a
                    href="/documentations"
                    className="px-4 py-2 text-gray-700 hover:text-yellow-600 hover:bg-gray-50 rounded-md font-medium transition-colors duration-200"
                >
                    Documentations
                </a>
                
                <a
                    href="/actualites"
                    className="px-4 py-2 text-gray-700 hover:text-yellow-600 hover:bg-gray-50 rounded-md font-medium transition-colors duration-200"
                >
                    Actualités
                </a>
                
                {/* Mobile Participez Dropdown */}
                <div>
                    <button
                    className="w-full text-left px-4 py-2 text-gray-700 hover:text-yellow-600 hover:bg-gray-50 rounded-md font-medium transition-colors duration-200 flex items-center justify-between"
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
                    <div className="ml-4 mt-2 space-y-1">
                        <a
                        href="/signaler"
                        className="block px-4 py-2 text-gray-700 hover:text-yellow-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                        >
                        Signaler
                        </a>
                        <a
                        href="/ecrire-au-maire"
                        className="block px-4 py-2 text-gray-700 hover:text-yellow-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                        >
                        Écrire au maire
                        </a>
                        <a
                        href="/ecrire-au-secretaire-executif"
                        className="block px-4 py-2 text-gray-700 hover:text-yellow-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
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