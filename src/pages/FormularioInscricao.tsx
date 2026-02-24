import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function FormUmademats() {
  const navigate = useNavigate();
  const topRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [congregaSelecionada, setCongregaSelecionada] = useState("");

  // ✅ Máscara Telefone
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");

    if (value.length > 11) value = value.slice(0, 11);

    if (value.length > 6) {
      value = value.replace(
        /^(\d{2})(\d{5})(\d{0,4})$/,
        "($1) $2-$3"
      );
    } else if (value.length > 2) {
      value = value.replace(/^(\d{2})(\d+)/, "($1) $2");
    } else if (value.length > 0) {
      value = value.replace(/^(\d+)/, "($1");
    }

    e.target.value = value;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycby3KdVzTzgpSI2OVAuTmULO_ptzi38JWLbBZk-pomj-XsFqFKdElV6O5OJcGaId-Kg/exec",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) throw new Error("Erro");

      setSubmitSuccess(true);

      setTimeout(() => {
        navigate("/departamentos/umademats");
      }, 4000);

    } catch {
      alert("Erro ao enviar formulário 😢");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col" ref={topRef}>
      <Header />

      <main className="flex-grow">
        {/* HERO */}
        <section className="py-24 bg-gradient-to-br from-blue-900 to-blue-700 text-white text-center">
          <h1 className="text-4xl font-extrabold mb-3">
            Ficha de Inscrição / Atualização – UMADEMATS
          </h1>
          <p>Organização e cuidado do grupo para essa nova fase 🤎</p>
        </section>

        {/* FORM */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            {submitSuccess ? (
              <div className="flex justify-center min-h-[50vh] items-center">
                <div className="bg-green-100 border border-green-400 text-green-700 p-6 rounded-xl text-center shadow-lg max-w-md">
                  <h3 className="text-xl font-bold mb-2">
                    Formulário enviado com sucesso 🙏
                  </h3>
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
                {/* TEXTO INICIAL */}
                <div className="text-gray-600 text-center space-y-2">
                  <p>
                    Bem-vindo(a)! Essa ficha é para organização e cuidado do
                    Umademats neste momento.
                  </p>
                  <p>
                    Queremos entender quem deseja continuar caminhando com o
                    grupo, para planejar melhor nossas atividades e fortalecer
                    nossa comunhão.
                  </p>
                </div>

                {/* DADOS BÁSICOS */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-blue-900">
                    🧾 Dados Básicos
                  </h3>

                  <input
                    name="nome"
                    required
                    placeholder="Nome completo"
                    className="w-full px-4 py-3 border rounded-lg"
                  />

                  <input
                    name="apelido"
                    placeholder="Apelido (se tiver)"
                    className="w-full px-4 py-3 border rounded-lg"
                  />

                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                      Data de Nascimento
                    </label>
                    <input
                      type="date"
                      name="nascimento"
                      required
                      className="w-full px-4 py-3 border rounded-lg"
                    />
                  </div>

                  <input
                    name="telefone"
                    required
                    maxLength={15}
                    onChange={handlePhoneChange}
                    placeholder="Telefone / WhatsApp"
                    className="w-full px-4 py-3 border rounded-lg"
                  />
                </div>

                {/* VÍNCULO */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-blue-900">
                    🧾 Vínculo com a Igreja
                  </h3>

                  {[
                    "Igreja sede",
                    "Outra congregação",
                    "Estou conhecendo a igreja agora",
                  ].map((op) => (
                    <label key={op} className="flex gap-2 items-center">
                      <input
                        type="radio"
                        name="congrega"
                        value={op}
                        required
                        onChange={(e) =>
                          setCongregaSelecionada(e.target.value)
                        }
                      />
                      {op}
                    </label>
                  ))}

                  {congregaSelecionada === "Outra congregação" && (
                    <input
                      type="text"
                      name="outra_congregacao"
                      placeholder="Por favor escreva de qual congregação"
                      required
                      className="w-full px-4 py-3 border rounded-lg mt-3"
                    />
                  )}
                </div>

                {/* SITUAÇÃO */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-blue-900">
                    🧾 Situação no Umademats
                  </h3>

                  {[
                    "Participo com frequência",
                    "Participo às vezes",
                    "Tenho participado pouco",
                    "Estou afastado(a) no momento",
                  ].map((op) => (
                    <label key={op} className="flex gap-2 items-center">
                      <input
                        type="radio"
                        name="participacao"
                        value={op}
                        required
                      />
                      {op}
                    </label>
                  ))}
                </div>

                {/* DECISÃO */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-blue-900">
                    🧾 Decisão de Caminhada
                  </h3>

                  {[
                    "Sim",
                    "Ainda estou avaliando",
                    "Não, por enquanto",
                  ].map((op) => (
                    <label key={op} className="flex gap-2 items-center">
                      <input type="radio" name="decisao" value={op} required />
                      {op}
                    </label>
                  ))}
                </div>

                {/* DISPONIBILIDADE */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-blue-900">
                    🧾 Disponibilidade
                  </h3>

                  {[
                    "Sim, normalmente",
                    "Às vezes",
                    "Tenho dificuldade de horários",
                  ].map((op) => (
                    <label key={op} className="flex gap-2 items-center">
                      <input
                        type="radio"
                        name="disponibilidade"
                        value={op}
                        required
                      />
                      {op}
                    </label>
                  ))}
                </div>

                {/* WHATSAPP */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-blue-900">
                    🧾 Grupo de WhatsApp
                  </h3>

                  {[
                    "Acompanha e participa",
                    "Acompanha, mas participa pouco",
                    "Prefere apenas receber informações",
                    "Não tem acompanhado",
                  ].map((op) => (
                    <label key={op} className="flex gap-2 items-center">
                      <input type="radio" name="whatsapp" value={op} required />
                      {op}
                    </label>
                  ))}
                </div>

                {/* OBSERVAÇÃO */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-blue-900">
                    🧾 Observação
                  </h3>

                  <textarea
                    name="pastoral"
                    rows={4}
                    placeholder="Escreva aqui (opcional)"
                    className="w-full px-4 py-3 border rounded-lg"
                  />
                </div>

                {/* BOTÕES */}
                <Button
                  disabled={isSubmitting}
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-blue-900"
                  type="submit"
                >
                  {isSubmitting ? "Enviando..." : "Enviar formulário"}
                </Button>

                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => navigate("/departamentos/umademats")}
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