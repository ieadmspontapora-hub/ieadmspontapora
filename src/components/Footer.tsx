import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

type MenuItem = {
  label: string;
  href: string;
};

const menuItems: MenuItem[] = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Redes Sociais", href: "/redes-sociais" },
  { label: "Cultos", href: "/cultos" },
  { label: "Eventos", href: "/eventos" },
  { label: "Contato", href: "/contato" },
];
const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">

          {/* Logo e Descrição */}
          <div>
            <h3 className="text-2xl font-bold mb-4">IEADMS PP</h3>
            <p className="text-blue-200 mb-4">
              Uma comunidade unida na fé, compartilhando amor, esperança e transformação.
            </p>

            <div className="flex space-x-4">
              <a href="https://www.facebook.com/people/IEADMS-PONTA-POR%25C3%2583/61571917247703/?mibextid=wwXIfr&rdid=E7PrzUbOJRUVetHv&share_url=https%253A%252F%252Fwww.facebook.com%252Fshare%252F1AGCoFAV34%252F%253Fmibextid%253DwwXIfr" className="text-blue-200 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/ieadmspontapora/" className="text-blue-200 hover:text-white">
                <Instagram size={20} />
              </a>
              
            </div>
          </div>

          {/* Links Rápidos (MESMO MENU DO HEADER) */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {menuItems.map(item => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3 text-blue-200">
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>(67) 9928-0204</span>
              </div>

              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>ieadmspontapora@gmail.com</span>
              </div>

              <div className="flex items-start gap-2">
                <MapPin size={16} />
                <span>
                  R. Rafael B. Teixeira, 1118 - Santa Isabel<br />
                  Ponta Porã - MS, 79900-000
                </span>
              </div>
            </div>
          </div>

          {/* Horários */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Horários</h4>
            <div className="space-y-2 text-blue-200">
              <p>Domingo: 19:00 - 20:30</p>
              <p>Terça: 19:30 - 21:00</p>
              <p>Sábado: 19:00 - 21:00</p>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p className="text-blue-200">
            © {new Date().getFullYear()} IEADMS PP. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
