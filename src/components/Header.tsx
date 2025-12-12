import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/images/img-Logo-IEADMS.png" 
              alt="IEADMS" 
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-white/90 text-left px-3 py-2 rounded-lg hover:bg-white/10 hover:text-white transition-all hover:scale-105"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('leadership')}
              className="text-white/90 text-left px-3 py-2 rounded-lg hover:bg-white/10 hover:text-white transition-all hover:scale-105"
            >
              Liderança
            </button>
            <button 
              onClick={() => scrollToSection('worship')}
              className="text-white/90 text-left px-3 py-2 rounded-lg hover:bg-white/10 hover:text-white transition-all hover:scale-105"
            >
              Cultos
            </button>
            <button 
              onClick={() => scrollToSection('events')}
              className="text-white/90 text-left px-3 py-2 rounded-lg hover:bg-white/10 hover:text-white transition-all hover:scale-105"
            >
              Eventos
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-white/90 text-left px-3 py-2 rounded-lg hover:bg-white/10 hover:text-white transition-all hover:scale-105"
            >
              Contato
            </button>
            <button 
              onClick={() => window.location.href = '/sobre'}
              className="text-white/90 text-left px-3 py-2 rounded-lg hover:bg-white/10 hover:text-white transition-all hover:scale-105"
            >
              Conhecer nossa história
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-all duration-200"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 mt-2 mb-6 border-t border-white/10 bg-white/10 backdrop-blur-md rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.35)] animate-slideDown">
            <button 
              onClick={() => window.location.href = '/sobre'}
              className="text-white/90 text-left px-3 py-2 rounded-lg hover:bg-white/10 hover:text-white transition-all hover:translate-x-1"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('leadership')}
              className="text-white/90 text-left px-3 py-2 rounded-lg hover:bg-white/10 hover:text-white transition-all hover:translate-x-1"
            >
              Liderança
            </button>
            <button 
              onClick={() => scrollToSection('worship')}
              className="text-white/90 text-left px-3 py-2 rounded-lg hover:bg-white/10 hover:text-white transition-all hover:translate-x-1"
            >
              Cultos
            </button>
            <button 
              onClick={() => scrollToSection('events')}
              className="text-white/90 text-left px-3 py-2 rounded-lg hover:bg-white/10 hover:text-white transition-all hover:translate-x-1"
            >
              Eventos
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-white/90 text-left px-3 py-2 rounded-lg hover:bg-white/10 hover:text-white transition-all hover:translate-x-1"
            >
              Contato
            </button>
            <button 
              onClick={() => window.location.href = '/sobre'}
              className="text-white/90 text-left px-3 py-2 rounded-lg hover:bg-white/10 hover:text-white transition-all hover:translate-x-1"
            >
              Conhecer nossa história
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;