import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface CamisetaCarouselProps {
  camisetas: string[];
  titulo?: string;
}

export default function CamisetaCarousel({
  camisetas,
  titulo = "Camisetas Oficiais – Congresso 2026",
}: CamisetaCarouselProps) {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % camisetas.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? camisetas.length - 1 : prev - 1
    );
  };

  const openModal = (image: string) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8">
            {titulo}
          </h2>

          {/* CARROSSEL */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <img
              src={camisetas[currentIndex]}
              alt={`Camiseta ${currentIndex + 1}`}
              onClick={() => openModal(camisetas[currentIndex])}
              className="
                w-full
                h-[190px]
                sm:h-[250px]
                md:h-[520px]
                object-cover
                transition-all
                duration-500
                cursor-zoom-in
                hover:scale-[1.01]
                hover:brightness-105
              "
            />

            {/* Overlay (não bloqueia clique) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent pointer-events-none" />

            {/* Controles */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full transition"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full transition"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* INDICADORES */}
          <div className="flex justify-center gap-2 mt-4">
            {camisetas.map((_, index) => (
              <span
                key={index}
                className={`w-3 h-3 rounded-full transition cursor-pointer ${
                  index === currentIndex ? "bg-blue-700" : "bg-blue-300"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>

          {/* CTA */}
          <div className="mt-8">
            <Button
              onClick={() => navigate("/formulario-camisetas")}
              className="px-8 py-6 text-lg bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-blue-900 font-bold rounded-xl shadow-lg"
            >
              Adquirir Camiseta
            </Button>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {isModalOpen && selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={closeModal}
        >
          <div
            className="relative max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()} // evita fechar ao clicar na imagem
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition"
            >
              <X size={24} />
            </button>
            <img
              src={selectedImage}
              alt="Camiseta"
              className="w-full h-auto rounded-xl object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
