import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function DepartamentoUmademats() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero / Header */}
  <section className="relative h-[85vh] min-h-[520px] w-full overflow-hidden text-white">
    
    {/* Imagem Desktop */}
    <img
      src="https://res.cloudinary.com/dapypkcbb/image/upload/v1765831121/UMADEMATS_zfrsfo.png"
      alt="UMADEMATS"
      className="
        hidden md:block
        absolute inset-0
        w-full h-full
        object-cover
      "
    />

    {/* Imagem Mobile */}
    <img
      src="https://res.cloudinary.com/dapypkcbb/image/upload/v1765836155/UMADEMATS_upscayl_5x_upscayl-standard-4x_jibdkd.png"
      alt="UMADEMATS"
      className="
        md:hidden
        absolute inset-0
        w-full h-full
        object-cover
      "
    />

    {/* Overlay / Sombreamento cinematográfico */}
    <div
      className="
        absolute inset-0
        bg-gradient-to-b
        from-black/70
        via-black/40
        to-blue-900/80
      "
    />

    {/* Conteúdo */}
    <div
      className="
        relative z-10
        h-full
        flex flex-col
        items-center
        justify-center
        text-center
        px-6
      "
    >
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-xl">
        Departamento dos Jovens UMADEMATS
      </h1>

      <p className="text-lg md:text-xl text-white/90 max-w-2xl drop-shadow-md">
        Jovens que transformam o mundo com a força do Espírito Santo
      </p>
    </div>

  </section>

        {/* Botão Voltar */}
        <div className="container mx-auto px-6 mt-8">
          <Button
            onClick={() => navigate("/departamentos")}
            variant="ghost"
            className="flex items-center gap-2 bg-gradient-to-r from-blue-900 to-blue-700 text-white shadow-md"
          >
            <ArrowLeft size={18} />
            <span className="hidden sm:inline">Voltar para departamentos</span>
          </Button>
        </div>

        {/* Conteúdo principal */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto space-y-12">
              
              {/* Sobre o UMADEMATS */}
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-blue-900 mb-6">
                  O que é o UMADEMATS?
                </h2>
                <div className="prose prose-lg text-gray-700">
                  <p>
                    O UMADEMATS (União Missionária de Adolescentes e Jovens da Assembleia de Deus de Missões) 
                    é o departamento de jovens da nossa igreja, dedicado a formar uma geração de jovens 
                    comprometidos com Deus, com a igreja e com a sociedade.
                  </p>
                  <p>
                    Nossos jovens são incentivados a desenvolver um relacionamento íntimo com Deus, 
                    a servir na igreja e a serem agentes de transformação em suas comunidades.
                  </p>
                </div>
              </div>

              {/* Valores */}
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-blue-900 mb-6">
                  Nossos Valores
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-blue-900 mb-3">
                      🙏 Devoção
                    </h3>
                    <p className="text-gray-700">
                      Buscamos um relacionamento profundo e constante com Deus através da oração, 
                      da leitura da Bíblia e da adoração.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-blue-900 mb-3">
                      🤝 Comunidade
                    </h3>
                    <p className="text-gray-700">
                      Valorizamos a vida em comunidade, onde os jovens se apoiam, 
                      crescem juntos e vivem a fraternidade cristã.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-blue-900 mb-3">
                      🌟 Missão
                    </h3>
                    <p className="text-gray-700">
                      Somos chamados para ser luz no mundo, levando o amor de Cristo 
                      a todos os lugares através de ações concretas.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-blue-900 mb-3">
                      📚 Discipulado
                    </h3>
                    <p className="text-gray-700">
                      Investimos na formação de discípulos que conhecem a Palavra de Deus 
                      e vivem de acordo com seus princípios.
                    </p>
                  </div>
                </div>
              </div>

              {/* Encontros */}
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-blue-900 mb-6">
                  Nossos Encontros
                </h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-500 pl-6">
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">
                      🌙 Cultos de Jovens
                    </h3>
                    <p className="text-gray-700">
                      Todos os sábados às 19:00, com pregação, música e comunidade.
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-6">
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">
                      📚 Escola de Líderes
                    </h3>
                    <p className="text-gray-700">
                      Formação de jovens líderes para servirem na igreja e na sociedade.
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-6">
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">
                      🏃‍♂️ Grupos de Discipulado
                    </h3>
                    <p className="text-gray-700">
                      Encontros pequenos durante a semana para aprofundar a fé e a amizade.
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-6">
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">
                      🎉 Eventos Especiais
                    </h3>
                    <p className="text-gray-700">
                      Acampamentos, retiros e conferências ao longo do ano.
                    </p>
                  </div>
                </div>
              </div>

              {/* Chamado à Ação */}
              <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-lg p-8 text-center">
                <h2 className="text-3xl font-bold mb-4">
                  Junte-se a nós!
                </h2>
                <p className="text-lg mb-6">
                  Se você é jovem e quer fazer parte desta geração que está transformando o mundo, 
                  venha nos conhecer!
                </p>
                <Button
                  onClick={() => navigate("/contato")}
                  className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold"
                >
                  Entre em contato
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}