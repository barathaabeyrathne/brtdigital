import { AnimatePresence, motion } from 'framer-motion';

type ToastProps = {
  message: string;
  open: boolean;
};

export function Toast({ message, open }: ToastProps) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          role="status"
          aria-live="polite"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 14 }}
          className="fixed bottom-6 right-6 z-[90] rounded-xl border border-brand-500/60 bg-zinc-900 px-4 py-3 text-sm text-zinc-100 shadow-glow"
        >
          {message}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
