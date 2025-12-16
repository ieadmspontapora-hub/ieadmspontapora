import { send } from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = 'template_w0j18yi'; // Novo template ID fornecido
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export interface ContactRequestData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export const sendContactRequestEmail = async (data: ContactRequestData) => {
  try {
    const templateParams = {
      name: data.name,
      phone: data.phone,
      email: data.email,
      message: data.message,
      dataEnvio: new Date().toLocaleString('pt-BR'),
    };

    const response = await send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      PUBLIC_KEY
    );

    return {
      success: true,
      message: 'message enviada com sucesso!',
      response: response,
    };
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    return {
      success: false,
      message: 'Erro ao enviar mensagem. Tente novamente.',
      error: error,
    };
  }
};