import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

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
  image
}: EventCardProps) {

  // 📅 DATA DE ABERTURA DAS INSCRIÇÕES (Cuiabá - MT)
  const aberturaInscricoes = new Date("2026-01-22T09:00:00-04:00");

  const [tempoRestante, setTempoRestante] = useState<number>(
    aberturaInscricoes.getTime() - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const diff = aberturaInscricoes.getTime() - new Date().getTime();
      setTempoRestante(diff);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const inscricoesAbertas = tempoRestante <= 0;

  const formatarTempo = (ms: number) => {
    if (ms <= 0) return "";

    const totalSeconds = Math.floor(ms / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

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

      {/* CONTEÚDO */}
      <CardHeader>
        <CardTitle className="text-xl text-blue-900">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent>
        <p className="text-gray-600 mb-4">{description}</p>

        <div className="flex items-center gap-2 text-gray-600 mb-4">
          <MapPin size={16} />
          <span>{location}</span>
        </div>

        {/* BOTÃO COM TIMER */}
        <Link to={inscricoesAbertas ? "/formulario-acampadentro" : "#"}>
          <Button
            disabled={!inscricoesAbertas}
            className={`
              w-full
              transition-all
              ${inscricoesAbertas
                ? "bg-yellow-500 hover:bg-yellow-600 text-blue-900"
                : "bg-gray-300 text-gray-600 cursor-not-allowed"}
            `}
          >
            {inscricoesAbertas
              ? "Inscrever-se"
              : `Abre em ${formatarTempo(tempoRestante)}`}
          </Button>
        </Link>

      </CardContent>
    </Card>
  );
}
