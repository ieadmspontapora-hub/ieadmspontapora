import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

type MenuItem = {
  label: string;
  href?: string;
  children?: {
    label: string;
    href: string;
  }[];
};

const menuItems: MenuItem[] = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Redes Sociais", href: "/redes-sociais" },
  { label: "Cultos", href: "/cultos" },

  {
    label: "Departamentos",
    children: [
      { label: "UMADEMATS", href: "/departamentos/umademats" },
      { label: "CIFAD", href: "/departamentos/cifad" },
    ],
  },

  { label: "Eventos", href: "/eventos" },
  { label: "Contato", href: "/contato" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDepartmentsOpen, setIsDepartmentsOpen] = useState(false);


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
              IEADMS PP
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 backdrop-blur-md">
  {menuItems.map(item =>
    item.children ? (
      <div key={item.label} className="relative group">
        <span
          className="
            cursor-pointer
            text-white/90 
            px-4 py-2 
            rounded-xl 
            font-medium 
            transition-all 
            duration-300 
            hover:text-white 
            hover:bg-white/10
          "
        >
          {item.label}
        </span>

        {/* Dropdown */}
        <div
          className="
            absolute left-0 top-full mt-2
            min-w-[180px]
            bg-blue-800/90
            backdrop-blur-md
            rounded-xl
            shadow-lg
            opacity-0
            invisible
            group-hover:opacity-100
            group-hover:visible
            transition-all
            duration-300
          "
        >
          {item.children.map(sub => (
            <Link
              key={sub.label}
              to={sub.href}
              className="
                block
                px-4 py-3
                text-white/90
                hover:bg-white/10
                hover:text-white
                transition
              "
            >
              {sub.label}
            </Link>
          ))}
        </div>
      </div>
    ) : (
      <Link
        key={item.label}
        to={item.href!}
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
    )
  )}
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
  {menuItems.map(item =>
    item.children ? (
      <div key={item.label}>
        <button
          onClick={() => setIsDepartmentsOpen(!isDepartmentsOpen)}
          className="
            w-full text-left
            text-white/90 
            px-3 py-2 
            rounded-lg 
            font-medium
            hover:bg-white/10 
            transition-all
          "
        >
          {item.label}
        </button>

        {isDepartmentsOpen && (
          <div className="ml-4 mt-2 flex flex-col space-y-2">
            {item.children.map(sub => (
              <Link
                key={sub.label}
                to={sub.href}
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsDepartmentsOpen(false);
                }}
                className="
                  text-white/80 
                  px-3 py-2 
                  rounded-lg 
                  hover:bg-white/10
                  transition
                "
              >
                {sub.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    ) : (
      <Link
        key={item.label}
        to={item.href!}
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
    )
  )}
</div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;