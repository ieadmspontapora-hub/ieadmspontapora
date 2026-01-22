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
                className="bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
                onClick={() => navigate("/departamentos/umademats")}
              >
                <div className="md:flex">
                  <div className="md:w-1/3 bg-blue-900 p-8 flex items-center justify-center">
                    <img
                      src="https://res.cloudinary.com/dapypkcbb/image/upload/v1765831121/UMADEMATS_zfrsfo.png"
                      alt="UMADEMATS"
                      className="w-32 h-32 object-contain"
                    />
                  </div>
                  <div className="md:w-2/3 p-8">
                    <h2 className="text-2xl font-bold text-blue-900 mb-4">
                      Departamento dos Jovens UMADEMATS
                    </h2>
                    <p className="text-gray-700 mb-4">
                      Jovens que transformam o mundo com a força do Espírito Santo
                    </p>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                      Conhecer
                    </Button>
                  </div>
                </div>
              </div>

              {/* CIFAD */}
              <div 
                className="bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
                onClick={() => navigate("/departamentos/cifad")}
              >
                <div className="md:flex">
                  <div className="md:w-1/3 bg-blue-900 p-8 flex items-center justify-center">
                    <div className="w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-4xl">👨‍👩‍👧‍👦</span>
                    </div>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <h2 className="text-2xl font-bold text-blue-900 mb-4">
                      CIFAD - Casais e Famílias
                    </h2>
                    <p className="text-gray-700 mb-4">
                      Fortalecendo laços familiares e construindo lares abençoados
                    </p>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
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