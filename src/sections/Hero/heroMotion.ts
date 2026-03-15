import type { Variants } from 'framer-motion';

export function getHeroMotion(reduceMotion: boolean): {
  container: Variants;
  item: Variants;
  ctaGroup: Variants;
  chips: Variants;
} {
  const itemDuration = reduceMotion ? 0.2 : 0.45;

  return {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          duration: reduceMotion ? 0.2 : 0.35,
          staggerChildren: reduceMotion ? 0.04 : 0.1,
          delayChildren: reduceMotion ? 0.02 : 0.08,
        },
      },
    },
    item: {
      hidden: { opacity: 0, y: reduceMotion ? 0 : 10 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: itemDuration, ease: [0.22, 1, 0.36, 1] },
      },
    },
    ctaGroup: {
      hidden: { opacity: 0, y: reduceMotion ? 0 : 8 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: reduceMotion ? 0.2 : 0.4, ease: [0.22, 1, 0.36, 1] },
      },
    },
    chips: {
      hidden: { opacity: 0, y: reduceMotion ? 0 : 6 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: reduceMotion ? 0.2 : 0.38, ease: [0.22, 1, 0.36, 1] },
      },
    },
  };
}
