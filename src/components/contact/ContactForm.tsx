import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useTranslation } from 'react-i18next';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useEmail } from '@/hooks/useEmail';

type ContactFormValues = z.infer<ReturnType<typeof getContactSchema>>;

const getContactSchema = (t: (key: string) => string) =>
  z.object({
    name: z
      .string()
      .trim()
      .min(2, t('contact.validation.nameMin'))
      .max(100, t('contact.validation.nameMax')),
    company: z
      .string()
      .trim()
      .min(2, t('contact.validation.companyMin'))
      .max(100, t('contact.validation.companyMax')),
    email: z
      .string()
      .trim()
      .email(t('contact.validation.emailInvalid'))
      .max(255, t('contact.validation.emailMax')),
    message: z
      .string()
      .trim()
      .min(10, t('contact.validation.messageMin'))
      .max(1000, t('contact.validation.messageMax')),
  });

export const ContactForm: React.FC = () => {
  const { t } = useTranslation();
  const { sendEmail, isSubmitting } = useEmail();

  const contactSchema = getContactSchema(t);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      company: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    const success = await sendEmail(data);
    if (success) {
      form.reset();
    }
  };

  return (
    <AnimatedSection delay={150}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold text-slate-700">
                  {t('contact.form.name')}
                </FormLabel>
                <FormControl>
                  <Input placeholder={t('contact.form.namePlaceholder')} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold text-slate-700">
                  {t('contact.form.company')}
                </FormLabel>
                <FormControl>
                  <Input placeholder={t('contact.form.companyPlaceholder')} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold text-slate-700">
                  {t('contact.form.email')}
                </FormLabel>
                <FormControl>
                  <Input type="email" placeholder={t('contact.form.emailPlaceholder')} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold text-slate-700">
                  {t('contact.form.message')}
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder={t('contact.form.messagePlaceholder')}
                    className="min-h-[150px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full bg-[#1E3A8A] hover:bg-[#3B82F6] text-white rounded-md"
            disabled={isSubmitting}
          >
            {isSubmitting ? t('contact.form.sending') : t('contact.form.send')}
          </Button>
        </form>
      </Form>
    </AnimatedSection>
  );
};

