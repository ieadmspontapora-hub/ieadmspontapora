import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function DepartamentoUmademats() {
  const navigate = useNavigate();



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
                ["🌙 Cultos de Jovens", "Todo º3 sábado às 19:00"],
                ["🏃‍♂️ Grupo PENIEL", "Encontro toda sexta as 19:00"],
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
        {/* CTA */}
<div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-lg p-10 text-center shadow-xl">
  <h2 className="text-3xl font-bold mb-4">Junte-se a nós!</h2>
  <p className="text-lg mb-8">
    Faça parte dessa geração que está transformando o mundo.
  </p>

  <div className="flex flex-col sm:flex-row justify-center gap-4">
    
    {/* Botão Secundário */}
    <Button
      onClick={() => window.open(
        "https://wa.me/6791834877?text=Ol%C3%A1!%20%F0%9F%99%8F%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20Umademats.",
        "_blank"
      )}
      variant="outline"
      className="border-white text-black hover:bg-white hover:text-blue-900 font-semibold px-8"
    >
      Entre em contato
    </Button>

    {/* Botão Principal */}
    <Button
      onClick={() => navigate("/formulario-inscrição")}
      className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 shadow-lg hover:scale-105 transition-all duration-300"
    >
      🚀 Inscreva-se
    </Button>

  </div>
</div>
        </section>
        
      </main>

      <Footer />
    </div>
  );
}
