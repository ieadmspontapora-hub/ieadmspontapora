import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-blue-700">
      {/* Background Image - Desktop */}
      <div 
        className="absolute inset-0 bg-cover bg-center hidden md:block"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
        }}
      ></div>

      {/* Background Image - Mobile */}
      <div 
        className="absolute inset-0 bg-cover bg-center md:hidden"
        style={{
          backgroundImage: "url('/images/Img HeaderSobreCell.png')"
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Bem-vindo à nossa comunidade
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Uma família unida na fé, compartilhando amor, esperança e transformação
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={() => navigate('/sobre')}
            className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold text-lg px-8 py-3"
          >
            Conhecer nossa história
          </Button>
          <Button 
            onClick={() => scrollToSection('contact')}
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-blue-900 font-bold text-lg px-8 py-3"
          >
            Entre em contato
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ArrowRight size={24} />
      </div>
    </section>
  );
};

export default HeroSection;