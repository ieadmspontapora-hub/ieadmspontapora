import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array de imagens para o carrossel
  const carouselImages = [
    'https://www.instagram.com/ieadmspontapora/',
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  ];

  // Efeito para trocar imagens automaticamente
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 5000); // Troca a cada 5 segundos

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-blue-700">
      {/* Carrossel de Imagens - Desktop e Mobile */}
      <div className="absolute inset-0 overflow-hidden">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url('${image}')`
            }}
          />
        ))}
      </div>

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

      {/* Indicadores do carrossel (apenas desktop) */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10 hidden md:flex">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-white w-6' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Ir para imagem ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ArrowRight size={24} />
      </div>
    </section>
  );
};

export default HeroSection;