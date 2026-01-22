"use client";

import { useState } from "react";

interface PixPagamentoProps {
  valor: number;
  qrCodeUrl: string;
  pixKey: string;
}

export default function PixPagamento({
  valor,
  qrCodeUrl,
  pixKey,
}: PixPagamentoProps) {
  const [copied, setCopied] = useState(false);

  const copyPix = async () => {
    await navigator.clipboard.writeText(pixKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-lg mt-8">
      <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center gap-2">
        💳 PAGAMENTO VIA PIX
      </h3>

      <div className="text-center space-y-4">
        <div className="text-3xl font-extrabold text-gray-900">
          R$ {valor.toFixed(2)}
        </div>

        <p className="text-sm text-gray-600">
          Escaneie o QR Code abaixo para realizar o pagamento
        </p>

        <div className="flex justify-center">
          <div className="bg-emerald-400 p-3 rounded-xl">
            <img
              src={qrCodeUrl}
              alt="QR Code Pix"
              className="w-52 h-52 bg-white p-2 rounded-lg"
            />
          </div>
        </div>

        <span className="font-bold text-emerald-500">PIX</span>

        <div className="mt-4">
          <p className="text-sm text-gray-600 mb-2">
            Ou copie a chave Pix
          </p>

          <div className="flex gap-2">
            <input
              type="text"
              readOnly
              value={pixKey}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm"
            />
            <button
              type="button"
              onClick={copyPix}
              className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg text-sm font-semibold"
            >
              {copied ? "Copiado!" : "Copiar"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
