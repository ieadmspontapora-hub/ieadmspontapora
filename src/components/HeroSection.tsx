import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  const images = [
    'https://res.cloudinary.com/dapypkcbb/image/upload/v1765923306/Aqui_Jesus_3__upscayl_5x_upscayl-standard-4x_wfoxmn.png',
    'https://res.cloudinary.com/dapypkcbb/image/upload/v1765835587/Peniel_upscayl_5x_upscayl-standard-4x_jvp23g.png',
    'https://res.cloudinary.com/dapypkcbb/image/upload/v1765836155/UMADEMATS_upscayl_5x_upscayl-standard-4x_jibdkd.png',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

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

      {/* OVERLAY CINEMATOGRÁFICO */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />

      {/* CONTEÚDO */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 text-center text-white">
        <span className="uppercase tracking-widest text-xs text-white/70 mb-4">
          UMA COMUNIDADE CRISTÃ
        </span>

        <h1 className="text-3xl font-extrabold leading-tight">
          Uma comunidade viva<br />na presença de Deus
        </h1>

        <p className="mt-4 text-sm text-white/90 max-w-md mx-auto">
          Um lugar de fé, comunhão e transformação para você e sua família.
        </p>

        <div className="mt-8 flex flex-col gap-3">
          <Button
            onClick={() => navigate('/sobre')}
            className="bg-yellow-500 text-blue-900 font-semibold"
          >
            Conheça nossa história
          </Button>

        <Button
  onClick={() => navigate('/Contato')}
  className="border border-white/80 text-white bg-white/10 backdrop-blur hover:bg-white hover:text-blue-900 transition-all"
>
  Fale conosco
</Button>

        </div>

        {/* INDICADORES MINIMAL */}
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
