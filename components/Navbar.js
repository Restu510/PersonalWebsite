function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <nav data-name="navbar" className="fixed w-full bg-white shadow-md z-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <a href="#" data-name="nav-logo" className="text-xl font-bold text-gray-800">John Doe</a>
                    
                    <div className="hidden md:flex space-x-8">
                        <a href="#about" data-name="nav-about" className="text-gray-600 hover:text-gray-900">About</a>
                        <a href="#projects" data-name="nav-projects" className="text-gray-600 hover:text-gray-900">Projects</a>
                        <a href="#contact" data-name="nav-contact" className="text-gray-600 hover:text-gray-900">Contact</a>
                    </div>

                    <button 
                        data-name="mobile-menu-button"
                        className="md:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
                    </button>
                </div>

                {isOpen && (
                    <div data-name="mobile-menu" className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <a href="#about" className="block px-3 py-2 text-gray-600">About</a>
                            <a href="#projects" className="block px-3 py-2 text-gray-600">Projects</a>
                            <a href="#contact" className="block px-3 py-2 text-gray-600">Contact</a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
