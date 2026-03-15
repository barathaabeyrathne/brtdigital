import { motion } from 'framer-motion';

type HeroScanProps = {
  reduceMotion: boolean;
};

export function HeroScan({ reduceMotion }: HeroScanProps) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <motion.div
        className="absolute -left-1/2 bottom-[-25%] h-[170%] w-[56%]"
        style={{
          backgroundImage: 'linear-gradient(120deg, rgba(16,185,129,0), rgba(16,185,129,0.18), rgba(16,185,129,0))',
          opacity: 0.14,
          filter: 'blur(0.5px)',
        }}
        animate={
          reduceMotion
            ? undefined
            : {
                x: ['0%', '165%'],
                y: ['0%', '-28%'],
              }
        }
        transition={
          reduceMotion
            ? undefined
            : {
                duration: 10,
                ease: 'easeInOut',
                repeat: Number.POSITIVE_INFINITY,
                repeatType: 'loop',
              }
        }
      />
    </div>
  );
}
