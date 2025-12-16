"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowLeft } from "lucide-react";
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

/* =======================
   SCHEMA
======================= */
const contactSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("E-mail inválido"),
  phone: z.string().min(10, "Telefone deve ter pelo menos 10 caracteres"),
  message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

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
    <>
      <Header />

      {/* HERO */}
      <section className="relative py-24 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Entre em Contato
          </h1>
          <p className="text-lg text-white/90">
            Estamos prontos para ouvir você. Envie sua mensagem ou venha nos
            visitar.
          </p>
        </div>
      </section>

      {/* BOTÃO VOLTAR */}
      <div className="container mx-auto px-6 mt-8">
        <Button
          onClick={() => navigate("/")}
          variant="ghost"
          className="flex items-center gap-2 bg-gradient-to-r from-blue-900 to-blue-700 text-white shadow-md"
        >
          <ArrowLeft size={18} />
          <span className="hidden sm:inline">Voltar para o início</span>
        </Button>
      </div>

      {/* CONTEÚDO COM PAPEL AMASSADO */}
      <section
        className="relative py-16"
        style={{
          backgroundImage: "url('/images/img-backgroundPapelCell.')",
          backgroundRepeat: "repeat",
          backgroundSize: "600px",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/80"></div>

        <div className="relative container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14 max-w-6xl mx-auto">

            {/* FORMULÁRIO */}
            <Card className="rounded-3xl shadow-xl border">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-900">
                  Envie uma mensagem
                </CardTitle>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div>
                    <Input {...register("name")} placeholder="Seu nome" />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Input
                      {...register("email")}
                      type="email"
                      placeholder="Seu e-mail"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Input
                      {...register("phone")}
                      placeholder="Telefone / WhatsApp"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Textarea
                      {...register("message")}
                      rows={4}
                      placeholder="Digite sua mensagem"
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-blue-900 hover:bg-blue-800 rounded-xl font-semibold py-3"
                  >
                    {isLoading ? "Enviando..." : "Enviar mensagem"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* INFO + MAPA */}
            <div className="space-y-8">
              <Card className="rounded-3xl shadow-xl border">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-900">
                    Informações de contato
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-5">
                  <InfoItem icon="📞" title="Telefone" value="(67) 9928-0204" />
                  <InfoItem
                    icon="✉️"
                    title="E-mail"
                    value="ieadmspontapora@gmail.com"
                  />
                  <InfoItem
                    icon="📍"
                    title="Endereço"
                    value="R. Rafael B. Teixeira, 1118 - Santa Isabel, Ponta Porã - MS, 79900-000"
                  />
                </CardContent>
              </Card>

              <Card className="rounded-3xl shadow-xl border">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-900">
                    Nossa localização
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <div className="h-64 rounded-2xl overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps?q=R.+Rafael+B.+Teixeira,+1118+-+Santa+Isabel,+Ponta+Porã+-+MS,+79900-000&output=embed"
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

      <Footer />
    </>
  );
}

/* =======================
   COMPONENTE AUXILIAR
======================= */
const InfoItem = ({
  icon,
  title,
  value,
}: {
  icon: string;
  title: string;
  value: string;
}) => (
  <div className="flex items-start gap-4">
    <div className="w-11 h-11 flex items-center justify-center rounded-full bg-blue-900 text-white text-lg">
      {icon}
    </div>
    <div>
      <p className="font-semibold">{title}</p>
      <p className="text-gray-700">{value}</p>
    </div>
  </div>
);
