import { Section } from '../components/Section';

const values = ['Quality', 'Speed', 'Transparency'] as const;
const reasons = [
  'Based in London, with practical insight into UK startup and SME realities',
  'Founder-first delivery: rapid MVP execution with clear commercial priorities',
  'Business-focused decisions that connect product work to growth outcomes',
  'Senior team access with direct, transparent communication every sprint',
  'Long-term product partnership from first release to scale stage',
];

export function About() {
  return (
    <Section id="about" title="Why founders and London businesses choose brt digital" eyebrow="Why Choose Us">
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="text-lg leading-relaxed text-zinc-200">
            We partner with teams that want more than code delivery. You get a senior product and engineering partner focused on launch speed, reliable execution, and measurable business growth.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            {values.map((value) => (
              <span key={value} className="rounded-full border border-brand-500/45 bg-brand-500/10 px-4 py-1.5 text-sm text-brand-200">
                {value}
              </span>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
          <h3 className="mb-4 text-lg font-medium text-white">Why brt digital</h3>
          <ul className="space-y-3 text-sm text-zinc-300">
            {reasons.map((reason) => (
              <li key={reason} className="flex gap-2">
                <span className="mt-2 h-1 w-1 rounded-full bg-brand-400" />
                <span>{reason}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
