import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Inventory', href: '/inventory' },
    { name: 'FAQs', href: '/faqs' },
    { name: 'Contact', href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3 group flex-shrink-0">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
              <img 
                src="https://static.readdy.ai/image/0af56103a01c8c8becda45c0a8f96350/9f46325612cd04fe3c1a9308a2d87b13.png"
                alt="CME AUTOS"
                className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight font-['Orbitron']">
                CME AUTOS
              </span>
              <span className="text-[10px] sm:text-xs text-gray-600 font-medium">
                Premium Vehicle Import
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors duration-200 ${
                isActive('/') ? 'text-amber-500' : 'text-gray-700 hover:text-amber-500'
              }`}
            >
              Home
            </Link>
            <Link
              to="/inventory"
              className={`text-sm font-medium transition-colors duration-200 ${
                isActive('/inventory') ? 'text-amber-500' : 'text-gray-700 hover:text-amber-500'
              }`}
            >
              Inventory
            </Link>
            <Link
              to="/services"
              className={`text-sm font-medium transition-colors duration-200 ${
                isActive('/services') ? 'text-amber-500' : 'text-gray-700 hover:text-amber-500'
              }`}
            >
              Services
            </Link>
            <Link
              to="/faqs"
              className={`text-sm font-medium transition-colors duration-200 ${
                isActive('/faqs') ? 'text-amber-500' : 'text-gray-700 hover:text-amber-500'
              }`}
            >
              FAQs
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors duration-200 ${
                isActive('/about') ? 'text-amber-500' : 'text-gray-700 hover:text-amber-500'
              }`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors duration-200 ${
                isActive('/contact') ? 'text-amber-500' : 'text-gray-700 hover:text-amber-500'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/inventory"
              className="px-4 xl:px-5 py-2 xl:py-2.5 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-200 whitespace-nowrap cursor-pointer"
            >
              Get Quote
            </Link>
            <a
              href="https://wa.me/2347079208913"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 xl:px-5 py-2 xl:py-2.5 text-sm font-medium text-gray-900 bg-amber-400 rounded-lg hover:bg-amber-500 transition-all duration-200 whitespace-nowrap cursor-pointer flex items-center gap-2"
            >
              <i className="ri-phone-line"></i>
              Call Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-amber-500 transition-colors cursor-pointer"
          >
            <i className={`text-2xl ${isMobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'}`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col gap-4">
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive('/') ? 'text-amber-500' : 'text-gray-700'
                }`}
              >
                Home
              </Link>
              <Link
                to="/inventory"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive('/inventory') ? 'text-amber-500' : 'text-gray-700'
                }`}
              >
                Inventory
              </Link>
              <Link
                to="/services"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive('/services') ? 'text-amber-500' : 'text-gray-700'
                }`}
              >
                Services
              </Link>
              <Link
                to="/faqs"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive('/faqs') ? 'text-amber-500' : 'text-gray-700'
                }`}
              >
                FAQs
              </Link>
              <Link
                to="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive('/about') ? 'text-amber-500' : 'text-gray-700'
                }`}
              >
                About
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive('/contact') ? 'text-amber-500' : 'text-gray-700'
                }`}
              >
                Contact
              </Link>
              <div className="flex flex-col gap-3 mt-4">
                <Link
                  to="/inventory"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-5 py-2.5 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-200 text-center whitespace-nowrap cursor-pointer"
                >
                  Get Quote
                </Link>
                <a
                  href="https://wa.me/2347079208913"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-5 py-2.5 text-sm font-medium text-gray-900 bg-amber-400 rounded-lg hover:bg-amber-500 transition-all duration-200 text-center whitespace-nowrap cursor-pointer flex items-center justify-center gap-2"
                >
                  <i className="ri-phone-line"></i>
                  Call Us
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
