import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EventCard from "@/components/EventCard";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Eventos() {
  const navigate = useNavigate();

  const events = [
    {
      title: "Retiro Espiritual 2024",
      date: "15-17 de Março",
      time: "18:00 - 17:00",
      location: "Centro de Eventos da Igreja",
      description: "Um tempo de renovação espiritual e comunhão intensa com Deus.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Conferência de Família",
      date: "22 de Março",
      time: "09:00 - 17:00",
      location: "Auditório Principal",
      description: "Um dia especial para fortalecer laços familiares na fé.",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      title: "Batismos",
      date: "29 de Março",
      time: "10:00",
      location: "Piscina da Igreja",
      description: "Celebração da fé pública através do batismo.",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      title: "Jantar de Oração",
      date: "05 de Abril",
      time: "19:00",
      location: "Salão Principal",
      description: "Jantar especial de intercessão e comunhão.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      title: "Acampamento de Jovens",
      date: "12-14 de Abril",
      time: "18:00 - 12:00",
      location: "Campo de Férias",
      description: "Três dias de pura adoração e comunhão jovem.",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      title: "Festival de Louvor",
      date: "19 de Abril",
      time: "20:00",
      location: "Estádio Municipal",
      description: "Noite de adoração com convidados especiais.",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Seção Hero */}
        <section className="relative py-24 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
          <div className="container mx-auto px-6 text-center max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              Próximos Eventos
            </h1>
            <p className="text-lg text-white/90">
              Participe de nossos eventos especiais e fortaleça sua fé em comunidade.
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
            <span className="hidden sm:inline">Voltar para o início</span>
          </Button>
        </div>

        {/* Conteúdo com papel amassado */}
        <section
          className="relative py-16"
          style={{
            backgroundImage: "url('/images/img-backgroundPapelCell.png')",
            backgroundRepeat: "repeat",
            backgroundSize: "600px",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-white/80"></div>

          <div className="relative container mx-auto px-6">
            {/* Grid de eventos */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {events.map((event, index) => (
                <EventCard
                  key={index}
                  title={event.title}
                  date={event.date}
                  time={event.time}
                  location={event.location}
                  description={event.description}
                  image={event.image}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}