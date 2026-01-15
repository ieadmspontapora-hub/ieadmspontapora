import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function FormularioAcampadentro() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [status, setStatus] = useState("");

  useEffect(() => {
    // Lógica para mostrar/ocultar campos de responsável
    const menorIdadeRadios = document.querySelectorAll('input[name="menor_idade"]');
    const dadosResponsavel = document.getElementById('dados-responsavel');

    menorIdadeRadios.forEach(radio => {
      radio.addEventListener('change', (e) => {
        const target = e.target as HTMLInputElement;
        if (target.value === 'Sim' && target.checked) {
          dadosResponsavel?.classList.remove('hidden');
          // Marcar campos como obrigatórios
          dadosResponsavel?.querySelectorAll('input').forEach(input => {
            (input as HTMLInputElement).required = true;
          });
        } else if (target.value === 'Não' && target.checked) {
          dadosResponsavel?.classList.add('hidden');
          // Remover obrigatoriedade
          dadosResponsavel?.querySelectorAll('input').forEach(input => {
            (input as HTMLInputElement).required = false;
          });
        }
      });
    });

    // Lógica para mostrar/ocultar campo de descrição de saúde
    const condicaoSaudeRadios = document.querySelectorAll('input[name="condicao_saude"]');
    const descricaoSaude = document.getElementById('descricao-saude');

    condicaoSaudeRadios.forEach(radio => {
      radio.addEventListener('change', (e) => {
        const target = e.target as HTMLInputElement;
        if (target.value === 'Sim' && target.checked) {
          descricaoSaude?.classList.remove('hidden');
          (descricaoSaude as HTMLTextAreaElement).required = true;
        } else if (target.value === 'Não' && target.checked) {
          descricaoSaude?.classList.add('hidden');
          (descricaoSaude as HTMLTextAreaElement).required = false;
        }
      });
    });

    // Lógica de envio do formulário
    const form = document.getElementById("form-acampadentro");
    if (form) {
      form.addEventListener("submit", async (e) => {
        e.preventDefault();
        setStatus("Enviando...");
        setIsSubmitting(true);

        try {
          const formData = new FormData(form as HTMLFormElement);
          const response = await fetch("https://script.google.com/macros/s/SEU_SCRIPT_ID/exec", {
            method: "POST",
            body: formData
          });

          if (response.ok) {
            setStatus("Inscrição enviada com sucesso!");
            setSubmitSuccess(true);
            (form as HTMLFormElement).reset();
            
            // Resetar campos dinâmicos
            dadosResponsavel?.classList.add('hidden');
            descricaoSaude?.classList.add('hidden');
            
            // Remover obrigatoriedade
            dadosResponsavel?.querySelectorAll('input').forEach(input => {
              (input as HTMLInputElement).required = false;
            });
            (descricaoSaude as HTMLTextAreaElement).required = false;

            setTimeout(() => {
              navigate("/eventos");
            }, 3000);
          } else {
            setStatus("Erro ao enviar. Tente novamente.");
          }
        } catch (error) {
          console.error('Erro ao enviar formulário:', error);
          setStatus("Erro ao enviar. Tente novamente.");
        } finally {
          setIsSubmitting(false);
        }
      });
    }

    // Cleanup
    return () => {
      menorIdadeRadios.forEach(radio => {
        radio.removeEventListener('change', () => {});
      });
      condicaoSaudeRadios.forEach(radio => {
        radio.removeEventListener('change', () => {});
      });
      if (form) {
        form.removeEventListener("submit", () => {});
      }
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Seção Hero */}
        <section className="relative py-24 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
          <div className="container mx-auto px-6 text-center max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              Inscrição - Acampadentro
            </h1>
            <p className="text-lg text-white-90">
              Preencha o formulário abaixo para se inscrever no Acampadentro 2024.
            </p>
          </div>
        </section>

        {/* Botão Voltar */}
        <div className="container mx-auto px-6 mt-8">
          <Button
            onClick={() => navigate("/eventos")}
            variant="ghost"
            className="flex items-center gap-2 bg-gradient-to-r from-blue-900 to-blue-700 text-white shadow-md"
          >
            <ArrowLeft size={18} />
            <span className="hidden sm:inline">Voltar para eventos</span>
          </Button>
        </div>

        {/* Conteúdo com papel amassado */}
        <section
          className="relative py-16"
          style={{
            backgroundImage: "url('/images/img-backgroundPapelCell.png')",
            backgroundRepeat: "repeat",
            backgroundSize: "600px",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-white/80"></div>

          <div className="relative container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              {submitSuccess ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded text-center">
                  <h3 className="text-xl font-bold mb-2">Inscrição enviada com sucesso!</h3>
                  <p>Em breve entraremos em contato com mais informações.</p>
                </div>
              ) : (
                <form id="form-acampadentro" className="space-y-8">
                  {/* DADOS DO PARTICIPANTE */}
                  <div className="bg-white rounded-lg p-6 shadow-lg">
                    <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center gap-2">
                      🧍 DADOS DO PARTICIPANTE
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="nome_completo" className="block text-sm font-medium text-gray-700 mb-2">
                          Nome completo *
                        </label>
                        <input
                          type="text"
                          id="nome_completo"
                          name="nome_completo"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Nome completo"
                        />
                      </div>

                      <div>
                        <label htmlFor="idade" className="block text-sm font-medium text-gray-700 mb-2">
                          Idade *
                        </label>
                        <input
                          type="number"
                          id="idade"
                          name="idade"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Idade"
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label htmlFor="data_nascimento" className="block text-sm font-medium text-gray-700 mb-2">
                          Data de nascimento *
                        </label>
                        <input
                          type="date"
                          id="data_nascimento"
                          name="data_nascimento"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label htmlFor="telefone_participante" className="block text-sm font-medium text-gray-700 mb-2">
                          Telefone / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          id="telefone_participante"
                          name="telefone_participante"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="(00) 00000-0000"
                        />
                      </div>
                    </div>
                  </div>

                  <hr className="border-gray-300" />

                  {/* DADOS DO RESPONSÁVEL */}
                  <div className="bg-white rounded-lg p-6 shadow-lg">
                    <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center gap-2">
                      👨‍👩‍👧 DADOS DO RESPONSÁVEL
                    </h3>
                    
                    <p className="text-gray-700 mb-4">O participante é menor de idade?</p>
                    
                    <div className="flex gap-6 mb-6">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="menor_idade"
                          value="Sim"
                          required
                          className="text-blue-600 focus:ring-blue-500"
                        />
                        <span>Sim</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="menor_idade"
                          value="Não"
                          className="text-blue-600 focus:ring-blue-500"
                        />
                        <span>Não</span>
                      </label>
                    </div>

                    <div id="dados-responsavel" className="hidden">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="nome_responsavel" className="block text-sm font-medium text-gray-700 mb-2">
                            Nome do responsável
                          </label>
                          <input
                            type="text"
                            id="nome_responsavel"
                            name="nome_responsavel"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Nome do responsável"
                          />
                        </div>

                        <div>
                          <label htmlFor="telefone_responsavel" className="block text-sm font-medium text-gray-700 mb-2">
                            Telefone do responsável
                          </label>
                          <input
                            type="tel"
                            id="telefone_responsavel"
                            name="telefone_responsavel"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="(00) 00000-0000"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <hr className="border-gray-300" />

                  {/* INFORMAÇÕES DO GRUPO */}
                  <div className="bg-white rounded-lg p-6 shadow-lg">
                    <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center gap-2">
                      ⛪ INFORMAÇÕES DO GRUPO
                    </h3>
                    
                    <p className="text-gray-700 mb-4">Você faz parte da UMADEMATS?</p>
                    
                    <div className="flex gap-6">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="umademats"
                          value="Sim"
                          required
                          className="text-blue-600 focus:ring-blue-500"
                        />
                        <span>Sim</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="umademats"
                          value="Não"
                          className="text-blue-600 focus:ring-blue-500"
                        />
                        <span>Não</span>
                      </label>
                    </div>
                  </div>

                  <hr className="border-gray-300" />

                  {/* SAÚDE E SEGURANÇA */}
                  <div className="bg-white rounded-lg p-6 shadow-lg">
                    <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center gap-2">
                      ⚕️ SAÚDE E SEGURANÇA
                    </h3>
                    
                    <p className="text-gray-700 mb-4">Possui alergia, restrição alimentar ou condição de saúde?</p>
                    
                    <div className="flex gap-6 mb-6">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="condicao_saude"
                          value="Não"
                          required
                          className="text-blue-600 focus:ring-blue-500"
                        />
                        <span>Não</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="condicao_saude"
                          value="Sim"
                          className="text-blue-600 focus:ring-blue-500"
                        />
                        <span>Sim</span>
                      </label>
                    </div>

                    <div id="descricao-saude" className="hidden">
                      <label htmlFor="descricao_saude" className="block text-sm font-medium text-gray-700 mb-2">
                        Descrição da condição de saúde
                      </label>
                      <textarea
                        id="descricao_saude"
                        name="descricao_saude"
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Se sim, descreva aqui..."
                      />
                    </div>
                  </div>

                  <hr className="border-gray-300" />

                  {/* AUTORIZAÇÕES */}
                  <div className="bg-white rounded-lg p-6 shadow-lg">
                    <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center gap-2">
                      📜 AUTORIZAÇÕES
                    </h3>
                    
                    <div className="space-y-4">
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          name="autorizacao_responsavel"
                          value="Sim"
                          required
                          className="mt-1 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-gray-700">Declaro que tenho autorização dos pais ou responsáveis legais</span>
                      </label>

                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          name="concorda_regras"
                          value="Sim"
                          required
                          className="mt-1 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-gray-700">Concordo com as regras e orientações do evento</span>
                      </label>
                    </div>
                  </div>

                  <hr className="border-gray-300" />

                  {/* OBSERVAÇÕES FINAIS */}
                  <div className="bg-white rounded-lg p-6 shadow-lg">
                    <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center gap-2">
                      📝 OBSERVAÇÕES FINAIS
                    </h3>
                    
                    <label htmlFor="observacoes" className="block text-sm font-medium text-gray-700 mb-2">
                      Observações (opcional)
                    </label>
                    <textarea
                      id="observacoes"
                      name="observacoes"
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Deseja acrescentar alguma observação?"
                    />
                  </div>

                  <div className="text-center">
                    <p id="status" className="text-sm text-gray-600 mb-4 h-6">{status}</p>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold py-3"
                    >
                      {isSubmitting ? "Enviando..." : "Enviar inscrição"}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}