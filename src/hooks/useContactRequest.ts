import { useState } from 'react';
import { sendContactRequestEmail } from '@/lib/emailjs-Contact';
import { ContactRequestData } from '@/lib/emailjs-Contact';

export const usePrayerRequest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const submitContactRequest = async (data: ContactRequestData) => {
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const result = await sendContactRequestEmail(data);
      
      if (result.success) {
        setSuccess(true);
        return { success: true, message: result.message };
      } else {
        setError(result.message || 'Erro ao enviar pedido');
        return { success: false, message: result.message };
      }
    } catch (err) {
      setError('Erro inesperado. Tente novamente.');
      return { success: false, message: 'Erro inesperado' };
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setError(null);
    setSuccess(false);
  };

  return {
    isLoading,
    error,
    success,
    submitContactRequest,
    resetForm,
  };
};