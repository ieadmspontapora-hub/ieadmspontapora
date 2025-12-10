import { useState } from 'react';
import { sendPrayerRequestEmail } from '@/lib/emailjs-service';
import { PrayerRequestData } from '@/lib/emailjs-service';

export const usePrayerRequest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const submitPrayerRequest = async (data: PrayerRequestData) => {
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const result = await sendPrayerRequestEmail(data);
      
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
    submitPrayerRequest,
    resetForm,
  };
};