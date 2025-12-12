import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

type MenuItem = {
  label: string;
  href: string;
};

const menuItems: MenuItem[] = [
  { label: 'Início', href: "/" },
  { label: 'Sobre', href: "/sobre" },
  { label: 'Liderança', href: "/lideranca" },
  { label: 'Cultos', href: "/cultos" },
  { label: 'Eventos', href: "/eventos" },
  { label: 'Contato', href: "/contato" }
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-gradient-to-r from-blue-900 to-blue-700 text-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/images/img-Logo-IEADMS.png" 
              alt="IEADMS Logo"
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 backdrop-blur-md">
            {menuItems.map(item => (
              <Link
                key={item.label}
                to={item.href}
                className="
                  text-white/90 
                  px-4 py-2 
                  rounded-xl 
                  font-medium 
                  transition-all 
                  duration-300 
                  hover:text-white 
                  hover:bg-white/10 
                  hover:scale-105
                "
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="
              md:hidden 
              text-white 
              p-2 
              rounded-lg 
              hover:bg-white/10 
              transition-all 
              duration-200
            "
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav 
            className="
              md:hidden 
              py-4 mt-2 mb-6
              border-t border-white/10 
              bg-white/10 
              backdrop-blur-md 
              rounded-2xl 
              shadow-[0_8px_24px_rgba(0,0,0,0.35)]
              animate-slideDown
            "
          >
            <div className="flex flex-col space-y-3 px-4">
              {menuItems.map(item => (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="
                    text-white/90 
                    text-left 
                    px-3 py-2 
                    rounded-lg 
                    hover:bg-white/10 
                    hover:text-white 
                    transition-all 
                    hover:translate-x-1
                  "
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
