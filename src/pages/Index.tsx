import { useEffect, useState, useRef } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ContributionCard from "@/components/ui/ContributionCard";
import NossaIgrejaCard from "@/components/NossaIgrejaCard";
import Footer from "@/components/Footer";
import PrayerRequestCard from "@/components/PrayerRequestCard";
import CamisetaCarousel from "@/components/CamisetaCarousel";

const Index = () => {
  const camisetas = [
    "https://res.cloudinary.com/dgpsnu8ks/image/upload/v1769100274/Camisa1_n9xv8q.jpg",
    "https://res.cloudinary.com/dgpsnu8ks/image/upload/v1769100281/Camisa2_cvcb3l.jpg",
  ];

  const [showToast, setShowToast] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Mostra o toast quando entra na página
  useEffect(() => {
    const timer = setTimeout(() => setShowToast(true), 1000); // 1s depois de carregar
    return () => clearTimeout(timer);
  }, []);

  // Rola até o carrossel
  const scrollToCarousel = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollIntoView({ behavior: "smooth" });
      setShowToast(false);
    }
  };

  return (
    <div
      className="min-h-screen bg-no-repeat relative"
      style={{
        backgroundImage: "url('/images/img-backgroundPapelCell.png')",
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundAttachment: "fixed",
      }}
    >
      {/* overlay suave */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-[1px]" />

      <div className="relative z-10">
        <Header />
        <main>
          <HeroSection />

   {/* TOAST DE NOTIFICAÇÃO RESPONSIVO */}
{showToast && (
  <div
    className="
      fixed top-4 left-1/2 transform -translate-x-1/2 z-50
      max-w-sm w-[90%] p-4 rounded-xl flex items-center justify-between gap-4
      bg-white/30 backdrop-blur-md border border-white/40 shadow-lg
      animate-slide-down
      md:animate-slide-in md:bottom-6 md:top-auto
    "
  >
    <span className="flex-1 mr-2 text-sm sm:text-base font-medium text-gray-900 drop-shadow-sm">
      🎉 Confira as camisetas do Congresso 2026!
    </span>
    <div className="flex gap-2">
      <button
        onClick={scrollToCarousel}
        className="bg-blue-900 text-white px-3 py-1 rounded-lg hover:bg-blue-700 transition text-sm font-semibold shadow-md"
      >
        Conferir
      </button>
      <button
        onClick={() => setShowToast(false)}
        className="text-gray-900 font-bold px-2 py-1 rounded hover:bg-black/10 transition shadow-sm"
        aria-label="Fechar"
      >
        ✕
      </button>
    </div>
  </div>
)}


          {/* CARROSSEL */}
          <div ref={carouselRef}>
            <CamisetaCarousel camisetas={camisetas} />
          </div>

          <NossaIgrejaCard />
          <ContributionCard />
          <PrayerRequestCard />
        </main>
        <Footer />
      </div>

      {/* animação simples */}
      <style>
        {`
          @keyframes slide-in {
            0% { transform: translateY(100%) translateX(-50%); opacity: 0; }
            100% { transform: translateY(0) translateX(-50%); opacity: 1; }
          }
          .animate-slide-in {
            animation: slide-in 0.5s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
};

export default Index;
