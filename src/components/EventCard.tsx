import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
}

export default function EventCard({
  title,
  date,
  time,
  location,
  description,
  image,
}: EventCardProps) {
  // 🛑 DATA DE ENCERRAMENTO DAS INSCRIÇÕES (Cuiabá UTC-4)
const dataEncerramentoInscricoes = new Date("2026-02-14T23:59:00-04:00");


  const [tempoRestante, setTempoRestante] = useState<number>(
    dataEncerramentoInscricoes.getTime() - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const diff =
        dataEncerramentoInscricoes.getTime() - new Date().getTime();
      setTempoRestante(diff);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const inscricoesEncerradas = tempoRestante <= 0;

  const formatarTempo = (ms: number) => {
    if (ms <= 0) return "Encerradas";

    const totalSeconds = Math.floor(ms / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  // ⏱️ ALERTAS DE TEMPO
  const doisDiasMs = 2 * 24 * 60 * 60 * 1000;
  const umDiaMs = 24 * 60 * 60 * 1000;

  const timerVermelho = tempoRestante <= doisDiasMs;
  const timerUrgente = tempoRestante <= umDiaMs;

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      {/* IMAGEM */}
      <div
        className="h-48 bg-cover bg-center"
        style={{ backgroundImage: `url('${image}')` }}
      >
        <div className="h-full bg-black bg-opacity-40 flex items-end p-4">
          <div className="text-white">
            <div className="flex items-center gap-2 mb-2">
              <Calendar size={16} />
              <span className="text-sm">{date}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span className="text-sm">{time}</span>
            </div>
          </div>
        </div>
      </div>

      {/* HEADER */}
      <CardHeader>
        <CardTitle className="text-xl text-blue-900">{title}</CardTitle>
      </CardHeader>

      {/* CONTEÚDO */}
      <CardContent>
        <p className="text-gray-600 mb-4">{description}</p>

        <div className="flex items-center gap-2 text-gray-600 mb-6">
          <MapPin size={16} />
          <span>{location}</span>
        </div>

      {/* ⏳ TIMER */}
{!inscricoesEncerradas && (
  <div
    className={`
      text-center font-semibold mb-3 transition-all
      ${timerVermelho ? "text-red-600" : "text-blue-700"}
      ${timerUrgente ? "animate-breathe" : ""}
    `}
  >
    ⏰ Inscrições encerram em {formatarTempo(tempoRestante)}
  </div>
)}


        {/* BOTÃO */}
        <Link to={!inscricoesEncerradas ? "/formulario-acampadentro" : "#"}>
          <Button
            disabled={inscricoesEncerradas}
            className={`
              w-full
              ${
                inscricoesEncerradas
                  ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                  : "bg-yellow-500 hover:bg-yellow-600 text-blue-900"
              }
            `}
          >
            {inscricoesEncerradas
              ? "Inscrições encerradas"
              : "Inscrever-se"}
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
