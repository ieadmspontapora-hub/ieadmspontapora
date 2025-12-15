"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { HeartHandshake } from "lucide-react";

interface ContributionCardProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}

export default function ContributionCard({
  title = "Contribua com a Obra do Senhor",
  description = "Sua contribuição ajuda a manter a igreja, apoiar projetos sociais e expandir o Reino de Deus. Cada oferta é um ato de fé, amor e generosidade.",
  buttonText = "Contribuir Agora",
  buttonLink = "/contribuicao",
}: ContributionCardProps) {
  return (
    <section className="py-20 bg-transparent">
      <div className="container mx-auto px-4">

        <Card
          className="
            overflow-hidden
            rounded-3xl
            border border-black/10
            bg-white/80
            backdrop-blur-lg
            shadow-[0_25px_50px_rgba(0,0,0,0.15)]
          "
        >
          <CardContent className="p-0">
            <div className="grid lg:grid-cols-2">

              {/* TEXTO */}
              <div className="flex flex-col justify-center p-8 md:p-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-900 flex items-center justify-center shadow-md">
                    <HeartHandshake className="text-white" size={24} />
                  </div>

                  <h2 className="text-2xl md:text-3xl font-extrabold text-blue-900">
                    {title}
                  </h2>
                </div>

                <p className="text-gray-700 leading-relaxed mb-8 max-w-xl">
                  {description}
                </p>

                <div>
                  <Button
                    asChild
                    className="
                      bg-yellow-500
                      hover:bg-yellow-600
                      text-blue-900
                      font-bold
                      rounded-xl
                      px-8
                      py-6
                      text-base
                      shadow-lg
                      transition-all
                      duration-300
                      hover:scale-[1.05]
                      active:scale-[0.97]
                    "
                  >
                    <a href={buttonLink}>{buttonText}</a>
                  </Button>
                </div>
              </div>

              {/* IMAGEM */}
              <div className="h-64 lg:h-auto">
                <img
                  src="/images/mãos-segurando-um-coração-vermelho.jpg"
                  alt="Contribuição para a igreja"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

            </div>
          </CardContent>
        </Card>

      </div>
    </section>
  );
}
