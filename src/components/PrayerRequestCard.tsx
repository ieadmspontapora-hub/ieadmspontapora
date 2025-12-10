import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useToast } from '@/hooks/use-toast';
import { usePrayerRequest } from '@/hooks/usePrayerRequest';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

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
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Pedido de Oração</CardTitle>
        <CardDescription>
          Preencha os campos abaixo e nossa equipe orará por você.
        </CardDescription>
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
            className="w-full" 
            disabled={isLoading}
          >
            {isLoading ? 'Enviando...' : 'Enviar Pedido de Oração'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};