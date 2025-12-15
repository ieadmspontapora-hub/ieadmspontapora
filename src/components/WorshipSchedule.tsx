"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const WorshipSchedule = () => {
  const schedule = [
    {
      day: "Domingo",
      time: "09:00 - 11:00",
      service: "Culto de Celebração",
      description: "Culto principal com pregação, adoração e comunhão",
    },
    {
      day: "Quarta-feira",
      time: "19:00 - 20:30",
      service: "Culto de Oração",
      description: "Tempo de intercessão e adoração",
    },
    {
      day: "Sábado",
      time: "16:00 - 18:00",
      service: "Encontro Jovem",
      description: "Ministério para jovens e adolescentes",
    },
  ];

  return (
    <section className="py-20 bg-transparent">
      <div className="container mx-auto px-4">

        {/* TÍTULO */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-4">
            Agenda de Cultos
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Junte-se a nós em nossos momentos de adoração, estudo da Palavra
            e comunhão fraterna.
          </p>
        </div>

        {/* LISTA */}
        <div className="max-w-4xl mx-auto space-y-6">
          {schedule.map((item, index) => (
            <Card
              key={index}
              className="
                rounded-3xl
                border border-white/20
                bg-white/10
                backdrop-blur-xl
                shadow-2xl
              "
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl text-blue-900">
                      {item.day}
                    </CardTitle>
                    <p className="text-yellow-600 font-semibold text-lg">
                      {item.time}
                    </p>
                  </div>

                  <div className="md:text-right">
                    <p className="text-xl font-bold text-blue-900">
                      {item.service}
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-gray-800">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WorshipSchedule;
