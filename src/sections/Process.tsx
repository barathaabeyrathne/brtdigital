import { motion } from 'framer-motion';
import { useReducedMotion } from 'framer-motion';
import { Section } from '../components/Section';

const steps = [
  {
    title: 'Discover',
    copy: 'Define goals, budget, and market priorities so your team focuses only on high-impact work.',
    result: 'Business outcome: clear priorities and less wasted spend.',
  },
  {
    title: 'Design',
    copy: 'Shape user journeys and product decisions around validation, conversion, and retention.',
    result: 'Business outcome: stronger early traction and better customer confidence.',
  },
  {
    title: 'Build',
    copy: 'Ship in focused iterations so founders can test quickly and adapt from real data.',
    result: 'Business outcome: faster time-to-market and earlier revenue opportunities.',
  },
  {
    title: 'Launch/Support',
    copy: 'Monitor, optimise, and scale what works with practical long-term support.',
    result: 'Business outcome: sustainable growth after launch.',
  },
] as const;

export function Process() {
  const reduceMotion = useReducedMotion();

  return (
    <Section id="process" title="A process built for launch and growth" eyebrow="How We Work">
      <div className="relative">
        <motion.div
          initial={{ scaleX: reduceMotion ? 1 : 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: reduceMotion ? 0 : 0.9 }}
          className="absolute left-6 right-6 top-5 hidden h-px origin-left bg-gradient-to-r from-brand-600/0 via-brand-500/80 to-brand-600/0 md:block"
        />
        <div className="grid gap-5 md:grid-cols-4">
          {steps.map((step, index) => (
            <motion.article
              key={step.title}
              initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : index * 0.08 }}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5 transition duration-300 hover:-translate-y-1 hover:border-brand-500/60 hover:shadow-glow"
            >
              <p className="mb-4 text-xs uppercase tracking-[0.18em] text-brand-300">0{index + 1}</p>
              <h3 className="mb-2 text-lg font-medium text-white">{step.title}</h3>
              <p className="text-sm text-zinc-300">{step.copy}</p>
              <p className="mt-3 text-xs text-brand-200">{step.result}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </Section>
  );
}
