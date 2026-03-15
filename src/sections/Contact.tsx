import { zodResolver } from '@hookform/resolvers/zod';
import { motion, useReducedMotion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '../components/Button';
import { Section } from '../components/Section';
import { Toast } from '../components/Toast';
import { submitLead } from '../lib/submitLead';

const leadSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Please enter a valid email.'),
  company: z.string().optional(),
  budget: z.string().min(1, 'Please select a budget range.'),
  message: z.string().min(10, 'Message should be at least 10 characters.'),
});

type LeadFormValues = z.infer<typeof leadSchema>;

export function Contact() {
  const [toastOpen, setToastOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LeadFormValues>({
    resolver: zodResolver(leadSchema),
  });

  useEffect(() => {
    if (!toastOpen) return;
    const timeout = setTimeout(() => setToastOpen(false), 2800);
    return () => clearTimeout(timeout);
  }, [toastOpen]);

  const onSubmit = async (values: LeadFormValues) => {
    await submitLead(values);
    setToastOpen(true);
    reset();
  };

  return (
    <Section id="contact" title="Start with a 30-minute London Founder Call" eyebrow="Next Step">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6"
          initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: reduceMotion ? 0 : 0.5 }}
        >
          <div className="mb-4 text-sm text-zinc-300">
            Share your product or growth goal. We will map your highest-impact next moves and a practical launch plan.
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name" error={errors.name?.message}>
              <input {...register('name')} className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm" />
            </Field>
            <Field label="Email" error={errors.email?.message}>
              <input type="email" {...register('email')} className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm" />
            </Field>
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <Field label="Company" error={errors.company?.message}>
              <input {...register('company')} className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm" />
            </Field>
            <Field label="Budget Range" error={errors.budget?.message}>
              <select {...register('budget')} defaultValue="" className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm">
                <option value="" disabled>
                  Select budget
                </option>
                <option>£2k - £5k</option>
                <option>£5k - £15k</option>
                <option>£15k - £40k</option>
                <option>£40k+</option>
              </select>
            </Field>
          </div>
          <div className="mt-4">
            <Field label="Message" error={errors.message?.message}>
              <textarea
                {...register('message')}
                rows={5}
                className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm"
                placeholder="Tell us what you need to launch or improve"
              />
            </Field>
          </div>
          <Button type="submit" className="mt-5" disabled={isSubmitting}>
            <Send className="mr-2 h-4 w-4" />
            {isSubmitting ? 'Submitting...' : 'Book a London Founder Call'}
          </Button>
        </motion.form>

        <div className="space-y-4 rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 text-sm text-zinc-300">
          <h3 className="text-lg font-medium text-white">Direct contact</h3>
          <p>Based in London, serving startup founders and local businesses across the UK. Expect a response within 1 business day.</p>
          <ContactRow icon={<Mail className="h-4 w-4" />} label="Email" value="barathaaberathne@gmail.com" />
          <ContactRow icon={<Phone className="h-4 w-4" />} label="Phone" value="+447501996563" />
          <ContactRow icon={<MapPin className="h-4 w-4" />} label="Location" value="London, United Kingdom" />
          <div className="pt-3">
            <p className="mb-2 text-xs uppercase tracking-[0.2em] text-zinc-500">Social</p>
            <div className="flex gap-4">
              <a className="link-underline" href="https://www.linkedin.com/in/baratha-aberathne-2965b484/" aria-label="LinkedIn">
                LinkedIn
              </a>
              <a className="link-underline" href="#" aria-label="Instagram">
                Instagram
              </a>
              <a className="link-underline" href="#" aria-label="X/Twitter">
                X
              </a>
            </div>
          </div>
        </div>
      </div>
      <Toast open={toastOpen} message="Thanks. Your founder call request has been received." />
    </Section>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: ReactNode }) {
  return (
    <label className="block text-sm text-zinc-200">
      <span className="mb-1.5 inline-block">{label}</span>
      {children}
      {error ? <span className="mt-1 inline-block text-xs text-red-300">{error}</span> : null}
    </label>
  );
}

function ContactRow({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return (
    <p className="flex items-center gap-2">
      <span className="text-brand-300">{icon}</span>
      <span className="text-zinc-500">{label}:</span> <span>{value}</span>
    </p>
  );
}
