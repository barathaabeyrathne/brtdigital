import { Building2, Rocket } from 'lucide-react';
import { Section } from '../components/Section';

const audiences = [
  {
    icon: Rocket,
    title: 'Startup founders',
    copy: 'For founders who need to ship an MVP quickly, validate demand, and build a product foundation investors can trust.',
    bullets: ['Launch in weeks, not months', 'Validate the right features early', 'Scale architecture without rework'],
  },
  {
    icon: Building2,
    title: 'London businesses and SMEs',
    copy: 'For local brands ready to modernise systems, improve customer experience, and open new digital revenue streams.',
    bullets: ['Upgrade legacy digital touchpoints', 'Improve lead and sales conversion', 'Build efficient operations with modern tools'],
  },
] as const;

export function WhoWeServe() {
  return (
    <Section id="serve" title="Who we serve" eyebrow="London Focus">
      <div className="grid gap-5 md:grid-cols-2">
        {audiences.map((audience) => {
          const Icon = audience.icon;
          return (
            <article key={audience.title} className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
              <Icon className="mb-4 h-6 w-6 text-brand-400" />
              <h3 className="text-xl font-medium text-white">{audience.title}</h3>
              <p className="mt-3 text-sm text-zinc-300">{audience.copy}</p>
              <ul className="mt-4 space-y-2 text-sm text-zinc-200">
                {audience.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 rounded-full bg-brand-400" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
