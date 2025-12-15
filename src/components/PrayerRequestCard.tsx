"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { useToast } from "@/hooks/use-toast";
import { usePrayerRequest } from "@/hooks/usePrayerRequest";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Heart, Send } from "lucide-react";

/* -------------------- Schema -------------------- */
const prayerRequestSchema = z.object({
  nomeCompleto: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  celular: z.string().min(10, "Celular deve ter pelo menos 10 caracteres"),
  email: z.string().email("E-mail inválido"),
  mensagem: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
});

type PrayerRequestFormData = z.infer<typeof prayerRequestSchema>;

/* -------------------- Component -------------------- */
export default function PrayerRequestCard() {
  const { toast } = useToast();
  const { isLoading, submitPrayerRequest, resetForm } = usePrayerRequest();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<PrayerRequestFormData>({
    resolver: zodResolver(prayerRequestSchema),
  });

  const onSubmit = async (data: PrayerRequestFormData) => {
    const result = await submitPrayerRequest(data);

    if (result.success) {
      toast({
        title: "Sucesso!",
        description: result.message,
      });
      reset();
      resetForm();
    } else {
      toast({
        title: "Erro",
        description: result.message,
        variant: "destructive",
      });
    }
  };

  return (
    <section className="py-20 bg-transparent">
      <div className="container mx-auto px-4">

        {/* TÍTULO */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-4">
            Pedido de Oração
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Nossa equipe está pronta para orar por você.  
            Envie seu pedido com fé, confiança e total discrição.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

          {/* CARD INSPIRACIONAL */}
          <div className="hidden lg:flex items-center">
            <Card
              className="
                w-full
                rounded-3xl
                border border-black/10
                bg-white/60
                backdrop-blur-lg
                shadow-[0_25px_50px_rgba(0,0,0,0.15)]
              "
            >
              <CardContent className="p-10 text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-blue-900 flex items-center justify-center shadow-lg">
                  <Heart className="text-white" size={32} />
                </div>

                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  Estamos Orando por Você
                </h3>

                <p className="text-gray-800 leading-relaxed mb-6">
                  Cada pedido é tratado com carinho, fé e total discrição.
                  Cremos que Deus ouve e responde às orações feitas com o coração sincero.
                </p>

                <div className="bg-white/70 rounded-xl p-5 shadow-inner">
                  <p className="text-blue-900 font-semibold">
                    “A oração de um justo é poderosa e eficaz.”
                  </p>
                  <span className="text-blue-800 text-sm">
                    Tiago 5:16
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* FORMULÁRIO */}
          <div className="flex justify-center">
            <Card
              className="
                w-full max-w-md
                rounded-3xl
                border border-black/10
                bg-white/80
                backdrop-blur-lg
                shadow-[0_20px_40px_rgba(0,0,0,0.15)]
              "
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-900">
                  <Send size={20} />
                  Enviar Pedido
                </CardTitle>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

                  {/* Nome */}
                  <div>
                    <Input
                      {...register("nomeCompleto")}
                      placeholder="Nome completo"
                      className="
                        rounded-xl
                        bg-white
                        border border-black/10
                        focus:border-blue-900
                        focus:ring-2
                        focus:ring-blue-900/20
                        transition
                      "
                    />
                    {errors.nomeCompleto && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.nomeCompleto.message}
                      </p>
                    )}
                  </div>

                  {/* Celular */}
                  <div>
                    <Input
                      {...register("celular")}
                      placeholder="Celular / WhatsApp"
                      className="
                        rounded-xl
                        bg-white
                        border border-black/10
                        focus:border-blue-900
                        focus:ring-2
                        focus:ring-blue-900/20
                        transition
                      "
                    />
                    {errors.celular && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.celular.message}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <Input
                      {...register("email")}
                      type="email"
                      placeholder="E-mail"
                      className="
                        rounded-xl
                        bg-white
                        border border-black/10
                        focus:border-blue-900
                        focus:ring-2
                        focus:ring-blue-900/20
                        transition
                      "
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Mensagem */}
                  <div>
                    <Textarea
                      {...register("mensagem")}
                      rows={4}
                      placeholder="Escreva seu pedido de oração"
                      className="
                        rounded-xl
                        resize-none
                        bg-white
                        border border-black/10
                        focus:border-blue-900
                        focus:ring-2
                        focus:ring-blue-900/20
                        transition
                        leading-relaxed
                      "
                    />
                    {errors.mensagem && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.mensagem.message}
                      </p>
                    )}
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-black/10 my-2" />

                  {/* Botão */}
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
                      py-6
                      tracking-wide
                      shadow-lg
                      transition-all
                      duration-300
                      hover:scale-[1.03]
                      active:scale-[0.97]
                    "
                  >
                    {isLoading ? "Enviando..." : "Enviar Pedido"}
                  </Button>

                </form>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
}
