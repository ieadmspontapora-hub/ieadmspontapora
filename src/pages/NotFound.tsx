"use client";

import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent or under-construction route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 px-4">
      
      {/* CARD */}
      <div
        className="
          max-w-lg w-full
          rounded-3xl
          bg-white/10
          backdrop-blur-lg
          border border-white/20
          shadow-[0_30px_60px_rgba(0,0,0,0.4)]
          p-10
          text-center
        "
      >
        {/* 404 */}
        <h1 className="text-7xl md:text-8xl font-extrabold text-yellow-500 mb-4 tracking-widest">
          404
        </h1>

        {/* TITULO */}
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
          Página em Construção
        </h2>

        {/* TEXTO */}
        <p className="text-white/80 leading-relaxed mb-8">
          Esta página ainda está sendo preparada com carinho para você.
          Estamos trabalhando para trazer novos conteúdos e funcionalidades em breve.
        </p>

        {/* BOTÃO */}
        <Button
          onClick={() => navigate("/")}
          className="
            bg-yellow-500
            hover:bg-yellow-600
            text-blue-900
            font-bold
            rounded-full
            px-10
            py-6
            tracking-widest
            shadow-lg
            transition-all
            duration-300
            hover:scale-[1.05]
            active:scale-[0.97]
          "
        >
          VOLTAR PARA O INÍCIO
        </Button>

        {/* CAMINHO */}
        <p className="text-xs text-white/50 mt-6 break-all">
          Caminho acessado: {location.pathname}
        </p>
      </div>
    </div>
  );
}
