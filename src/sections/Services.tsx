import { motion } from 'framer-motion';
import { Card } from '../components/Card';
import { Section } from '../components/Section';
import { services } from '../data/services';
import { fadeUp, useMotionProps } from '../lib/motion';

export function Services() {
  const motionProps = useMotionProps();

  return (
    <Section id="services" title="Services designed for business outcomes" eyebrow="What We Deliver">
      <div className="grid gap-5 md:grid-cols-2">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.title}
              variants={fadeUp}
              {...motionProps}
              transition={{ ...motionProps.transition, delay: index * 0.08 }}
              className="group"
            >
              <Card className="relative h-full overflow-hidden border-zinc-800 transition duration-300 hover:-translate-y-1.5 hover:border-brand-500/60 hover:shadow-glow">
                <div className="pointer-events-none absolute inset-0 rounded-2xl border border-transparent transition duration-500 group-hover:border-brand-500/50" />
                <Icon className="mb-4 h-6 w-6 text-brand-400" />
                <h3 className="mb-4 text-xl font-medium text-white">{service.title}</h3>
                <ul className="mb-5 space-y-2 text-sm text-zinc-300">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 rounded-full bg-brand-400" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <p className="max-h-0 overflow-hidden text-sm text-brand-200 opacity-0 transition-all duration-300 group-hover:max-h-20 group-hover:opacity-100">
                  {service.extra}
                </p>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
