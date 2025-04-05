'use client';
import { motion } from 'framer-motion';

export const PinPerspective = ({ title, href }: { title?: string; href?: string }) => {
  return (
    <motion.div className="h-[400px] lg:h-[500px] md:h-[450px] w-full flex items-center justify-center opacity-0 group-hover/pin:opacity-100 z-[60] transition duration-500">
      <div className="w-full h-full -mt-7 flex-none inset-0 relative z-10">
        <div className="absolute top-0 inset-x-0 flex justify-center z-20">
          <a
            href={href}
            target={'_blank'}
            className="relative flex space-x-2 items-center rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 z-30"
          >
            <span className="relative text-white text-xs font-bold inline-block py-0.5">{title}</span>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover/btn:opacity-40"></span>
          </a>
        </div>

        <div
          style={{
            perspective: '1000px',
            transform: 'rotateX(70deg) translateZ(0)'
          }}
          className="absolute left-1/2 top-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2"
        >
          {/* Ripple effects */}
          {[0, 2, 4].map((delay) => (
            <motion.div
              key={delay}
              initial={{ opacity: 0, scale: 0, x: '-50%', y: '-50%' }}
              animate={{ opacity: [0, 1, 0.5, 0], scale: 1 }}
              transition={{ duration: 6, repeat: Infinity, delay }}
              className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-full bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            />
          ))}
        </div>

        {/* Bottom light effect */}
        <motion.div className="absolute left-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-700 translate-y-[14px] w-px h-20 group-hover/pin:h-56 blur-[2px] shadow-[0_0_8px_rgba(14,116,144,0.6)]" />
        <motion.div className="absolute left-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-700 translate-y-[14px] w-px h-20 group-hover/pin:h-56 shadow-[0_0_4px_rgba(14,116,144,0.6)]" />
        <motion.div className="absolute left-1/2 translate-x-[-1.5px] bottom-1/2 bg-cyan-800 translate-y-[14px] w-[4px] h-[4px] rounded-full z-40 blur-[3px] shadow-[0_0_4px_rgba(14,116,144,0.8)]" />
        <motion.div className="absolute left-1/2 translate-x-[-0.5px] bottom-1/2 bg-cyan-600 translate-y-[14px] w-[2px] h-[2px] rounded-full z-40 shadow-[0_0_2px_rgba(14,116,144,0.8)]" />
      </div>
    </motion.div>
  );
};
