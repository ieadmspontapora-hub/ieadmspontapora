import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const contactSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('E-mail inválido'),
  phone: z.string().min(10, 'Telefone deve ter pelo menos 10 caracteres'),
  message: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactSection = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsLoading(true);
    
    // Simular envio de formulário
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: 'Mensagem enviada!',
        description: 'Entraremos em contato em breve.',
      });
      reset();
    }, 2000);
  };

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
            Entre em Contato
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Estamos aqui para ajudar. Envie-nos uma mensagem e retornaremos o contato assim que possível.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Formulário */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-blue-900">Envie uma Mensagem</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <Input
                    {...register('name')}
                    placeholder="Seu Nome"
                    className={errors.name ? 'border-red-500' : ''}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <Input
                    {...register('email')}
                    type="email"
                    placeholder="Seu E-mail"
                    className={errors.email ? 'border-red-500' : ''}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <Input
                    {...register('phone')}
                    placeholder="Seu Telefone"
                    className={errors.phone ? 'border-red-500' : ''}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <Textarea
                    {...register('message')}
                    placeholder="Sua Mensagem"
                    rows={4}
                    className={errors.message ? 'border-red-500' : ''}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-blue-900 hover:bg-blue-800"
                  disabled={isLoading}
                >
                  {isLoading ? 'Enviando...' : 'Enviar Mensagem'}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Informações e Mapa */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-blue-900">Informações de Contato</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center">
                    <span className="text-white">📞</span>
                  </div>
                  <div>
                    <p className="font-semibold">Telefone</p>
                    <p className="text-gray-600">(11) 1234-5678</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center">
                    <span className="text-white">✉️</span>
                  </div>
                  <div>
                    <p className="font-semibold">E-mail</p>
                    <p className="text-gray-600">contato@igreja.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center">
                    <span className="text-white">📍</span>
                  </div>
                  <div>
                    <p className="font-semibold">Endereço</p>
                    <p className="text-gray-600">Rua da Igreja, 123<br />São Paulo, SP</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Mapa */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-blue-900">Nosso Local</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-gray-200 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1234567890123!2d-46.633309!3d-23.550520!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce584e2b3b2b3b%3A0x1234567890abcdef!2sIgreja%20Exemplo!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;