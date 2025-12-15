import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // 🔹 IMAGENS DESKTOP
  const carouselImagesDesktop = [
    'https://res.cloudinary.com/dapypkcbb/image/upload/v1765830413/Conex%C3%A3oPeniel_upscayl_5x_upscayl-standard-4x_f3kvr8.png',
    'https://res.cloudinary.com/dapypkcbb/image/upload/v1765831121/UMADEMATS_zfrsfo.png',
    'https://res.cloudinary.com/dapypkcbb/image/upload/v1765831497/photo_4956406832864275952_y_upscayl_5x_upscayl-standard-4x_1_iohoyd.png',
    'https://res.cloudinary.com/dapypkcbb/image/upload/v1765831860/photo_5091448636239359565_y_upscayl_5x_upscayl-standard-4x_1_s72vip.png'
  ];

  // 🔹 IMAGENS MOBILE (9:16)
  const carouselImagesMobile = [
    'LINK_DA_IMAGEM_MOBILE_1',
    'LINK_DA_IMAGEM_MOBILE_2',
    'LINK_DA_IMAGEM_MOBILE_3',
  ];

  const isMobile = window.innerWidth < 768;
  const images = isMobile ? carouselImagesMobile : carouselImagesDesktop;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ================= DESKTOP ================= */}
      <div className="absolute inset-0 hidden md:block">
        {carouselImagesDesktop.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url('${image}')` }}
          />
        ))}
      </div>

      {/* ================= MOBILE ================= */}
      <div className="absolute inset-0 md:hidden">
        {carouselImagesMobile.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url('${image}')` }}
          />
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45"></div>

      {/* Conteúdo */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl">
        <h1 className="text-3xl md:text-6xl font-bold mb-6">
          Bem-vindo à nossa comunidade
        </h1>

        <p className="text-lg md:text-2xl mb-8">
          Uma família unida na fé, compartilhando amor, esperança e transformação
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => navigate('/sobre')}
            className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold px-8 py-3"
          >
            Conhecer nossa história
          </Button>

          <Button
            onClick={() => scrollToSection('contact')}
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-blue-900 font-bold px-8 py-3"
          >
            Entre em contato
          </Button>
        </div>
      </div>

      {/* Indicadores */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentImageIndex
                ? 'w-6 bg-white'
                : 'w-2 bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Scroll */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white animate-bounce">
        <ArrowRight size={24} />
      </div>
    </section>
  );
};

export default HeroSection;
