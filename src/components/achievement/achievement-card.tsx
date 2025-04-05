import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import Counter from './counter';

type Achievement = {
  icon: LucideIcon;
  number: number;
  symbol: string;
  title: string;
};

const variants = {
  hidden: { scale: 0 },
  visible: { scale: 1 },
};

export default function AchievementCard({ data, index }: { data: Achievement; index: number }) {
  const isOdd = index % 2 === 0;

  return (
    <div
      className={cn(
        "relative text-gray-400 flex-none basis-1/2 lg:basis-[160px] transition-opacity transform duration-400 ease",
        "before:absolute before:top-1/2 before:h-24 before:w-0.5 before:bg-white before:transform before:-translate-y-1/2",
        {
          'before:content-[""] before:right-0': isOdd,
          'before:content-none lg:before:content-[""]': !isOdd,
          "lg:before:right-[-25%] xl:before:right-[-57%]": true,
          "last:before:hidden": true,
        }
      )}
    >
      <div className="rounded-xl text-center font-light backdrop-blur-sm">
        <div className="w-18 h-18 flex items-center justify-center bg-blue-600 rounded-lg mx-auto mb-5">
          <AnimatePresence>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={variants}
              transition={{ duration: 0.5 }}
            >
              <data.icon className="w-10 h-10 text-white" />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="text-2xl lg:text-4xl lg:text-nowrap font-semibold leading-[1.15em] tracking-tight text-white">
          {data.number === 50 && "$"}
          <div className="hidden">{data.number}</div>
          <Counter direction="up" targetValue={data.number} /> {data.symbol}
        </div>
        <p className="text-white">{data.title}</p>
      </div>
    </div>
  );
}
