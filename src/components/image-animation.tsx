'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ReactNode } from 'react';

const variants = {
  hidden: { scale: 0 },
  visible: { scale: 1 },
};

const ImageAnimation = ({ children }: { children: ReactNode }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={variants}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default ImageAnimation;
