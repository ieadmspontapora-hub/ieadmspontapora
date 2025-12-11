import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Seção de Chamada para Ação */}
        <section className="py-16 px-4 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Junte-se a Nossa História
            </h2>
            <p className="text-xl mb-8">
              Descubra nossa jornada, missão e os valores que nos unem como comunidade.
            </p>
          </div>
        </section>

        {/* Conteúdo da página */}
        <div className="container mx-auto px-4 py-12">
          <div className="mb-8">
            <Button 
              onClick={() => navigate('/')}
              variant="outline"
              className="mb-6 bg-gradient-to-r from-blue-900 to-blue-700 text-white hover:from-blue-800 hover:to-blue-600 border-none"
            >
              <ArrowLeft className="mr-2" size={16} />
              Voltar para o início
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;