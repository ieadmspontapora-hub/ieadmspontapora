"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Instagram,
  Facebook,
  Youtube,
  ArrowLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

export default function SocialPage() {
  const navigate = useNavigate();

  return (
    <>
      <Header />

      {/* HERO */}
      <section className="relative py-24 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Nossas Redes Sociais
          </h1>
          <p className="text-lg text-white/90">
            Acompanhe nossos conteúdos, avisos e transmissões.
          </p>
        </div>
      </section>

      {/* CONTEÚDO COM PAPEL AMASSADO */}
      <section
        className="relative py-20"
        style={{
          backgroundImage: "url('/images/img-backgroundPapelCell.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "600px",
          backgroundPosition: "center",
        }}
      >
        {/* OVERLAY */}
        <div className="absolute inset-0 bg-white/80" />

        <div className="relative container mx-auto px-6 max-w-5xl">
          {/* BOTÃO VOLTAR */}
          <div className="mb-12 bg-transparent">
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
              className="bg-gradient-to-r from-blue-900 to-blue-700 text-white shadow-md z-50"
            >
              <ArrowLeft size={18} />
              Voltar para o início
            </Button>
          </div>

          {/* GRID */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

            <SocialCard
              icon={<Instagram size={40} />}
              title="Instagram"
              description="Fotos, vídeos e avisos da igreja"
              link="https://www.instagram.com/ieadmspontapora/"
              color="from-pink-500 to-purple-600"
            />

            <SocialCard
              icon={<Facebook size={40} />}
              title="Facebook"
              description="Postagens e comunicados"
              link="https://www.facebook.com/people/IEADMS-PONTA-POR%25C3%2583/61571917247703/?mibextid=wwXIfr&rdid=E7PrzUbOJRUVetHv&share_url=https%253A%252F%252Fwww.facebook.com%252Fshare%252F1AGCoFAV34%252F%253Fmibextid%253DwwXIfr"
              color="from-blue-600 to-blue-800"
            />

            <SocialCard
              icon={<Youtube size={40} />}
              title="YouTube"
              description="Cultos e transmissões ao vivo"
              link="https://www.youtube.com/@IEADMSPP"
              color="from-red-500 to-red-700"
            />

            {/* 🔥 TIKTOK */}
            <SocialCard
              icon={<TikTokIcon />}
              title="TikTok"
              description="Vídeos curtos e momentos especiais"
              link="https://www.tiktok.com/@ieadms.pp?_t=ZM-8vMuvC1T1x1&_r=1"
              color="from-gray-900 to-black"
            />

            {/* 🔥 SPOTIFY */}
            <SocialCard
              icon={<SpotifyIcon />}
              title="Spotify"
              description="Pregações Abençoadas"
              link="https://open.spotify.com/show/7bIPeCq2FUXLUOBJlIsmXQ?si=64f0f5ba1a114b81"
              color="from-green-500 to-green-700"
            />

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

/* =======================
   CARD
======================= */
function SocialCard({
  icon,
  title,
  description,
  link,
  color,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  color: string;
}) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Card className="rounded-3xl shadow-xl border bg-white hover:shadow-2xl transition">
        <CardContent className="p-8 text-center space-y-4">
          <div
            className={`w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-gradient-to-r ${color} text-white`}
          >
            {icon}
          </div>

          <h3 className="text-xl font-bold text-blue-900">
            {title}
          </h3>

          <p className="text-gray-600 text-sm">
            {description}
          </p>

          <span className="inline-block mt-2 text-blue-700 font-semibold hover:underline">
            Acessar →
          </span>
        </CardContent>
      </Card>
    </a>
  );
}

/* =======================
   ÍCONE TIKTOK (SVG)
======================= */
function TikTokIcon() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12.52 2h3.02c.19 1.7 1.3 3.15 3.02 3.58v3.02
        c-1.66-.05-3.2-.58-4.57-1.5v7.04
        c0 3.2-2.6 5.78-5.78 5.78
        -3.2 0-5.78-2.6-5.78-5.78
        0-3.2 2.6-5.78 5.78-5.78
        .22 0 .44.02.66.05v3.1
        a2.7 2.7 0 1 0 1.89 2.58V2z" />
    </svg>
  );
}

/* =======================
   ÍCONE SPOTIFY (SVG)
======================= */
function SpotifyIcon() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10
        10-4.477 10-10S17.523 2 12 2zm4.586 14.424a.75.75 0 01-1.03.243
        c-2.823-1.723-6.375-2.113-10.56-1.158a.75.75 0 01-.334-1.462
        c4.54-1.038 8.448-.596 11.51 1.267a.75.75 0 01.414 1.11zm1.47-3.268a.938.938 0 01-1.287.304
        c-3.23-1.985-8.156-2.56-11.974-1.39a.938.938 0 01-.548-1.793
        c4.365-1.329 9.78-.688 13.492 1.6a.938.938 0 01.317 1.279zm.126-3.385
        C14.533 7.7 8.75 7.52 5.25 8.6a1.125 1.125 0 01-.646-2.154
        c4.026-1.2 10.35-1 14.637 1.47a1.125 1.125 0 01-1.059 1.955z" />
    </svg>
  );
}
