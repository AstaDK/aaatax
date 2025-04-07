import Counter from "@/components/achievement/counter";
import { AnimatedComponent } from "@/components/animated-image";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

export default function AchievementCard({
  data,
  index,
}: {
  data: {
    icon: LucideIcon;
    number: number;
    symbol: string;
    title: string;
  };
  index: number;
}) {
  const isLineOnMobile = index === 0 || index === 2;

  const isLineOnDesktop = index < 3;

  return (
    <div
      className={cn(
        "relative text-slate-400 flex-none basis-1/2 lg:basis-1/4 transition-opacity duration-400 ease"
      )}
    >
      <div
        className={cn(
          "absolute top-1/2 right-[-2px] h-24 w-0.5 bg-white transform -translate-y-1/2 z-10",
          {
            block: isLineOnMobile,
            "hidden lg:block": isLineOnDesktop && !isLineOnMobile,
            hidden: !isLineOnMobile && !isLineOnDesktop,
          }
        )}
      />

      <div className="rounded-xl text-center font-light">
        <div className="w-18 h-18 flex items-center justify-center bg-blue-600 rounded-lg mx-auto mb-5">
          <AnimatedComponent>
            <data.icon className="w-10 h-10 text-white" />
          </AnimatedComponent>
        </div>

        <div className="text-4xl lg:text-nowrap font-semibold leading-[1.15em] tracking-tight text-white">
          {data.number === 50 && "$"}
          <div className="hidden">{data.number}</div>
          <Counter direction="up" targetValue={data.number} /> {data.symbol}
        </div>
        <p className="text-white">{data.title}</p>
      </div>
    </div>
  );
}
