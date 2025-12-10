import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin } from 'lucide-react';

const EventsSection = () => {
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
    }
  ];

  return (
    <section id="events" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Próximos Eventos
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Participe de nossos eventos especiais e fortaleça sua fé em comunidade.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url('${event.image}')` }}>
                <div className="h-full bg-black bg-opacity-40 flex items-end p-4">
                  <div className="text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar size={16} />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span className="text-sm">{event.time}</span>
                    </div>
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-blue-900">{event.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <div className="flex items-center gap-2 text-gray-600 mb-4">
                  <MapPin size={16} />
                  <span>{event.location}</span>
                </div>
                <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-blue-900">
                  Inscrever-se
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;