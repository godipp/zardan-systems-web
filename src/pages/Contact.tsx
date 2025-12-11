import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import SEOHead from '@/components/SEOHead';
import { PageHeader } from '@/components/ui/PageHeader';
import { ContentCard } from '@/components/ui/ContentCard';
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
import { COMPANY_INFO } from '@/constants';
import { Mail, MapPin } from 'lucide-react';

// Form validation schema
const contactSchema = z.object({
  name: z.string().trim().min(2, 'Name must be at least 2 characters').max(100, 'Name too long'),
  company: z.string().trim().min(2, 'Company name required').max(100, 'Company name too long'),
  email: z.string().trim().email('Invalid email address').max(255, 'Email too long'),
  message: z.string().trim().min(10, 'Message must be at least 10 characters').max(1000, 'Message too long'),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const Contact: React.FC = () => {
  const { sendEmail, isSubmitting } = useEmail();

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

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Zardan Systems',
  };

  return (
    <>
      <SEOHead
        title="Contact | Zardan Systems"
        description="Get in touch with Zardan Systems for consultation on system integration and process automation."
        schema={schema}
      />

      <div className="bg-[#F9FAFB] min-h-screen text-slate-800 py-20">
        <PageHeader
          title="Contact"
          description="Schedule a consultation to discuss integration and automation requirements."
        />

        <ContentCard>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AnimatedSection delay={150}>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-semibold text-slate-700">Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Smith" {...field} />
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
                        <FormLabel className="font-semibold text-slate-700">Company</FormLabel>
                        <FormControl>
                          <Input placeholder="Company Name" {...field} />
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
                        <FormLabel className="font-semibold text-slate-700">Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="john@company.com" {...field} />
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
                        <FormLabel className="font-semibold text-slate-700">Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Describe your integration or automation requirements"
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
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </Form>
            </AnimatedSection>

            {/* Contact Information */}
            <AnimatedSection delay={300}>
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold mb-6 text-slate-800">
                    Contact Information
                  </h2>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <Mail className="w-5 h-5 text-[#1E40AF] mt-1" />
                      <div>
                        <p className="font-medium mb-1">Email</p>
                        <a
                          href={`mailto:${COMPANY_INFO.contact.email}`}
                          className="text-slate-600 hover:text-[#1E40AF] transition-colors"
                        >
                          {COMPANY_INFO.contact.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <MapPin className="w-5 h-5 text-[#1E40AF] mt-1" />
                      <div>
                        <p className="font-medium mb-1">Address</p>
                        <a
                          href="https://www.google.com/maps/place/Zardan+Systems/@52.2036372,-3.0286611,17z/data=!3m1!4b1!4m6!3m5!1s0x4870250062fee58f:0x7714a17f5e71a1e3!8m2!3d52.2036372!4d-3.0286611!16s%2Fg%2F11ml43jgr1?entry=ttu"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-600 hover:text-[#1E40AF] transition-colors"
                        >
                          {COMPANY_INFO.address.street}<br />
                          {COMPANY_INFO.address.city}<br />
                          {COMPANY_INFO.address.country}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                  <h3 className="font-semibold mb-2 text-slate-800">Response Time</h3>
                  <p className="text-sm text-slate-600">
                    We respond to all inquiries within 3 business days.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </ContentCard>
      </div>
    </>
  );
};

export default Contact;
