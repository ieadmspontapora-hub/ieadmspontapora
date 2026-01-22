import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const carouselImagesDesktop = [
  'https://res.cloudinary.com/dapypkcbb/image/upload/v1765830413/Conex%C3%A3oPeniel_upscayl_5x_upscayl-standard-4x_f3kvr8.png',
  'https://res.cloudinary.com/dapypkcbb/image/upload/v1765831121/UMADEMATS_zfrsfo.png',
  'https://res.cloudinary.com/dapypkcbb/image/upload/v1765831497/photo_4956406832864275952_y_upscayl_5x_upscayl-standard-4x_1_iohoyd.png',
  'https://res.cloudinary.com/dapypkcbb/image/upload/v1765831860/photo_5091448636239359565_y_upscayl_5x_upscayl-standard-4x_1_s72vip.png',
];

const carouselImagesMobile = [
  'https://res.cloudinary.com/dapypkcbb/image/upload/v1765923306/Aqui_Jesus_3__upscayl_5x_upscayl-standard-4x_wfoxmn.png',
  'https://res.cloudinary.com/dapypkcbb/image/upload/v1765835587/Peniel_upscayl_5x_upscayl-standard-4x_jvp23g.png',
  'https://res.cloudinary.com/dapypkcbb/image/upload/v1765836155/UMADEMATS_upscayl_5x_upscayl-standard-4x_jibdkd.png',
];

const HeroSection = () => {
  const navigate = useNavigate();

  const [index, setIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  /* 🔁 Detecta resize */
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const images = isDesktop ? carouselImagesDesktop : carouselImagesMobile;

  /* ⏱️ Auto slide */
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* BACKGROUND */}
      {images.map((img, i) => (
        <div
          key={i}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url('${img}')` }}
        />
      ))}

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />

      {/* CONTEÚDO */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 text-center text-white">
        <span className="uppercase tracking-widest text-xs text-white/70 mb-4">
          UMA COMUNIDADE CRISTÃ
        </span>

        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
          Uma comunidade viva
          <br />
          na presença de Deus
        </h1>

        <p className="mt-4 text-sm md:text-lg text-white/90 max-w-xl mx-auto">
          Um lugar de fé, comunhão e transformação para você e sua família.
        </p>

        {/* BOTÕES */}
        <div className="
          mt-8
          flex flex-col
          gap-3
          md:flex-row
          md:justify-center
          md:items-center
        ">
          <Button
            onClick={() => navigate('/sobre')}
            className="bg-yellow-500 text-blue-900 font-semibold px-8"
          >
            Conheça nossa história
          </Button>

          <Button
            onClick={() => navigate('/Contato')}
            className="border border-white/80 text-white bg-white/10 backdrop-blur hover:bg-white hover:text-blue-900 transition-all px-8"
          >
            Fale conosco
          </Button>
        </div>

        {/* INDICADORES */}
        <div className="mt-10 flex justify-center gap-3">
          {images.map((_, i) => (
            <span
              key={i}
              className={`h-1 rounded-full transition-all ${
                i === index ? 'w-8 bg-white' : 'w-3 bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>

      {/* SCROLL */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white animate-bounce">
        <ArrowDown size={20} />
      </div>
    </section>
  );
};

export default HeroSection;
