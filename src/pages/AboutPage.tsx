import { Card, CardContent } from '@/components/ui/card';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Seção História Principal */}
      <section 
        className="py-16 px-4 relative bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url('/images/background Papel.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Nossa História
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Uma jornada de fé, amor e transformação que começou com um sonho
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <Card className="p-8">
                <CardContent>
                  <h2 className="text-2xl font-bold text-blue-900 mb-4">
                    O Início de Tudo
                  </h2>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Há mais de 20 anos, um pequeno grupo de crentes se reuniu com um sonho em comum: 
                    criar uma comunidade onde o amor de Deus pudesse ser compartilhado de forma autêntica 
                    e transformadora.
                  </p>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Começamos em um salão alugado, com apenas 15 pessoas, mas com uma fé inabalável 
                    e um propósito claro: amar a Deus e ao próximo.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="p-8">
                <CardContent>
                  <h2 className="text-2xl font-bold text-blue-900 mb-4">
                    Crescimento e Transformação
                  </h2>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Ao longo dos anos, Deus tem abençoado nossa comunidade de forma extraordinária. 
                    O que começou como um sonho pequeno cresceu para se tornar uma família vibrante 
                    e diversificada.
                  </p>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Hoje, somos centenas de pessoas unidas pela mesma fé, comprometidas em 
                    compartilhar o amor de Cristo com nosso bairro e cidade.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Valores */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Nossos Valores Fundamentais
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Os princípios que guiam nossa comunidade e definem quem somos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🙏</span>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Fé</h3>
                <p className="text-gray-600">
                  Acreditamos no poder transformador da fé em Jesus Cristo e na 
                  importância de uma relação pessoal com Deus.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">❤️</span>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Amor</h3>
                <p className="text-gray-600">
                  Amor incondicional uns pelos outros, refletindo o amor de Deus 
                  em todas as nossas relações e ações.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🤝</span>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Unidade</h3>
                <p className="text-gray-600">
                  Estar unidos como um corpo em Cristo, valorizando a diversidade 
                  e trabalhando juntos para o bem comum.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;