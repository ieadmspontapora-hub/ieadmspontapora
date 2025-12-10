import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Igreja</h3>
            <p className="text-blue-200 mb-4">
              Uma comunidade unida na fé, compartilhando amor, esperança e transformação.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-blue-200 hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#leadership" className="text-blue-200 hover:text-white transition-colors">Liderança</a></li>
              <li><a href="#worship" className="text-blue-200 hover:text-white transition-colors">Cultos</a></li>
              <li><a href="#events" className="text-blue-200 hover:text-white transition-colors">Eventos</a></li>
              <li><a href="#contact" className="text-blue-200 hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span className="text-blue-200">(11) 1234-5678</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span className="text-blue-200">contato@igreja.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span className="text-blue-200">Rua da Igreja, 123<br />São Paulo, SP</span>
              </div>
            </div>
          </div>

          {/* Horários */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Horários</h4>
            <div className="space-y-2 text-blue-200">
              <p>Domingo: 09:00 - 11:00</p>
              <p>Quarta: 19:00 - 20:30</p>
              <p>Sábado: 16:00 - 18:00</p>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p className="text-blue-200">
            © 2024 Igreja. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;