import { SERVICES } from '@/constants';
import { GlareCard } from './feature/glare-card';
import TextScrollAnimation from './text-animation/text-scroll-animation';

const variants = {
  hidden: { filter: "blur(10px)", opacity: 0, y: 20 },
  visible: {
    filter: "blur(0px)",
    opacity: 1,
    y: 0,
    transition: { ease: "linear" },
  },
};

export default function Service() {
  return (
    <div id="services" className="py-10 md:py-20">
      <div className="max-w-full md:max-w-2xl lg:max-w-7xl mx-auto px-5">
        <div className="pb-12 md:pb-20 max-w-2xl mx-auto text-center">
          <TextScrollAnimation
            variants={variants}
            wrapperClass="lg:text-nowrap font-semibold text-2xl sm:text-5xl leading-[1.15em] tracking-tight text-black"
            text="What we do ?"
          />
        </div>
        <div className="flex flex-wrap -mx-3">
          {SERVICES.map((item, i) => (
            <div key={i} className="p-3 w-full md:w-1/2">
              <GlareCard>
                <div className="flex gap-6 m-6">
                  <div className="bg-gray-100 w-24 h-24 flex-shrink-0 flex items-center justify-center rounded-xl transition-all duration-300 ease-in-out">
                    <item.icon size={49} />
                  </div>
                  <div className="text-left">
                    <h2 className="font-semibold text-xl leading-7 tracking-tight text-gray-800 mb-2">
                      {item.title}
                    </h2>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
              </GlareCard>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}