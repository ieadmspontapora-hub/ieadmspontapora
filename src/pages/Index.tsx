import React from 'react';
import PrayerRequestCard from '../components/PrayerRequestCard';

const Index = () => {
  return (
    <div>
      {/* Seção de Pedido de Oração - Adicionada no topo */}
      <PrayerRequestCard />
      
      {/* Conteúdo existente da página */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Sobre nossa comunidade
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Somos uma comunidade cristã dedicada a amar a Deus e ao próximo, 
              compartilhando a mensagem do Evangelho e promovendo o amor fraternal.
            </p>
          </div>
          
          {/* Restante do conteúdo existente... */}
        </div>
      </section>
    </div>
  );
};

export default Index;