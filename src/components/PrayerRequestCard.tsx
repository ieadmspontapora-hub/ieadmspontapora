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
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Pedido de Oração
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nossa equipe de intercessores está pronta para orar por você. 
            Preencha os campos abaixo e compartilhe sua necessidade.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Mensagem Inspiradora (Desktop) */}
          <div className="hidden lg:flex flex-col justify-center">
            <Card className="text-center p-8">
              <CardContent>
                <div className="w-20 h-20 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  Estamos Aqui para Orar por Você
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Nossa equipe de intercessores dedica tempo diário para orar 
                  por cada pedido recebido. Sua necessidade é importante para nós, 
                  e acreditamos que Deus ouve e responde às orações de fé.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Seja qual for sua situação - saúde, família, trabalho, 
                  ou qualquer outra preocupação - estamos juntos com você 
                  em oração, confiando no poder transformador de Deus.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-blue-900 font-semibold">
                    "Portanto, confiem uns nos outros e orarem uns pelos outros, 
                    para que vocês sejam curados. A oração de um justo tem grande poder."
                  </p>
                  <p className="text-blue-700 text-sm mt-2">Tiago 5:16</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Formulário */}
          <div className="flex flex-col justify-center">
            <Card className="w-full max-w-md mx-auto">
              <CardHeader>
                <CardTitle className="text-xl text-blue-900 flex items-center gap-2">
                  <Send size={20} />
                  Envie seu Pedido
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div>
                    <Input
                      {...register('nomeCompleto')}
                      placeholder="Nome Completo"
                      className={errors.nomeCompleto ? 'border-red-500' : ''}
                    />
                    {errors.nomeCompleto && (
                      <p className="text-red-500 text-sm mt-1">{errors.nomeCompleto.message}</p>
                    )}
                  </div>

                  <div>
                    <Input
                      {...register('celular')}
                      placeholder="Cel/WhatsApp"
                      className={errors.celular ? 'border-red-500' : ''}
                    />
                    {errors.celular && (
                      <p className="text-red-500 text-sm mt-1">{errors.celular.message}</p>
                    )}
                  </div>

                  <div>
                    <Input
                      {...register('email')}
                      type="email"
                      placeholder="E-mail"
                      className={errors.email ? 'border-red-500' : ''}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <Textarea
                      {...register('mensagem')}
                      placeholder="Sua mensagem de oração"
                      rows={4}
                      className={errors.mensagem ? 'border-red-500' : ''}
                    />
                    {errors.mensagem && (
                      <p className="text-red-500 text-sm mt-1">{errors.mensagem.message}</p>
                    )}
                  </div>

                  {error && (
                    <div className="text-red-500 text-sm">{error}</div>
                  )}

                  {success && (
                    <div className="text-green-600 text-sm">
                      Pedido enviado com sucesso! Obrigado.
                    </div>
                  )}

                  <Button 
                    type="submit" 
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Enviando...' : 'Enviar Pedido de Oração'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Mensagem Inspiradora (Mobile) */}
        <div className="lg:hidden mt-12">
          <Card className="text-center p-6">
            <CardContent>
              <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">
                Estamos Aqui para Orar por Você
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Nossa equipe de intercessores dedica tempo diário para orar 
                por cada pedido recebido. Sua necessidade é importante para nós.
              </p>
              <div className="bg-blue-50 p-3 rounded-lg">
                <p className="text-blue-900 text-sm font-semibold">
                  "A oração de um justo tem grande poder."
                </p>
                <p className="text-blue-700 text-xs mt-1">Tiago 5:16</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PrayerRequestCard;