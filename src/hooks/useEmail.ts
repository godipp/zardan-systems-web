import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { ContactFormData, EmailTemplateParams, EmailResponse } from '@/types';
import { API_CONFIG } from '@/constants';
import { useToast } from '@/hooks/use-toast';

export const useEmail = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const sendEmail = async (data: ContactFormData): Promise<boolean> => {
    setIsSubmitting(true);

    try {
      const templateParams: EmailTemplateParams = {
        name: data.name,
        company: data.company,
        email: data.email,
        message: data.message,
        reply_to: data.email,
      };

      const response: EmailResponse = await emailjs.send(
        API_CONFIG.emailjs.serviceId,
        API_CONFIG.emailjs.templateId,
        templateParams,
        { publicKey: API_CONFIG.emailjs.publicKey }
      );

      if (response.status === 200) {
        toast({
          title: 'Message sent',
          description: "We'll respond within 3 business days.",
        });
        return true;
      } else {
        toast({
          title: 'Error',
          description: 'Failed to send message. Please try again later.',
        });
        return false;
      }
    } catch (error) {
      console.error('Email sending error:', error);
      toast({
        title: 'Error',
        description: 'Message failed to send. Please check your connection.',
      });
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    sendEmail,
    isSubmitting,
  };
};
