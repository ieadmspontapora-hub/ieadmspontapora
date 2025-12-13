import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import LeadershipSection from "@/components/LeadershipSection";
import WorshipSchedule from "@/components/WorshipSchedule";
import EventsSection from "@/components/EventsSection";
import PrayerRequestCard from "@/components/PrayerRequestCard";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ComunidadePage from "./ComunidadePage";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        
        {/* Seção principal organizada */}
        <section className="relative">
          <div className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                Nossa Comunidade
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Descubra mais sobre nossa missão, valores e como fazer parte desta família
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              {/* Sobre */}
              <div className="space-y-8">
                <div className="bg-white bg-opacity-90 rounded-2xl p-8 shadow-lg">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl text-white">🎯</span>
                    </div>
                    <h3 className="text-2xl font-bold text-blue-900 mb-3">Missão</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Amar a Deus de todo coração, amar ao próximo como a nós mesmos, 
                      e fazer discípulos de todas as nações.
                    </p>
                  </div>
                </div>

                <div className="bg-white bg-opacity-90 rounded-2xl p-8 shadow-lg">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl text-white">👁️</span>
                    </div>
                    <h3 className="text-2xl font-bold text-blue-900 mb-3">Visão</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Ser uma comunidade transformadora que reflete a glória de Deus 
                      e impacta positivamente o mundo ao nosso redor.
                    </p>
                  </div>
                </div>

                <div className="bg-white bg-opacity-90 rounded-2xl p-8 shadow-lg">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl text-white">💎</span>
                    </div>
                    <h3 className="text-2xl font-bold text-blue-900 mb-3">Valores</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Fé, amor, unidade, integridade, excelência e serviço 
                      como pilares de nossa comunidade.
                    </p>
                  </div>
                </div>
              </div>

              {/* Agenda */}
              <div>
                <div className="bg-white bg-opacity-90 rounded-2xl p-8 shadow-lg mb-8">
                  <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">Agenda de Cultos</h3>
                  
                  <div className="space-y-4">
                    <div className="bg-blue-50 rounded-xl p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                          <h4 className="text-xl font-bold text-blue-900">Domingo</h4>
                          <p className="text-yellow-600 font-semibold text-lg">09:00 - 11:00</p>
                        </div>
                        <div className="text-right mt-2 md:mt-0">
                          <p className="text-lg font-bold text-blue-900">Culto de Celebração</p>
                          <p className="text-gray-600">Culto principal com pregação, adoração e comunhão</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 rounded-xl p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                          <h4 className="text-xl font-bold text-blue-900">Quarta-feira</h4>
                          <p className="text-yellow-600 font-semibold text-lg">19:00 - 20:30</p>
                        </div>
                        <div className="text-right mt-2 md:mt-0">
                          <p className="text-lg font-bold text-blue-900">Culto de Oração</p>
                          <p className="text-gray-600">Tempo de intercessão e adoração</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 rounded-xl p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                          <h4 className="text-xl font-bold text-blue-900">Sábado</h4>
                          <p className="text-yellow-600 font-semibold text-lg">16:00 - 18:00</p>
                        </div>
                        <div className="text-right mt-2 md:mt-0">
                          <p className="text-lg font-bold text-blue-900">Encontro Jovem</p>
                          <p className="text-gray-600">Ministério para jovens e adolescentes</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Liderança */}
                <div className="bg-white bg-opacity-90 rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">Nossa Liderança</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                        <img 
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                          alt="Liderança"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="font-bold text-blue-900">Pastor João Silva</h4>
                      <p className="text-yellow-600 text-sm">Líder Principal</p>
                    </div>
                    <div className="text-center">
                      <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                        <img 
                          src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                          alt="Liderança"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="font-bold text-blue-900">Maria Santos</h4>
                      <p className="text-yellow-600 text-sm">Líder de Louvor</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Seção de Eventos */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                  Próximos Eventos
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Participe de nossos eventos especiais e fortaleça sua fé em comunidade
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white bg-opacity-90 rounded-2xl overflow-hidden shadow-lg">
                  <div className="h-48 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')" }}>
                    <div className="h-full bg-black bg-opacity-40 flex items-end p-4">
                      <div className="text-white">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-sm">15-17 de Março</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm">18:00 - 17:00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-2">Retiro Espiritual 2024</h3>
                    <p className="text-gray-600 mb-4">Um tempo de renovação espiritual e comunhão intensa com Deus.</p>
                    <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-2 px-4 rounded-lg transition-colors">
                      Inscrever-se
                    </button>
                  </div>
                </div>

                <div className="bg-white bg-opacity-90 rounded-2xl overflow-hidden shadow-lg">
                  <div className="h-48 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')" }}>
                    <div className="h-full bg-black bg-opacity-40 flex items-end p-4">
                      <div className="text-white">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-sm">22 de Março</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm">09:00 - 17:00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-2">Conferência de Família</h3>
                    <p className="text-gray-600 mb-4">Um dia especial para fortalecer laços familiares na fé.</p>
                    <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-2 px-4 rounded-lg transition-colors">
                      Inscrever-se
                    </button>
                  </div>
                </div>

                <div className="bg-white bg-opacity-90 rounded-2xl overflow-hidden shadow-lg">
                  <div className="h-48 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')" }}>
                    <div className="h-full bg-black bg-opacity-40 flex items-end p-4">
                      <div className="text-white">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-sm">29 de Março</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm">10:00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-2">Batismos</h3>
                    <p className="text-gray-600 mb-4">Celebração da fé pública através do batismo.</p>
                    <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-2 px-4 rounded-lg transition-colors">
                      Inscrever-se
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Seção de Contato e Pedido de Oração */}
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contato */}
              <div className="bg-white bg-opacity-90 rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-blue-900 mb-6">Entre em Contato</h3>
                <form className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="Seu Nome" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
                  />
                  <input 
                    type="email" 
                    placeholder="Seu E-mail" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
                  />
                  <input 
                    type="tel" 
                    placeholder="Seu Telefone" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
                  />
                  <textarea 
                    placeholder="Sua Mensagem" 
                    rows="4"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 resize-none"
                  ></textarea>
                  <button 
                    type="submit"
                    className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                  >
                    Enviar Mensagem
                  </button>
                </form>
              </div>

              {/* Pedido de Oração */}
              <div className="bg-white bg-opacity-90 rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-2">
                  <span>🙏</span> Pedido de Oração
                </h3>
                <form className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="Nome completo" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
                  />
                  <input 
                    type="tel" 
                    placeholder="Celular / WhatsApp" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
                  />
                  <input 
                    type="email" 
                    placeholder="E-mail" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
                  />
                  <textarea 
                    placeholder="Escreva seu pedido de oração" 
                    rows="4"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 resize-none"
                  ></textarea>
                  <button 
                    type="submit"
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-6 rounded-lg transition-colors"
                  >
                    Enviar Pedido
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;