import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="container-max">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <span className="text-xl font-semibold text-gray-900">Techtidy</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#process" className="text-gray-600 hover:text-teal-600 transition-colors text-sm font-medium">Process</a>
            <a href="#services" className="text-gray-600 hover:text-teal-600 transition-colors text-sm font-medium">Services</a>
            <a href="#health-check" className="text-gray-600 hover:text-teal-600 transition-colors text-sm font-medium">Health Check</a>
            <a href="#pricing" className="text-gray-600 hover:text-teal-600 transition-colors text-sm font-medium">Pricing</a>
            <a href="#contact" className="btn-primary text-sm">Book a Tidy-Up</a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <div className="md:hidden border-t border-gray-100 py-4 px-4">
            <nav className="flex flex-col space-y-4">
              <a href="#process" className="text-gray-600 hover:text-teal-600 transition-colors text-sm font-medium">Process</a>
              <a href="#services" className="text-gray-600 hover:text-teal-600 transition-colors text-sm font-medium">Services</a>
              <a href="#health-check" className="text-gray-600 hover:text-teal-600 transition-colors text-sm font-medium">Health Check</a>
              <a href="#pricing" className="text-gray-600 hover:text-teal-600 transition-colors text-sm font-medium">Pricing</a>
              <a href="#contact" className="btn-primary text-sm text-center">Book a Tidy-Up</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
