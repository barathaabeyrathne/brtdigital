import type { PropsWithChildren } from 'react';
import { cn } from '../lib/utils';

type SectionProps = PropsWithChildren<{
  id: string;
  title: string;
  eyebrow?: string;
  className?: string;
}>;

export function Section({ id, title, eyebrow, children, className }: SectionProps) {
  return (
    <section id={id} data-section className={cn('scroll-mt-24 py-20 md:py-28', className)} aria-labelledby={`${id}-title`}>
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="mb-12 max-w-2xl">
          {eyebrow ? <p className="mb-3 text-sm uppercase tracking-[0.2em] text-brand-300">{eyebrow}</p> : null}
          <h2 id={`${id}-title`} className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}
