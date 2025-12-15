"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const contactSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("E-mail inválido"),
  phone: z.string().min(10, "Telefone deve ter pelo menos 10 caracteres"),
  message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
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

    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve.",
      });
      reset();
    }, 2000);
  };

  return (
    <section className="py-20 bg-transparent">
      <div className="container mx-auto px-4">

        {/* TÍTULO */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-4">
            Entre em Contato
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Estamos aqui para ajudar. Envie-nos uma mensagem e retornaremos
            o contato o mais breve possível.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

          {/* FORMULÁRIO */}
          <Card
            className="
              rounded-3xl
              bg-white/10
              backdrop-blur-xl
              border border-white/20
              shadow-2xl
            "
          >
            <CardHeader>
              <CardTitle className="text-2xl text-blue-900">
                Envie uma Mensagem
              </CardTitle>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <Input
                  {...register("name")}
                  placeholder="Seu nome"
                  className="rounded-xl focus-visible:ring-blue-900"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}

                <Input
                  {...register("email")}
                  type="email"
                  placeholder="Seu e-mail"
                  className="rounded-xl focus-visible:ring-blue-900"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}

                <Input
                  {...register("phone")}
                  placeholder="Telefone / WhatsApp"
                  className="rounded-xl focus-visible:ring-blue-900"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone.message}</p>
                )}

                <Textarea
                  {...register("message")}
                  rows={4}
                  placeholder="Digite sua mensagem"
                  className="rounded-xl resize-none focus-visible:ring-blue-900"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm">
                    {errors.message.message}
                  </p>
                )}

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="
                    w-full
                    bg-blue-900
                    hover:bg-blue-800
                    rounded-xl
                    font-semibold
                    transition-all
                    duration-300
                    hover:scale-[1.02]
                    active:scale-[0.98]
                  "
                >
                  {isLoading ? "Enviando..." : "Enviar Mensagem"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* INFORMAÇÕES + MAPA */}
          <div className="space-y-8">

            {/* INFORMAÇÕES */}
            <Card
              className="
                rounded-3xl
                bg-white/10
                backdrop-blur-xl
                border border-white/20
                shadow-2xl
              "
            >
              <CardHeader>
                <CardTitle className="text-xl text-blue-900">
                  Informações de Contato
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center">
                    <span className="text-white">📞</span>
                  </div>
                  <div>
                    <p className="font-semibold">Telefone</p>
                    <p className="text-gray-700">(11) 1234-5678</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center">
                    <span className="text-white">✉️</span>
                  </div>
                  <div>
                    <p className="font-semibold">E-mail</p>
                    <p className="text-gray-700">contato@igreja.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center">
                    <span className="text-white">📍</span>
                  </div>
                  <div>
                    <p className="font-semibold">Endereço</p>
                    <p className="text-gray-700">
                      Rua da Igreja, 123 <br /> São Paulo, SP
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* MAPA */}
            <Card
              className="
                rounded-3xl
                bg-white/10
                backdrop-blur-xl
                border border-white/20
                shadow-2xl
              "
            >
              <CardHeader>
                <CardTitle className="text-xl text-blue-900">
                  Nosso Local
                </CardTitle>
              </CardHeader>

              <CardContent>
                <div className="h-64 rounded-2xl overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
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
