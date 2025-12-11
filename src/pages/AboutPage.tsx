import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Botão de voltar */}
      <div className="mb-8">
        <Button 
          onClick={() => navigate('/')}
          variant="outline"
          className="mb-6 bg-gradient-to-r from-blue-900 to-blue-700 text-white border-transparent hover:from-blue-800 hover:to-blue-600"
        >
          <ArrowLeft className="mr-2" size={16} />
          Voltar para o início
        </Button>
      </div>

      {/* Conteúdo da página Sobre */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Sobre Nossa Comunidade
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Somos uma família de crentes dedicada a amar a Deus e ao próximo, 
              transformando vidas através do poder do Evangelho.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Missão</h3>
              <p className="text-gray-600">
                Amar a Deus de todo coração, amar ao próximo como a nós mesmos, 
                e fazer discípulos de todas as nações.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">👁️</span>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Visão</h3>
              <p className="text-gray-600">
                Ser uma comunidade transformadora que reflete a glória de Deus 
                e impacta positivamente o mundo ao nosso redor.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">💎</span>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Valores</h3>
              <p className="text-gray-600">
                Fé, amor, unidade, integridade, excelência e serviço 
                como pilares de nossa comunidade.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;