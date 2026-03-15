import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { Button } from '../../components/Button';
import { HeroScan } from './HeroScan';
import { getHeroMotion } from './heroMotion';

const capabilities = ['MVP Launch', 'Product Strategy', 'Scalable Architecture', 'Revenue Growth', 'Founder Support'];
const quickWins = ['Clarity on product scope', 'Launch-ready technical plan', 'Growth priorities for first 90 days'];

export function Hero() {
  const reduceMotion = useReducedMotion();
  const variants = getHeroMotion(Boolean(reduceMotion));

  return (
    <section id="top" className="relative overflow-hidden border-b border-zinc-900/80 pb-20 pt-24 md:pb-28 md:pt-32">
      <div className="pointer-events-none absolute inset-0 z-0 noise-mask opacity-50" />
      <div className="pointer-events-none absolute inset-0 z-0 bg-grid bg-[size:34px_34px]" />
      <HeroScan reduceMotion={Boolean(reduceMotion)} />

      <motion.div
        className="relative z-10 mx-auto grid w-full max-w-6xl gap-10 px-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-end"
        variants={variants.container}
        initial="hidden"
        animate="visible"
      >
        <div>
          <motion.p
            variants={variants.item}
            className="mb-5 inline-block rounded-full border border-brand-500/45 bg-brand-500/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-brand-300"
          >
            London-based digital partner
          </motion.p>

          <motion.h1 variants={variants.item} className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            Launch faster. Validate sooner. Scale with confidence.
          </motion.h1>

          <motion.p variants={variants.item} className="mt-6 max-w-2xl text-base text-zinc-300 md:text-lg">
            We help startup founders and ambitious London businesses turn product ideas into revenue-ready digital platforms without the usual delivery noise.
          </motion.p>

          <motion.div variants={variants.ctaGroup} className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#contact" aria-label="Book a London Founder Call">
              <Button>Book a London Founder Call</Button>
            </a>
            <a href="#work" aria-label="See Case Studies" className="inline-flex items-center gap-2 text-sm text-zinc-200 transition hover:text-brand-300">
              See Case Studies
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.div variants={variants.chips} className="mt-12 flex flex-wrap gap-3">
            {capabilities.map((capability) => (
              <span
                key={capability}
                className="rounded-full border border-zinc-800 bg-zinc-900/70 px-3 py-1.5 text-xs text-zinc-300 transition duration-300 hover:-translate-y-0.5 hover:border-brand-500/75 hover:bg-zinc-900 hover:text-brand-300"
              >
                {capability}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.aside
          variants={variants.item}
          className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 backdrop-blur-sm lg:ml-auto lg:max-w-md"
          aria-label="Founder call outcomes"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-brand-300">What you leave with</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white">A practical launch plan, not vague advice.</h2>
          <ul className="mt-5 space-y-3 text-sm text-zinc-300">
            {quickWins.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 grid grid-cols-2 gap-3 border-t border-zinc-800 pt-4">
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-zinc-500">Typical first release</p>
              <p className="mt-1 text-lg font-semibold text-white">4-8 weeks</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-zinc-500">Founder call</p>
              <p className="mt-1 text-lg font-semibold text-white">30 min</p>
            </div>
          </div>
        </motion.aside>
      </motion.div>
    </section>
  );
}
