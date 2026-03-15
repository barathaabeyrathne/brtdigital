import { Button } from '../components/Button';

const links = [
  { label: 'Who We Serve', href: '#serve' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-zinc-900 bg-zinc-950/70 py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm text-zinc-400">© {new Date().getFullYear()} brt digital. All rights reserved.</p>
          <div className="mt-3 flex flex-wrap gap-4 text-sm text-zinc-300">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="link-underline">
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <a href="#contact" aria-label="Book a London Founder Call">
          <Button variant="ghost">Book a London Founder Call</Button>
        </a>
      </div>
    </footer>
  );
}
