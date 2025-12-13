"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useToast } from '@/hooks/use-toast';
import { Heart, Send } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('E-mail inválido'),
  phone: z.string().min(10, 'Telefone deve ter pelo menos 10 caracteres'),
  message: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const prayerRequestSchema = z.object({
  nomeCompleto: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  celular: z.string().min(10, 'Celular deve ter pelo menos 10 caracteres'),
  email: z.string().email('E-mail inválido'),
  mensagem: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres'),
});

type PrayerRequestFormData = z.infer<typeof prayerRequestSchema>;

export default function ComunidadePage() {
  const { toast } = useToast();
  const [isLoadingContact, setIsLoadingContact] = useState(false);
  const [isLoadingPrayer, setIsLoadingPrayer] = useState(false);

  // Formulário de Contato
  const {
    register: registerContact,
    handleSubmit: handleSubmitContact,
    formState: { errors: errorsContact },
    reset: resetContact,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmitContact = async (data: ContactFormData) => {
    setIsLoadingContact(true);
    
    // Simular envio de formulário
    setTimeout(() => {
      setIsLoadingContact(false);
      toast({
        title: 'Mensagem enviada!',
        description: 'Entraremos em contato em breve.',
      });
      resetContact();
    }, 2000);
  };

  // Formulário de Pedido de Oração
  const {
    register: registerPrayer,
    handleSubmit: handleSubmitPrayer,
    formState: { errors: errorsPrayer },
    reset: resetPrayer,
  } = useForm<PrayerRequestFormData>({
    resolver: zodResolver(prayerRequestSchema),
  });

  const onSubmitPrayer = async (data: PrayerRequestFormData) => {
    setIsLoadingPrayer(true);
    
    // Simular envio de formulário
    setTimeout(() => {
      setIsLoadingPrayer(false);
      toast({
        title: 'Sucesso!',
        description: 'Seu pedido de oração foi enviado com sucesso.',
      });
      resetPrayer();
    }, 2000);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background de papel amassado */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
             style={{
               backgroundImage: "url('/images/img-backgroundpapel.png')",
               backgroundSize: 'cover',
               backgroundPosition: 'center'
             }}>
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Nossa Comunidade
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Somos uma família de crentes dedicada a amar a Deus e ao próximo, 
            transformando vidas através do poder do Evangelho.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold px-8 py-3 rounded-lg transition-colors">
              Conheça Nossa História
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white font-bold px-8 py-3 rounded-lg transition-colors">
              Participe de Nossos Cultos
            </button>
          </div>
        </div>
      </section>

      {/* Seção Única com Tudo */}
      <section className="py-20 bg-cover bg-center bg-no-repeat"
               style={{
                 backgroundImage: "url('/images/img-backgroundpapel.png')",
                 backgroundSize: 'cover',
                 backgroundPosition: 'center'
               }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Bem-vindo à Nossa Comunidade
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Descubra mais sobre nossa missão, agenda, e como entrar em contato conosco.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Lado Esquerdo - Sobre e Agenda */}
            <div className="space-y-12">
              {/* Sobre */}
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-white">🎯</span>
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">Missão</h3>
                  <p className="text-gray-600">
                    Amar a Deus de todo coração, amar ao próximo como a nós mesmos, 
                    e fazer discípulos de todas as nações.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-white">👁️</span>
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">Visão</h3>
                  <p className="text-gray-600">
                    Ser uma comunidade transformadora que reflete a glória de Deus 
                    e impacta positivamente o mundo ao nosso redor.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-white">💎</span>
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">Valores</h3>
                  <p className="text-gray-600">
                    Fé, amor, unidade, integridade, excelência e serviço 
                    como pilares de nossa comunidade.
                  </p>
                </CardContent>
              </Card>

              {/* Agenda */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-blue-900 text-center">Agenda de Cultos</h3>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <h4 className="text-xl font-bold text-blue-900">Domingo</h4>
                        <p className="text-yellow-600 font-semibold">09:00 - 11:00</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-blue-900">Culto de Celebração</p>
                        <p className="text-gray-600">Culto principal com pregação, adoração e comunhão</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <h4 className="text-xl font-bold text-blue-900">Quarta-feira</h4>
                        <p className="text-yellow-600 font-semibold">19:00 - 20:30</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-blue-900">Culto de Oração</p>
                        <p className="text-gray-600">Tempo de intercessão e adoração</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <h4 className="text-xl font-bold text-blue-900">Sábado</h4>
                        <p className="text-yellow-600 font-semibold">16:00 - 18:00</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-blue-900">Encontro Jovem</p>
                        <p className="text-gray-600">Ministério para jovens e adolescentes</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Lado Direito - Contato e Pedido de Oração */}
            <div className="space-y-8">
              {/* Formulário de Contato */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-900">Entre em Contato</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmitContact(onSubmitContact)} className="space-y-4">
                    <div>
                      <Input
                        {...registerContact('name')}
                        placeholder="Seu Nome"
                        className={errorsContact.name ? 'border-red-500' : ''}
                      />
                      {errorsContact.name && (
                        <p className="text-red-500 text-sm mt-1">{errorsContact.name.message}</p>
                      )}
                    </div>

                    <div>
                      <Input
                        {...registerContact('email')}
                        type="email"
                        placeholder="Seu E-mail"
                        className={errorsContact.email ? 'border-red-500' : ''}
                      />
                      {errorsContact.email && (
                        <p className="text-red-500 text-sm mt-1">{errorsContact.email.message}</p>
                      )}
                    </div>

                    <div>
                      <Input
                        {...registerContact('phone')}
                        placeholder="Seu Telefone"
                        className={errorsContact.phone ? 'border-red-500' : ''}
                      />
                      {errorsContact.phone && (
                        <p className="text-red-500 text-sm mt-1">{errorsContact.phone.message}</p>
                      )}
                    </div>

                    <div>
                      <Textarea
                        {...registerContact('message')}
                        placeholder="Sua Mensagem"
                        rows={4}
                        className={errorsContact.message ? 'border-red-500' : ''}
                      />
                      {errorsContact.message && (
                        <p className="text-red-500 text-sm mt-1">{errorsContact.message.message}</p>
                      )}
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-blue-900 hover:bg-blue-800"
                      disabled={isLoadingContact}
                    >
                      {isLoadingContact ? 'Enviando...' : 'Enviar Mensagem'}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Formulário de Pedido de Oração */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-900">
                    <Heart size={20} />
                    Pedido de Oração
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmitPrayer(onSubmitPrayer)} className="space-y-4">
                    <Input
                      {...registerPrayer('nomeCompleto')}
                      placeholder="Nome completo"
                      className={errorsPrayer.nomeCompleto ? 'border-red-500' : ''}
                    />
                    {errorsPrayer.nomeCompleto && (
                      <p className="text-red-500 text-sm mt-1">{errorsPrayer.nomeCompleto.message}</p>
                    )}

                    <Input
                      {...registerPrayer('celular')}
                      placeholder="Celular / WhatsApp"
                      className={errorsPrayer.celular ? 'border-red-500' : ''}
                    />
                    {errorsPrayer.celular && (
                      <p className="text-red-500 text-sm mt-1">{errorsPrayer.celular.message}</p>
                    )}

                    <Input
                      {...registerPrayer('email')}
                      type="email"
                      placeholder="E-mail"
                      className={errorsPrayer.email ? 'border-red-500' : ''}
                    />
                    {errorsPrayer.email && (
                      <p className="text-red-500 text-sm mt-1">{errorsPrayer.email.message}</p>
                    )}

                    <Textarea
                      {...registerPrayer('mensagem')}
                      rows={4}
                      placeholder="Escreva seu pedido de oração"
                      className={errorsPrayer.mensagem ? 'border-red-500' : ''}
                    />
                    {errorsPrayer.mensagem && (
                      <p className="text-red-500 text-sm mt-1">{errorsPrayer.mensagem.message}</p>
                    )}

                    <Button
                      type="submit"
                      disabled={isLoadingPrayer}
                      className="w-full bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold"
                    >
                      {isLoadingPrayer ? 'Enviando...' : 'Enviar Pedido'}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Informações de Contato */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-900">Informações</CardTitle>
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}