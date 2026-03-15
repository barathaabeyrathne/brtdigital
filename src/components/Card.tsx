import type { PropsWithChildren } from 'react';
import { cn } from '../lib/utils';

export function Card({ children, className }: PropsWithChildren<{ className?: string }>) {
  return (
    <article
      className={cn(
        'rounded-2xl border border-zinc-800/90 bg-zinc-900/60 p-6 backdrop-blur transition duration-300',
        className,
      )}
    >
      {children}
    </article>
  );
}
