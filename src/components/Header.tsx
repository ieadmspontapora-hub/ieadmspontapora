import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

type MenuItem = {
  label: string;
  href: string;
};

const menuItems: MenuItem[] = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Liderança", href: "/lideranca" },
  { label: "Cultos", href: "/cultos" },
  { label: "Eventos", href: "/eventos" },
  { label: "Contato", href: "/contato" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-gradient-to-r from-blue-900 to-blue-700 text-white shadow-lg z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo + Nome */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/images/img-Logo-IEADMS.png"
              alt="IEADMS Logo"
              className="h-10 w-auto object-contain"
            />
            <span className="text-white text-xl font-bold">
              IEADMS
            </span>
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
              rounded-xl 
              bg-white/10 
              hover:bg-white/20 
              transition-all 
              duration-300
            "
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav
            className="
              md:hidden 
              mt-3 mb-6 
              py-4
              border border-white/10 
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
                    px-3 py-2 
                    rounded-lg 
                    font-medium
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
