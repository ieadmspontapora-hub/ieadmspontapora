import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useToast } from '@/hooks/use-toast';
import { usePrayerRequest } from '@/hooks/usePrayerRequest';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Send } from 'lucide-react';

const prayerRequestSchema = z.object({
  nomeCompleto: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  celular: z.string().min(10, 'Celular deve ter pelo menos 10 caracteres'),
  email: z.string().email('E-mail inválido'),
  mensagem: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres'),
});

type PrayerRequestFormData = z.infer<typeof prayerRequestSchema>;

export const PrayerRequestCard = () => {
  const { toast } = useToast();
  const { isLoading, error, success, submitPrayerRequest, resetForm } = usePrayerRequest();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset: resetFormFields,
  } = useForm<PrayerRequestFormData>({
    resolver: zodResolver(prayerRequestSchema),
  });

  const onSubmit = async (data: PrayerRequestFormData) => {
    const result = await submitPrayerRequest(data);
    
    if (result.success) {
      toast({
        title: 'Sucesso!',
        description: result.message,
      });
      resetFormFields();
      resetForm();
    } else {
      toast({
        title: 'Erro',
        description: result.message,
        variant: 'destructive',
      });
    }
  };

  return (
  <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
  <div className="container mx-auto px-4">

    {/* Título */}
    <div className="text-center mb-14">
      <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-4">
        Pedido de Oração
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Nossa equipe de intercessores está pronta para orar por você.
        Envie seu pedido com fé e confiança.
      </p>
    </div>

    <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

      {/* Card Inspiracional */}
      <div className="hidden lg:flex items-center">
        <Card className="rounded-3xl shadow-2xl border-0">
          <CardContent className="p-10 text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-blue-900 flex items-center justify-center shadow-lg">
              <Heart className="text-white" size={32} />
            </div>

            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              Estamos Orando por Você
            </h3>

            <p className="text-gray-600 leading-relaxed mb-6">
              Cada pedido é tratado com carinho, fé e discrição.
              Cremos que Deus ouve e responde às orações feitas com o coração sincero.
            </p>

            <div className="bg-blue-50 rounded-xl p-5">
              <p className="text-blue-900 font-semibold">
                “A oração de um justo é poderosa e eficaz.”
              </p>
              <span className="text-blue-700 text-sm">Tiago 5:16</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Formulário */}
      <div className="flex justify-center">
        <Card className="w-full max-w-md rounded-3xl shadow-2xl border-0">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-blue-900">
              <Send size={20} />
              Enviar Pedido
            </CardTitle>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

              <Input
                {...register('nomeCompleto')}
                placeholder="Nome completo"
                className="rounded-xl focus-visible:ring-blue-900"
              />

              <Input
                {...register('celular')}
                placeholder="Celular / WhatsApp"
                className="rounded-xl focus-visible:ring-blue-900"
              />

              <Input
                {...register('email')}
                type="email"
                placeholder="E-mail"
                className="rounded-xl focus-visible:ring-blue-900"
              />

              <Textarea
                {...register('mensagem')}
                rows={4}
                placeholder="Escreva seu pedido de oração"
                className="rounded-xl focus-visible:ring-blue-900 resize-none"
              />

              <Button
                type="submit"
                disabled={isLoading}
                className="
                  w-full 
                  bg-yellow-500 
                  hover:bg-yellow-600 
                  text-blue-900 
                  font-bold 
                  rounded-xl 
                  transition-all 
                  duration-300 
                  hover:scale-[1.02]
                  active:scale-[0.98]
                "
              >
                {isLoading ? 'Enviando...' : 'Enviar Pedido'}
              </Button>

            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
</section>

  );
};

export default PrayerRequestCard;