"use client";

import { X, Copy, Check } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface PixModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PixModal({ isOpen, onClose }: PixModalProps) {
  const pixKey = "03.266.947/0058-72";
  const qrCodeUrl = "https://res.cloudinary.com/dapypkcbb/image/upload/v1768507822/qrcode-pix_fyytns.png"; // 👈 coloque a URL depois

  const [copied, setCopied] = useState(false);

  const copiarPix = async () => {
  try {
    // Tentativa moderna
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(pixKey);
    } else {
      // Fallback para mobile
      const textArea = document.createElement("textarea");
      textArea.value = pixKey;

      textArea.style.position = "fixed"; // evita scroll
      textArea.style.left = "-9999px";

      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      document.execCommand("copy");
      document.body.removeChild(textArea);
    }

    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  } catch (err) {
    alert("Não foi possível copiar a chave Pix 😕");
  }
};

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* OVERLAY COM BLUR */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
        onClick={onClose}
      />

      {/* MODAL */}
      <div className="relative z-50 w-full max-w-md mx-4 bg-white rounded-3xl shadow-2xl p-6 sm:p-8 animate-in fade-in zoom-in">
        
        {/* FECHAR */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
        >
          <X size={22} />
        </button>

        <h3 className="text-2xl font-bold text-blue-900 text-center mb-2">
          Contribuição via Pix
        </h3>

        <p className="text-center text-gray-600 mb-6">
          Sua oferta ajuda a expandir a obra de Deus 🙏
        </p>

        {/* QR CODE */}
        <div className="flex justify-center mb-6">
          <img
            src={qrCodeUrl}
            alt="QR Code Pix"
            className="w-56 h-56 object-contain rounded-xl border"
          />
        </div>
{/* ALERTA */} 
<div className="mb-3 rounded-xl border border-red-500 bg-red-50 px-4 py-3">
  <p className="text-sm text-red-700 font-semibold text-center">
    ⚠️ Atenção: antes de confirmar o Pix, confira o nome do destinatário.
  </p>
</div>
        {/* CHAVE PIX */}
        <div className="bg-gray-100 rounded-xl p-4 flex items-center justify-between gap-3 mb-6">
          <span className="text-sm break-all text-gray-800">
            {pixKey}
          </span>

          <button
            onClick={copiarPix}
            className="text-blue-900 hover:text-blue-700"
          >
            {copied ? <Check size={20} /> : <Copy size={20} />}
          </button>
        </div>

        {/* BOTÃO FECHAR */}
        <Button
          onClick={onClose}
          className="w-full bg-blue-900 hover:bg-blue-800 text-white py-5 rounded-xl"
        >
          Fechar
        </Button>
      </div>
    </div>
  );
}
