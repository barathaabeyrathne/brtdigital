import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../lib/utils';

const links = [
  { label: 'Who We Serve', href: '#serve', id: 'serve' },
  { label: 'Services', href: '#services', id: 'services' },
  { label: 'Work', href: '#work', id: 'work' },
  { label: 'Process', href: '#process', id: 'process' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Contact', href: '#contact', id: 'contact' },
] as const;

type NavProps = {
  activeSection: string;
};

export function Nav({ activeSection }: NavProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-900/80 bg-zinc-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6" aria-label="Primary">
        <a href="#top" className="text-lg font-semibold tracking-tight text-white">
          brt <span className="text-brand-400">digital</span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className={cn(
                  'link-underline text-sm text-zinc-300 transition-colors hover:text-white',
                  activeSection === link.id && 'text-brand-300 after:scale-x-100',
                )}
                aria-current={activeSection === link.id ? 'page' : undefined}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="rounded-md border border-zinc-800 p-2 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open ? (
        <div id="mobile-menu" className="border-t border-zinc-900 bg-zinc-950 px-6 py-4 md:hidden">
          <ul className="space-y-3">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className={cn('text-sm text-zinc-200', activeSection === link.id && 'text-brand-300')}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
