function Navbar() {
    try {
        const [isMenuOpen, setIsMenuOpen] = React.useState(false);

        return (
            <nav data-name="navbar" className="bg-white shadow-md fixed w-full z-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <span data-name="logo" className="text-xl font-bold text-indigo-600">DK</span>
                        </div>
                        
                        <div className="hidden md:flex items-center space-x-8">
                            <a data-name="nav-home" href="#home" className="text-gray-700 hover:text-indigo-600">Home</a>
                            <a data-name="nav-about" href="#about" className="text-gray-700 hover:text-indigo-600">About</a>
                            <a data-name="nav-skills" href="#skills" className="text-gray-700 hover:text-indigo-600">Skills</a>
                            <a data-name="nav-projects" href="#projects" className="text-gray-700 hover:text-indigo-600">Projects</a>
                            <a data-name="nav-contact" href="#contact" className="text-gray-700 hover:text-indigo-600">Contact</a>
                        </div>

                        <div className="md:hidden flex items-center">
                            <button
                                data-name="mobile-menu-button"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-gray-700 hover:text-indigo-600"
                            >
                                <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                            </button>
                        </div>
                    </div>
                </div>

                {isMenuOpen && (
                    <div data-name="mobile-menu" className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Home</a>
                            <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">About</a>
                            <a href="#skills" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Skills</a>
                            <a href="#projects" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Projects</a>
                            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Contact</a>
                        </div>
                    </div>
                )}
            </nav>
        );
    } catch (error) {
        console.error('Navbar component error:', error);
        reportError(error);
        return null;
    }
}
