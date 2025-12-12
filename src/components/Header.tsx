import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-gradient-to-r from-blue-900 to-blue-700 text-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/images/img-Logo-IEADMS.png" 
                alt="IEADMS Logo"
                className="h-10 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-white hover:text-blue-200 transition-colors"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-blue-200 transition-colors"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('leadership')}
              className="text-white hover:text-blue-200 transition-colors"
            >
              Liderança
            </button>
            <button 
              onClick={() => scrollToSection('worship')}
              className="text-white hover:text-blue-200 transition-colors"
            >
              Cultos
            </button>
            <button 
              onClick={() => scrollToSection('events')}
              className="text-white hover:text-blue-200 transition-colors"
            >
              Eventos
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-blue-200 transition-colors"
            >
              Contato
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-blue-600">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-white hover:text-blue-200 transition-colors"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-white hover:text-blue-200 transition-colors"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('leadership')}
                className="text-white hover:text-blue-200 transition-colors"
              >
                Liderança
              </button>
              <button 
                onClick={() => scrollToSection('worship')}
                className="text-white hover:text-blue-200 transition-colors"
              >
                Cultos
              </button>
              <button 
                onClick={() => scrollToSection('events')}
                className="text-white hover:text-blue-200 transition-colors"
              >
                Eventos
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-white hover:text-blue-200 transition-colors"
              >
                Contato
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;