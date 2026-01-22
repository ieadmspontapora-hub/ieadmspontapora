import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function FormularioCamisetas() {
  const navigate = useNavigate();

  /* ================= FORM ================= */
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
const qrCodeUrl = "https://res.cloudinary.com/dgpsnu8ks/image/upload/v1769105185/Captura_de_tela_2026-01-22_140508_upscayl_5x_upscayl-standard-4x_doxe59.png";

  const [quantidade, setQuantidade] = useState(1);
  const [tipoFaixa, setTipoFaixa] = useState<"infantil" | "adulto">("adulto");
  const [modelo, setModelo] = useState("");

  /* 🔁 REDIRECT APÓS SUCESSO */
  useEffect(() => {
    if (submitSuccess) {
      const timer = setTimeout(() => {
        navigate("/departamentos/umademats");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [submitSuccess, navigate]);

  /* ================= PIX ================= */
  const chavePixCompleta =
    "00020126580014BR.GOV.BCB.PIX01369aadab4c-fa5c-4f8e-b5e9-7bb081e31c305204000053039865802BR5923Giuliano Barbosa Ovelar6009SAO PAULO621405103B1TfxGLbB6304B77B";

  const [copiado, setCopiado] = useState(false);

  const copiarPix = () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(chavePixCompleta);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = chavePixCompleta;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    } catch {
      alert("Não foi possível copiar a chave Pix 😢");
    }
  };

  const tamanhosInfantil = ["1", "2", "4", "6", "8", "10", "12", "14"];
  const tamanhosAdulto = ["PP", "P", "M", "G", "GG", "XGG"];

  const valorUnitario = 60;
  const valorTotal = quantidade * valorUnitario;

  /* ================= SUBMIT ================= */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);

      formData.append("valor_total", valorTotal.toString());
      formData.append("pagamento_status", "Pendente");

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbx-TnsBW5AxlD2lDTc2qRYeH4xF2D55H6Zgwzn2Alrw6QMgjoEUK4Buwq-1v5tlUOQ/exec",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) throw new Error("Erro");

      setSubmitSuccess(true);
    } catch {
      alert("Erro ao enviar pedido 😢");
    } finally {
      setIsSubmitting(false);
    }
  };

  /* ================= UI ================= */
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* HERO */}
        <section className="py-24 bg-gradient-to-br from-blue-900 to-blue-700 text-white text-center">
          <h1 className="text-4xl font-extrabold mb-3">
            Pedido de Camisetas – UMADEMATS
          </h1>
          <p>Preencha o formulário e finalize via Pix</p>
        </section>

        {/* FORM */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            {submitSuccess ? (
              <div className="flex justify-center min-h-[50vh] items-center">
                <div className="bg-green-100 border border-green-400 text-green-700 p-6 rounded-xl text-center shadow-lg max-w-md">
                  <h3 className="text-xl font-bold mb-2">
                    Pedido enviado com sucesso 🎉
                  </h3>
                  <p>
                    Status:{" "}
                    <strong className="text-emerald-600">Pendente</strong>
                  </p>
                  <p className="mt-2 text-sm">
                    Você será redirecionado em alguns segundos...
                  </p>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 space-y-8"
              >
                <input
                  name="nome"
                  required
                  placeholder="Nome completo"
                  className="w-full px-4 py-3 border rounded-lg"
                />

                <input
  name="quantidade"
  type="number"
  min={1}
  value={quantidade}
  onChange={(e) => {
    const valor = e.target.value.replace(/^0+/, "");
    setQuantidade(valor === "" ? 0 : Number(valor));
  }}
  className="w-full px-4 py-3 border rounded-lg"
/>


                <div className="flex gap-6">
                  {["infantil", "adulto"].map((f) => (
                    <label key={f} className="flex gap-2 items-center">
                      <input
                        type="radio"
                        name="faixa"
                        value={f}
                        checked={tipoFaixa === f}
                        onChange={() =>
                          setTipoFaixa(f as "infantil" | "adulto")
                        }
                      />
                      {f}
                    </label>
                  ))}
                </div>

                <select
                  name="tamanho"
                  required
                  className="w-full px-4 py-3 border rounded-lg"
                >
                  <option value="">Selecione o tamanho</option>
                  {(tipoFaixa === "infantil"
                    ? tamanhosInfantil
                    : tamanhosAdulto
                  ).map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>

                <div className="flex gap-6">
                  {["Unissex", "Baby Look"].map((t) => (
                    <label key={t} className="flex gap-2 items-center">
                      <input type="radio" name="tipo" value={t} />
                      {t}
                    </label>
                  ))}
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    {
                      nome: "Verde",
                      img: "https://res.cloudinary.com/dgpsnu8ks/image/upload/v1769103599/Camisa1_cspeis.png",
                    },
                    {
                      nome: "Laranja",
                      img: "https://res.cloudinary.com/dgpsnu8ks/image/upload/v1769103605/Camisa2_runlcx.png",
                    },
                  ].map((item) => (
                    <label key={item.nome} className="cursor-pointer">
                      <input
                        type="radio"
                        name="modelo"
                        value={item.nome}
                        className="hidden"
                        checked={modelo === item.nome}
                        onChange={(e) => setModelo(e.target.value)}
                        required
                      />
                      <div
                        className={`rounded-2xl border-2 overflow-hidden transition-all duration-300 ${
                          modelo === item.nome
                            ? item.nome === "Verde"
                              ? "border-green-500 ring-4 ring-green-200"
                              : "border-orange-500 ring-4 ring-orange-200"
                            : ""
                        }`}
                      >
                        <img
                          src={item.img}
                          className={`w-full h-56 object-cover transition-transform duration-500 ${
                            modelo === item.nome ? "scale-110" : ""
                          }`}
                        />
                        <div className="p-4 text-center font-semibold">
                          Camisa {item.nome}
                        </div>
                      </div>
                    </label>
                  ))}
                </div>

                <div className="border-t pt-6 text-center space-y-4">
  <p>
    Valor total: <strong>R$ {valorTotal},00</strong>
  </p>

  {/* QR CODE */}
  {qrCodeUrl && (
    <div className="flex justify-center">
      <div className="bg-white p-3 rounded-xl shadow">
        <img
          src={qrCodeUrl}
          alt="QR Code Pix"
          className="w-44 h-44 object-contain"
        />
      </div>
    </div>
  )}

  <p className="text-sm text-gray-600">
    Escaneie o QR Code ou copie a chave Pix
  </p>

  <Button onClick={copiarPix} type="button">
    {copiado ? "✅ Pix copiado" : "📋 Copiar Pix"}
  </Button>
</div>


                <Button
                  disabled={isSubmitting}
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-blue-900"
                  type="submit"
                >
                  {isSubmitting ? "Enviando..." : "Enviar pedido"}
                </Button>

                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => navigate("/departamentos")}
                >
                  Voltar
                </Button>
              </form>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
