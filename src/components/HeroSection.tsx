import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const carouselImagesDesktop = [
    'https://res.cloudinary.com/dapypkcbb/image/upload/v1765830413/Conex%C3%A3oPeniel_upscayl_5x_upscayl-standard-4x_f3kvr8.png',
    'https://res.cloudinary.com/dapypkcbb/image/upload/v1765831121/UMADEMATS_zfrsfo.png',
    'https://res.cloudinary.com/dapypkcbb/image/upload/v1765831497/photo_4956406832864275952_y_upscayl_5x_upscayl-standard-4x_1_iohoyd.png',
    'https://res.cloudinary.com/dapypkcbb/image/upload/v1765831860/photo_5091448636239359565_y_upscayl_5x_upscayl-standard-4x_1_s72vip.png'
  ];

  const carouselImagesMobile = [
    'https://res.cloudinary.com/dapypkcbb/image/upload/v1765834808/Peniel_1_dpkruo.png',
    'https://res.cloudinary.com/dapypkcbb/image/upload/v1765831121/UMADEMATS_zfrsfo.png',
    'https://res.cloudinary.com/dapypkcbb/image/upload/v1765833762/cifad_1_koeprq.png',
    'https://res.cloudinary.com/dapypkcbb/image/upload/v1765834555/Aqui_Jesus_gutjxd.png',
  ];

  const isMobile = window.innerWidth < 768;
  const images = isMobile ? carouselImagesMobile : carouselImagesDesktop;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="hero" className="relative h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url('${image}')` }}
          />
        ))}
      </div>

      {/* Gradient overlay (sem blur) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent" />

      {/* Conteúdo */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-6xl px-6 md:px-12">
          <h1 className="text-3xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
            Uma comunidade viva <br />
            na presença de Deus
          </h1>

          <p className="mt-4 max-w-xl text-base md:text-xl text-white/95 drop-shadow-md">
            Um lugar de fé, comunhão e transformação para você e sua família.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button
              onClick={() => navigate('/sobre')}
              className="bg-gradient-to-r from-blue-900 to-blue-700 text-white shadow-lg z-50"
            >
              Conheça nossa história
            </Button>

            <Button
              onClick={() =>
                document
                  .getElementById('contact')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className="bg-white text-blue-900 hover:bg-white/90 font-bold px-7 py-3 shadow-xl"
            >
              Fale conosco
            </Button>
          </div>
        </div>
      </div>

      {/* Indicadores */}
      <div className="absolute bottom-14 left-1/2 -translate-x-1/2 flex gap-2 z-10">
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

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white animate-bounce">
        <ArrowDown size={22} />
      </div>
    </section>
  );
};

export default HeroSection;
