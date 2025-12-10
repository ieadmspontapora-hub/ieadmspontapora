import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Users, Award, Heart, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AboutPage = () => {
  const navigate = useNavigate();

  const milestones = [
    {
      year: "1972",
      event: "Fundação da IEADMS",
      description: "Fundação pelos Pastores Eliseu Feitosa de Alencar e Dulcila Araújo de Alencar",
      icon: <Calendar className="w-8 h-8 text-yellow-500" />
    },
    {
      year: "1980",
      event: "Expansão do Ministério",
      description: "Início de novos trabalhos em diferentes regiões de MS",
      icon: <Users className="w-8 h-8 text-blue-500" />
    },
    {
      year: "1995",
      event: "Construção do Templo Principal",
      description: "Conclusão do nosso maior templo com capacidade para 2.000 pessoas",
      icon: <Award className="w-8 h-8 text-green-500" />
    },
    {
      year: "2022",
      event: "50 Anos de Ministério",
      description: "Celebração de meio século de história e transformação",
      icon: <Heart className="w-8 h-8 text-red-500" />
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Seção Hero com título */}
        <section className="relative py-20 px-4 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="relative z-10 max-w-6xl mx-auto text-center">
            <div className="mb-8">
              <Button 
                onClick={() => navigate('/')}
                variant="outline"
                className="mb-6 border-white text-white hover:bg-white hover:text-blue-900"
              >
                <ArrowLeft className="mr-2" size={16} />
                Voltar para o início
              </Button>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Nossa História
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Cinco décadas de fé, amor e transformação
            </p>
          </div>
        </section>

        {/* Seção História Principal */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                  A Origem da IEADMS
                </h2>
                <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
              </div>
              
              <p className="text-lg leading-relaxed mb-8 text-gray-700">
                Nossa igreja "IEADMS" – Igreja Evangélica Assembleia de Deus de Mato Grosso do Sul foi fundado no dia 6 de dezembro de 1972, pelos Pastor Eliseu Feitosa de Alencar e a Pastora Dulcila Araújo de Alencar. Com a missão de cumprir a ordem primordial de Cristo – pregar o Evangelho.
              </p>
              
              <p className="text-lg leading-relaxed mb-8 text-gray-700">
                Uma igreja voltada para o século XXI, e, nesta visão de futuro, propõe-se a apresentar verdadeiramente Deus aqui na terra. 
              </p>
              
              <div className="bg-blue-50 border-l-4 border-blue-900 p-6 mb-8">
                <p className="text-lg leading-relaxed text-gray-700">
                  Por isso, esta igreja, além de incentivar a leitura da palavra de Deus, a oração e a evangelização, busca também dar oportunidade a tantos quantos queiram vir serrar fileiras neste exército de milhares de fiéis que, por cinco décadas, faz parte desta igreja vitoriosa, dando provas cabais de que a promessa de Cristo à igreja é real ao dizer que as <span className="font-bold text-blue-900">PORTAS DO INFERNO NÃO PREVALECERIAM CONTRA ELA</span>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Seção de Marcos Históricos */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                Marcos Históricos
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Principais momentos que marcaram nossa trajetória
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {milestones.map((milestone, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      {milestone.icon}
                    </div>
                    <div className="text-2xl font-bold text-blue-900 mb-2">
                      {milestone.year}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">
                      {milestone.event}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {milestone.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Seção Valores */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                Nossos Valores Fundamentais
              </h2>
              <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">Amor a Deus</h3>
                  <p className="text-gray-600">
                    Buscamos amar a Deus de todo o coração, com toda a nossa alma e com toda a nossa mente.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">Unidade</h3>
                  <p className="text-gray-600">
                    Valorizamos a unidade do corpo de Cristo e a comunhão entre os irmãos.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">Excelência</h3>
                  <p className="text-gray-600">
                    Oferecemos o melhor de nós mesmos em tudo o que fazemos, para glória de Deus.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Seção de Chamada para Ação */}
        <section className="py-16 px-4 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Junte-se a Nossa História
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Faça parte desta comunidade que transforma vidas através do poder do Evangelho
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => navigate('/#contact')}
                className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold text-lg px-8 py-3"
              >
                Entre em Contato
              </Button>
              <Button 
                onClick={() => navigate('/#events')}
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900 font-bold text-lg px-8 py-3"
              >
                Ver Eventos
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;