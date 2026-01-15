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
      title: "Retiro Acampadentro",
      date: "16-17 de Fevereiro",
      time: "17:00 - 15:00",
      location: "ACS PMBM MS Ponta Porã",
      description: "Uma noite intensa na presença de Deus. Louvor, palavra, amizade e experiências que fortalecem a fé.",
      image: "https://res.cloudinary.com/dapypkcbb/image/upload/v1765831121/UMADEMATS_zfrsfo.png"
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
  {/* Botão Voltar */}
  <div className="mb-8">
    <Button
      onClick={() => navigate("/")}
      variant="ghost"
      className="flex items-center gap-2 bg-gradient-to-r from-blue-900 to-blue-700 text-white shadow-md"
    >
      <ArrowLeft size={18} />
      <span className="hidden sm:inline">Voltar para o início</span>
    </Button>
  </div>

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