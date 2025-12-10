import { send } from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export interface PrayerRequestData {
  nomeCompleto: string;
  celular: string;
  email: string;
  mensagem: string;
}

export const sendPrayerRequestEmail = async (data: PrayerRequestData) => {
  try {
    const templateParams = {
      nomeCompleto: data.nomeCompleto,
      celular: data.celular,
      email: data.email,
      mensagem: data.mensagem,
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
      message: 'Pedido de oração enviado com sucesso!',
      response: response,
    };
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    return {
      success: false,
      message: 'Erro ao enviar pedido de oração. Tente novamente.',
      error: error,
    };
  }
};