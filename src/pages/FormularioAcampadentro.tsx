import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import PixPagamento from "@/components/PixPagamento";


export default function FormularioAcampadentro() {
  const navigate = useNavigate();
  const topRef = useRef<HTMLDivElement>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [status, setStatus] = useState("");
  const [openTermos, setOpenTermos] = useState(false);

  const maskTelefone = (value) => {
  return value
    .replace(/\D/g, '') // remove tudo que não for número
    .replace(/^(\d{2})(\d)/g, '($1) $2') // (99) 9
    .replace(/(\d{5})(\d)/, '$1-$2') // 99999-9999
    .slice(0, 15); // limita tamanho
};


  /* 🔥 FORÇA O SCROLL PARA O TOPO REAL */
  useEffect(() => {
    if (submitSuccess) {
      topRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [submitSuccess]);

  useEffect(() => {
    const menorIdadeRadios = document.querySelectorAll(
      'input[name="menor_idade"]'
    );
    const dadosResponsavel = document.getElementById("dados-responsavel");

    menorIdadeRadios.forEach((radio) => {
      radio.addEventListener("change", (e) => {
        const target = e.target as HTMLInputElement;
        if (target.value === "Sim" && target.checked) {
          dadosResponsavel?.classList.remove("hidden");
          dadosResponsavel
            ?.querySelectorAll("input")
            .forEach((input) => ((input as HTMLInputElement).required = true));
        } else if (target.value === "Não" && target.checked) {
          dadosResponsavel?.classList.add("hidden");
          dadosResponsavel
            ?.querySelectorAll("input")
            .forEach((input) => ((input as HTMLInputElement).required = false));
        }
      });
    });

    const condicaoSaudeRadios = document.querySelectorAll(
      'input[name="condicao_saude"]'
    );
    const descricaoSaude = document.getElementById("descricao-saude");

    condicaoSaudeRadios.forEach((radio) => {
      radio.addEventListener("change", (e) => {
        const target = e.target as HTMLInputElement;
        if (target.value === "Sim" && target.checked) {
          descricaoSaude?.classList.remove("hidden");
          (descricaoSaude as HTMLTextAreaElement).required = true;
        } else if (target.value === "Não" && target.checked) {
          descricaoSaude?.classList.add("hidden");
          (descricaoSaude as HTMLTextAreaElement).required = false;
        }
      });
    });

    const form = document.getElementById("form-acampadentro");

    if (form) {
      form.addEventListener("submit", async (e) => {
        e.preventDefault();
        setStatus("Enviando...");
        setIsSubmitting(true);

        try {
          const formData = new FormData(form as HTMLFormElement);
          const response = await fetch(
            "https://script.google.com/macros/s/AKfycbygqcXwCYFW4bgp5M8vsJHTf02pf-QiRST8eSWIYbexs1bNkRjwY3ZpcgBJkDDhjzn5/exec",
            {
              method: "POST",
              body: formData,
            }
          );

          if (response.ok) {
            setSubmitSuccess(true);
            setStatus("Inscrição enviada com sucesso!");
            (form as HTMLFormElement).reset();

            setTimeout(() => {
              navigate("/eventos");
            }, 3000);
          } else {
            setStatus("Erro ao enviar. Tente novamente.");
          }
        } catch (error) {
          setStatus("Erro ao enviar. Tente novamente.");
        } finally {
          setIsSubmitting(false);
        }
      });
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* 🔥 ÂNCORA REAL */}
      <div ref={topRef} />

      <Header />

      <main className="flex-grow">
        {/* HERO */}
        <section className="relative py-24 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
          <div className="container mx-auto px-6 text-center max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              Inscrição - Acampadentro
            </h1>
            <p className="text-lg">
              Preencha o formulário abaixo para se inscrever no Acampadentro 2026.
            </p>
          </div>
        </section>

        {/* CONTEÚDO */}
        <section
          className="relative py-16"
          style={{
            backgroundImage: "url('/images/img-backgroundPapelCell.png')",
            backgroundRepeat: "repeat",
            backgroundSize: "600px",
          }}
        >
          <div className="absolute inset-0 bg-white/80" />

          <div className="relative container mx-auto px-6">
            <div className="max-w-4xl mx-auto min-h-[60vh]">
              {submitSuccess ? (
                <div className="flex items-center justify-center min-h-[60vh]">
                  <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-5 rounded-lg text-center max-w-md">
                    <h3 className="text-xl font-bold mb-2">
                      Inscrição enviada com sucesso!
                    </h3>
                    <p>Em breve entraremos em contato com mais informações.</p>
                  </div>
                </div>
              ) : (

                <form id="form-acampadentro" className="space-y-8">
                  {/* DADOS DO PARTICIPANTE */}
                  <div className="bg-white rounded-lg p-6 shadow-lg">
                    <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center gap-2"> 🧍 DADOS DO PARTICIPANTE </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div> <label htmlFor="nome_completo" className="block text-sm font-medium text-gray-700 mb-2"> Nome completo * </label>
                        <input type="text" id="nome_completo" name="nome_completo" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Nome completo" /> </div>
                      <div> <label htmlFor="idade" className="block text-sm font-medium text-gray-700 mb-2"> Idade * </label> <input type="number" id="idade" name="idade" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Idade" /> </div> <div className="md:col-span-2"> <label htmlFor="data_nascimento" className="block text-sm font-medium text-gray-700 mb-2"> Data de nascimento * </label> <input type="date" id="data_nascimento" name="data_nascimento" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" /> </div> <div className="md:col-span-2"> <label
  htmlFor="telefone_participante"
  className="block text-sm font-medium text-gray-700 mb-2"
>
  Telefone / WhatsApp 
</label>

<input
  type="tel"
  id="telefone_participante"
  name="telefone_participante"
  required
  placeholder="(00) 00000-0000"
  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
  onChange={(e) => {
    e.target.value = maskTelefone(e.target.value);
  }}
/>
 </div> </div> </div> <hr className="border-gray-300" /> {/* DADOS DO RESPONSÁVEL */} <div className="bg-white rounded-lg p-6 shadow-lg"> <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center gap-2"> 👨‍👩‍👧 DADOS DO RESPONSÁVEL </h3> <p className="text-gray-700 mb-4">O participante é menor de idade?</p> <div className="flex gap-6 mb-6"> <label className="flex items-center gap-2 cursor-pointer"> <input type="radio" name="menor_idade" value="Sim" required className="text-blue-600 focus:ring-blue-500" /> <span>Sim</span> </label> <label className="flex items-center gap-2 cursor-pointer"> <input type="radio" name="menor_idade" value="Não" className="text-blue-600 focus:ring-blue-500" /> <span>Não</span> </label> </div> <div id="dados-responsavel" className="hidden"> <div className="grid md:grid-cols-2 gap-6"> <div> <label htmlFor="nome_responsavel" className="block text-sm font-medium text-gray-700 mb-2"> Nome do responsável </label> <input type="text" id="nome_responsavel" name="nome_responsavel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Nome do responsável" /> </div> <div> <label htmlFor="telefone_responsavel" className="block text-sm font-medium text-gray-700 mb-2"> Telefone do responsável </label> <input type="tel" id="telefone_responsavel" name="telefone_responsavel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="(00) 00000-0000"  onChange={(e) => {
    e.target.value = maskTelefone(e.target.value);
  }} /> </div> </div> </div> </div> <hr className="border-gray-300" /> {/* INFORMAÇÕES DO GRUPO */} <div className="bg-white rounded-lg p-6 shadow-lg"> <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center gap-2"> ⛪ INFORMAÇÕES DO GRUPO </h3> <p className="text-gray-700 mb-4">Você faz parte da UMADEMATS?</p> <div className="flex gap-6"> <label className="flex items-center gap-2 cursor-pointer"> <input type="radio" name="umademats" value="Sim" required className="text-blue-600 focus:ring-blue-500" /> <span>Sim</span> </label> <label className="flex items-center gap-2 cursor-pointer"> <input type="radio" name="umademats" value="Não" className="text-blue-600 focus:ring-blue-500" /> <span>Não</span> </label> </div> </div> <hr className="border-gray-300" /> {/* SAÚDE E SEGURANÇA */} <div className="bg-white rounded-lg p-6 shadow-lg"> <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center gap-2"> ⚕️ SAÚDE E SEGURANÇA </h3> <p className="text-gray-700 mb-4">Possui alergia, restrição alimentar ou condição de saúde?</p> <div className="flex gap-6 mb-6"> <label className="flex items-center gap-2 cursor-pointer"> <input type="radio" name="condicao_saude" value="Não" required className="text-blue-600 focus:ring-blue-500" /> <span>Não</span> </label> <label className="flex items-center gap-2 cursor-pointer"> <input type="radio" name="condicao_saude" value="Sim" className="text-blue-600 focus:ring-blue-500" /> <span>Sim</span> </label> </div> <div id="descricao-saude" className="hidden"> <label htmlFor="descricao_saude" className="block text-sm font-medium text-gray-700 mb-2"> Descrição da condição de saúde </label> <textarea id="descricao_saude" name="descricao_saude" rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Se sim, descreva aqui..." /> </div> </div> <hr className="border-gray-300" /> {/* AUTORIZAÇÕES */} <div className="bg-white rounded-lg p-6 shadow-lg"> <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center gap-2"> 📜 AUTORIZAÇÕES </h3> <div className="space-y-4"> <label className="flex items-start gap-3 cursor-pointer"> <input type="checkbox" name="autorizacao_responsavel" value="Sim" required className="mt-1 text-blue-600 focus:ring-blue-500" /> <span className="text-gray-700">Declaro que tenho autorização dos pais ou responsáveis legais</span> 
 </label> <label className="flex items-start gap-3 cursor-pointer"> <input type="checkbox" name="concorda_regras" value="Sim" required className="mt-1 text-blue-600 focus:ring-blue-500" /> <span className="text-gray-700">Concordo com as regras e orientações do evento</span> </label> <button
  type="button"
  onClick={() => setOpenTermos(true)}
  className="text-sm text-blue-700 underline hover:text-blue-900 mt-2"
>
  Ver Regras e Orientações
</button></div> </div> <hr className="border-gray-300" /> {/* OBSERVAÇÕES FINAIS */} <div className="bg-white rounded-lg p-6 shadow-lg"> <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center gap-2"> 📝 OBSERVAÇÕES FINAIS </h3> <label htmlFor="observacoes" className="block text-sm font-medium text-gray-700 mb-2"> Observações (opcional) </label> <textarea id="observacoes" name="observacoes" rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Deseja acrescentar alguma observação?" /> </div>
  <PixPagamento />
 
{/* CONFIRMAÇÃO DE PAGAMENTO PIX */}
<div className="bg-white rounded-lg p-6 shadow-lg">
  <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
    ✅ CONFIRMAÇÃO DO PAGAMENTO
  </h3>
<input type="hidden" name="pix_status" value="Pendente" />

 <label className="flex items-start gap-3 cursor-pointer">
  <input
    type="checkbox"
    required
    className="mt-1 text-emerald-600 focus:ring-emerald-500"
  />
    <span className="text-gray-700 text-sm leading-relaxed">
      Confirmo que realizei o pagamento via Pix ou me comprometo a realizá-lo
      conforme as orientações acima. Estou ciente de que minha inscrição ficará
      <strong className="text-emerald-600"> pendente de confirmação</strong> até a verificação do pagamento.
    </span>
  </label>
</div>
                  <div className="flex flex-col items-center gap-4">
                    <p className="text-sm text-gray-600 h-6">{status}</p>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold py-3"
                    >
                      {isSubmitting ? "Enviando..." : "Enviar inscrição"}
                    </Button>

                    <Button
                      type="button"
                      onClick={() => navigate("/eventos")}
                      variant="ghost"
                      className="flex items-center gap-2 bg-gradient-to-r from-blue-900 to-blue-700 text-white shadow-md"
                    >
                      <ArrowLeft size={18} />
                      <span>Voltar para eventos</span>
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>
        {openTermos && (
  <div className="fixed inset-0 z-50 flex items-center justify-center">
    {/* OVERLAY */}
    <div
      className="absolute inset-0 bg-black/60 backdrop-blur-md"
      onClick={() => setOpenTermos(false)}
    />

    {/* MODAL */}
    <div className="relative z-50 w-full max-w-3xl mx-4 bg-white rounded-3xl shadow-2xl p-6 sm:p-8 animate-in fade-in zoom-in max-h-[85vh] overflow-y-auto">
      
      {/* FECHAR */}
      <button
        onClick={() => setOpenTermos(false)}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
      >
        ✕
      </button>

      <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
  <h3 className="text-lg font-semibold text-blue-900 text-center">
    💙 Orientações – Acampadentro INSIDE
  </h3>

  <p>
    Para que todos vivam um tempo abençoado, seguro e de comunhão,
    pedimos atenção às orientações abaixo:
  </p>

  <ul className="list-disc pl-5 space-y-2">
    <li>
      Utilize roupa de banho adequada, com modéstia e respeito ao
      ambiente cristão.
    </li>

    <li>
      Ao se inscrever, você autoriza o uso de sua imagem (fotos e vídeos)
      para divulgação do ministério.
    </li>

    <li>
      Durante as ministrações, evite o uso do celular para melhor
      aproveitamento do momento.
    </li>

    <li>
      Casais de namorados devem demonstrar carinho com respeito ao
      ambiente coletivo.
    </li>

    <li>
      Vamos manter uma linguagem edificante, evitando palavras
      inadequadas.
    </li>

    <li>
      Prezamos pela paz e boa convivência, evitando desavenças ou
      conflitos.
    </li>

    <li>
      Quem sair do acampadentro no período noturno poderá retornar
      apenas na manhã seguinte.
    </li>

    <li>
      Cuide bem do local, preservando tudo com zelo e responsabilidade.
    </li>
  </ul>

  <p className="mt-4 font-medium text-center text-blue-900">
    🙏 Essas orientações visam proporcionar um tempo especial na
    presença de Deus para todos.
  </p>
</div>


      <Button
        onClick={() => setOpenTermos(false)}
        className="mt-6 w-full bg-blue-900 hover:bg-blue-800 text-white py-5 rounded-xl"
      >
        Li e entendi
      </Button>
    </div>
  </div>
)}

      </main>

      <Footer />
    </div>
  );
}
