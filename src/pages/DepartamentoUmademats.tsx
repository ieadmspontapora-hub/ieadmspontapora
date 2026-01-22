import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function DepartamentoUmademats() {
  const navigate = useNavigate();

  const camisetas = [
    "https://res.cloudinary.com/dgpsnu8ks/image/upload/v1769100274/Camisa1_n9xv8q.jpg",
    "https://res.cloudinary.com/dgpsnu8ks/image/upload/v1769100281/Camisa2_cvcb3l.jpg",
   
  ];

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

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* HERO */}
        <section className="relative h-[85vh] min-h-[520px] w-full overflow-hidden text-white">
          <img
            src="https://res.cloudinary.com/dapypkcbb/image/upload/v1765831121/UMADEMATS_zfrsfo.png"
            alt="UMADEMATS"
            className="hidden md:block absolute inset-0 w-full h-full object-cover"
          />

          <img
            src="https://res.cloudinary.com/dapypkcbb/image/upload/v1765836155/UMADEMATS_upscayl_5x_upscayl-standard-4x_jibdkd.png"
            alt="UMADEMATS"
            className="md:hidden absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-blue-900/80" />

          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-xl">
              Departamento dos Jovens UMADEMATS
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl drop-shadow-md">
              Jovens que transformam o mundo com a força do Espírito Santo
            </p>
          </div>
        </section>

        {/* VOLTAR */}
        <div className="container mx-auto px-6 mt-8">
          <Button
            onClick={() => navigate("/departamentos")}
            variant="ghost"
            className="flex items-center gap-2 bg-gradient-to-r from-blue-900 to-blue-700 text-white shadow-md"
          >
            <ArrowLeft size={18} />
            Voltar para departamentos
          </Button>
        </div>

        {/* CAMISETAS */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8">
                Camisetas Oficiais – Congresso 2026
              </h2>

              {/* CARROSSEL */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={camisetas[currentIndex]}
                  alt={`Camiseta ${currentIndex + 1}`}
                  onClick={() => {
                    setSelectedImage(camisetas[currentIndex]);
                    setIsModalOpen(true);
                  }}
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
                    className={`w-3 h-3 rounded-full transition ${
                      index === currentIndex
                        ? "bg-blue-700"
                        : "bg-blue-300"
                    }`}
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
        </section>
{/* CONTEÚDO */}
        <section className="container mx-auto px-6 py-20 space-y-16">
          {/* Sobre */}
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="max-w-3xl mx-auto text-center">
  <h2 className="text-3xl font-bold text-blue-900 mb-6">
    O que é o UMADEMATS?
  </h2>

  <div className="prose prose-lg text-gray-700 mx-auto">
    <p>
      O UMADEMATS (União de Mocidade da Assembleia de Deus MS) é o departamento
      de jovens da nossa igreja, dedicado a formar uma geração comprometida com
      Deus, com a igreja e com a sociedade.
    </p>

    <p>
      Nossos jovens são incentivados a desenvolver um relacionamento íntimo
      com Deus, a servir na igreja e a serem agentes de transformação em suas
      comunidades.
    </p>
  </div>
</div>

          </div>

          {/* Valores */}
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              Nossos Valores
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "🙏 Devoção",
                  text: "Buscamos um relacionamento profundo e constante com Deus através da oração, da leitura da Bíblia e da adoração.",
                },
                {
                  title: "🤝 Comunidade",
                  text: "Valorizamos a vida em comunidade, onde os jovens se apoiam, crescem juntos e vivem a fraternidade cristã.",
                },
                {
                  title: "🌟 Missão",
                  text: "Somos chamados para ser luz no mundo, levando o amor de Cristo a todos os lugares.",
                },
                {
                  title: "📚 Discipulado",
                  text: "Investimos na formação de discípulos que conhecem a Palavra de Deus e vivem seus princípios.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-blue-50 p-6 rounded-lg hover:shadow-md transition"
                >
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-700">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Encontros */}
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              Nossos Encontros
            </h2>

            <div className="space-y-6">
              {[
                ["🌙 Cultos de Jovens", "Todos os sábados às 19:00"],
                ["📚 Escola de Líderes", "Formação de jovens líderes"],
                ["🏃‍♂️ Grupos de Discipulado", "Encontros durante a semana"],
                ["🎉 Eventos Especiais", "Acampamentos e conferências"],
              ].map(([title, desc], i) => (
                <div
                  key={i}
                  className="border-l-4 border-blue-500 pl-6"
                >
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">
                    {title}
                  </h3>
                  <p className="text-gray-700">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-lg p-10 text-center shadow-xl">
            <h2 className="text-3xl font-bold mb-4">Junte-se a nós!</h2>
            <p className="text-lg mb-6">
              Faça parte dessa geração que está transformando o mundo.
            </p>
            <Button
              onClick={() => navigate("/contato")}
              className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold px-8"
            >
              Entre em contato
            </Button>
          </div>
        </section>
        {/* MODAL / LIGHTBOX */}
        {isModalOpen && selectedImage && (
          <div className="fixed inset-0 z-[999] flex items-center justify-center">
            <div
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />

            <div className="relative z-10 max-w-5xl w-[90%] max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={selectedImage}
                alt="Camiseta ampliada"
                className="w-full h-full object-contain bg-black"
              />

              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 transition"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
