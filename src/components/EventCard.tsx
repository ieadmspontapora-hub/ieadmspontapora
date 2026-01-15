import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

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
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url('${image}')` }}>
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
      <CardHeader>
        <CardTitle className="text-xl text-blue-900">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-center gap-2 text-gray-600 mb-4">
          <MapPin size={16} />
          <span>{location}</span>
        </div>
        <Link to="/formulario-acampadentro">
          <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-blue-900">
            Inscrever-se
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}