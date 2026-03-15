import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { cn } from '../lib/utils';

type ButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: 'primary' | 'ghost';
    asChild?: boolean;
    className?: string;
  }
>;

export function Button({ className, variant = 'primary', children, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'group relative inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition duration-300',
        variant === 'primary' &&
          'overflow-hidden border border-brand-400/60 bg-brand-500 text-zinc-950 shadow-glow hover:shadow-[0_0_0_1px_rgba(16,185,129,.35),0_20px_30px_rgba(16,185,129,.18)]',
        variant === 'ghost' &&
          'border border-zinc-700 bg-zinc-900/60 text-zinc-100 hover:border-brand-500/60 hover:text-brand-300',
        className,
      )}
      {...props}
    >
      {variant === 'primary' && (
        <span className="pointer-events-none absolute inset-0 -translate-x-[125%] skew-x-12 bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-700 group-hover:translate-x-[125%]" />
      )}
      <span className="relative z-10">{children}</span>
    </button>
  );
}
