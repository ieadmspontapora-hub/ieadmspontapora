import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const WorshipSchedule = () => {
  const schedule = [
    {
      day: "Domingo",
      time: "09:00 - 11:00",
      service: "Culto de Celebração",
      description: "Culto principal com pregação, adoração e comunhão"
    },
    {
      day: "Quarta-feira",
      time: "19:00 - 20:30",
      service: "Culto de Oração",
      description: "Tempo de intercessão e adoração"
    },
    {
      day: "Sábado",
      time: "16:00 - 18:00",
      service: "Encontro Jovem",
      description: "Ministério para jovens e adolescentes"
    }
  ];

  return (
    <section className="min-h-screen bg-cover bg-center bg-no-repeat"
             style={{
               backgroundImage: "url('/images/img-backgroundpapel.png')",
               backgroundSize: 'cover',
               backgroundPosition: 'center'
             }}>
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Agenda de Cultos
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Junte-se a nós em nossos momentos de adoração, estudo da Palavra 
            e comunhão fraterna.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {schedule.map((item, index) => (
            <Card key={index} className="mb-6">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <CardTitle className="text-2xl text-blue-900">{item.day}</CardTitle>
                    <p className="text-yellow-600 font-semibold text-lg">{item.time}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-blue-900">{item.service}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorshipSchedule;