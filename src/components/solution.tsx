import { SOLUTIONS } from '@/constants';
import { cn } from '@/lib/utils';
import TextScrollAnimation from './text-animation/text-scroll-animation';

export default function Solution() {
  return (
    <div
      id="solutions"
      className="py-10 md:py-16"
    >
      <div className="max-w-full md:max-w-2xl lg:max-w-7xl mx-auto px-5">
        <div className="pb-10 md:pb-16 max-w-2xl mx-auto text-center">
          <TextScrollAnimation
            wrapperClass="lg:text-nowrap font-semibold text-4xl sm:text-6xl leading-[1.15em] tracking-tight text-black"
            text="Why choose us ?"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative">
          {SOLUTIONS.map((feature, index) => (
            <div
              key={feature.title}
              className={cn(
                'flex flex-col lg:border-r  py-10 relative group/feature border-slate-800',
                (index === 0 || index === 3) && 'lg:border-l dark:border-slate-800',
                index < 3 && 'lg:border-b border-slate-800'
              )}
            >
              {index < 3 && (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-slate-100 to-transparent pointer-events-none" />
              )}
              {index >= 3 && (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-slate-100 to-transparent pointer-events-none" />
              )}
              <div className="mb-4 relative z-10 px-10 dark:text-slate-600">
                <feature.icon />
              </div>
              <div className="text-2xl font-bold mb-2 relative z-10 px-10">
                <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-slate-700 group-hover/feature:bg-slate-500 transition-all duration-200 origin-center" />
                <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-slate-800">
                  {feature.title}
                </span>
              </div>
              <p className="text-lg text-slate-600 relative z-10 px-10">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
