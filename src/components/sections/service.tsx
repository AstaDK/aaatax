import { SERVICES } from '@/constants';
import TextScrollAnimation from '@/components/animations/text-scroll-animation';

export default function Service() {
  return (
    <div
      id="services"
      className="py-10 md:py-16"
    >
      <div className="max-w-full md:max-w-2xl lg:max-w-7xl mx-auto px-5">
        <div className="pb-10 md:pb-16 max-w-2xl mx-auto text-center">
          <TextScrollAnimation
            wrapperClass="lg:text-nowrap font-semibold text-4xl sm:text-6xl leading-[1.15em] tracking-tight text-black"
            text="What we do ?"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {SERVICES.map((item, i) => (
            <div
              key={i}
              className="border-2 border-gray-800 rounded-3xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 p-6 border-b-2 border-gray-800 rounded-t-3xl bg-gray-50">
                <item.icon size={32} />
                <p className="text-slate-800 font-semibold text-xl lg:text-3xl tracking-tight">{item.title}</p>
              </div>
              <div className="px-6 py-8">
                <p className="text-slate-700 text-lg lg:text-xl leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
