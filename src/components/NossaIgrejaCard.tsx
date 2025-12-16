"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function NossaIgrejaCard() {
  const navigate = useNavigate();

  return (
    <section className="py-16 md:py-20 bg-transparent">
      <div className="container mx-auto px-4">

        <Card
          className="
            overflow-hidden
            rounded-3xl
            border border-white/20
            bg-white/10
            backdrop-blur-md
            shadow-[0_25px_50px_rgba(0,0,0,0.25)]
          "
        >
          <CardContent className="p-0">

            {/* GRID */}
            <div className="grid lg:grid-cols-2">

              {/* IMAGEM (TOPO NO MOBILE) */}
              <div className="relative h-56 sm:h-64 md:h-80 lg:h-auto">
                <img
                  src="/images/igreja pp.jpg"
                  alt="Nossa Igreja"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />

                {/* Overlay leve para legibilidade */}
                <div className="absolute inset-0 bg-black/20 lg:hidden" />
              </div>

              {/* TEXTO */}
              <div className="flex flex-col justify-center p-6 sm:p-8 md:p-12 text-center lg:text-left">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-yellow-500 mb-4">
                  Nossa Igreja
                </h2>

                <p className="text-blue-900 leading-relaxed text-sm sm:text-base md:text-lg mb-8">
                  Voltada para o século XXI, e, nesta visão de futuro, propõe-se a
                  apresentar verdadeiramente Deus aqui na terra. Portanto, este site
                  apresenta ações com intuito de cumprir a ordem primordial de Cristo
                  – pregarmos o seu evangelho. Por isso, esta igreja, além de incentivar
                  a leitura da palavra de Deus, a oração e a evangelização, busca também
                  dar oportunidade a tantos quantos queiram vir serrar fileiras neste
                  exército de milhares de fiéis que, por quase quatro décadas, faz parte
                  desta igreja vitoriosa, dando provas cabais de que a promessa de Cristo
                  à igreja é real ao dizer que AS PORTAS DO INFERNO NÃO PREVALECERIAM
                  CONTRA ELA.
                </p>

                <Button
                  onClick={() => navigate("/sobre")}
                  className="
                    bg-blue-900
                    hover:bg-blue-800
                    text-white
                    rounded-full
                    px-10
                    py-6
                    tracking-widest
                    font-medium
                    shadow-lg
                    transition-all
                    duration-300
                    hover:scale-[1.05]
                    active:scale-[0.97]
                    w-full sm:w-auto
                  "
                >
                  CONHEÇA NOSSA HISTÓRIA
                </Button>
              </div>

            </div>
          </CardContent>
        </Card>

      </div>
    </section>
  );
}
