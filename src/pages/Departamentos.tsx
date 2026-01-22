import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Departamentos() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Seção Hero */}
        <section className="relative py-24 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
          <div className="container mx-auto px-6 text-center max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              Departamentos
            </h1>
            <p className="text-lg text-white/90">
              Conheça nossos departamentos e ministries
            </p>
          </div>
        </section>

        {/* Botão Voltar */}
        <div className="container mx-auto px-6 mt-8">
          <Button
            onClick={() => navigate("/")}
            variant="ghost"
            className="flex items-center gap-2 bg-gradient-to-r from-blue-900 to-blue-700 text-white shadow-md"
          >
            <ArrowLeft size={18} />
            <span className="hidden sm:inline">Voltar para início</span>
          </Button>
        </div>

        {/* Conteúdo */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto space-y-8">
              
             {/* UMADEMATS */}
<div
  onClick={() => navigate("/departamentos/umademats")}
  className="relative h-72 md:h-80 rounded-xl overflow-hidden shadow-lg cursor-pointer group"
>
  {/* Imagem de fundo */}
  <img
    src="https://res.cloudinary.com/dapypkcbb/image/upload/v1765831121/UMADEMATS_zfrsfo.png"
    alt="UMADEMATS"
    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/60 to-blue-900/20" />

  {/* Conteúdo */}
  <div className="relative z-10 h-full flex flex-col justify-end p-8 text-white">
    <h2 className="text-3xl font-extrabold mb-2">
      UMADEMATS
    </h2>
    <p className="text-white/90 mb-4 max-w-md">
      Jovens que transformam o mundo com a força do Espírito Santo
    </p>

    <div>
      <Button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold">
        Conhecer
      </Button>
    </div>
  </div>
</div>


             {/* CIFAD */}
<div
  onClick={() => navigate("/departamentos/cifad")}
  className="relative h-72 md:h-80 rounded-xl overflow-hidden shadow-lg cursor-pointer group"
>
  {/* 🔽 IMAGEM DE FUNDO — COLOQUE SUA URL AQUI */}
  <img
    src="https://res.cloudinary.com/dapypkcbb/image/upload/v1765831497/photo_4956406832864275952_y_upscayl_5x_upscayl-standard-4x_1_iohoyd.png"
    alt="CIFAD"
    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/60 to-blue-900/20" />

  {/* Conteúdo */}
  <div className="relative z-10 h-full flex flex-col justify-end p-8 text-white">
    <h2 className="text-3xl font-extrabold mb-2">
      CIFAD
    </h2>
    <p className="text-white/90 mb-4 max-w-md">
      Mulheres e famílias unidas em oração, buscando a presença de Deus, clamando por vidas, lares e pela igreja, crendo no poder transformador da oração.
    </p>

    <div>
      <Button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold">
        Conhecer
      </Button>
    </div>
  </div>
</div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}