import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const LeadershipSection = () => {
  const leaders = [
    {
      name: "Pastor João Silva",
      role: "Líder Principal",
      bio: "Servindo a Deus há mais de 20 anos, com paixão por liderar e discipular pessoas.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      name: "Maria Santos",
      role: "Líder de Louvor",
      bio: "Coordena nossa equipe de música e adoração, guiando a comunidade em momentos de adoração.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      name: "Carlos Mendes",
      role: "Líder de Jovens",
      bio: "Dedicado ao ministério juvenil, inspirando a nova geração a seguir a Cristo.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  return (
    <section id="leadership" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Nossa Liderança
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conheça os servos que dedicam suas vidas para liderar nossa comunidade 
            com amor, sabedoria e dedicação.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
                  <img 
                    src={leader.image} 
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-xl text-blue-900">{leader.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-yellow-600 font-semibold mb-3">{leader.role}</p>
                <p className="text-gray-600">{leader.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;