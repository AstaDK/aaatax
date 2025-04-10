import TextScrollAnimation from '@/components/animations/text-scroll-animation';
import { SERVICES } from '@/constants';
import { GlowingEffect } from '../animations/glowing-effect';
import { Card, CardContent, CardHeader } from '../ui/card';

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
            <Card
              key={i}
              className="relative border border-gray-100 rounded-3xl shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
            >
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              />
              <CardHeader className="flex flex-col gap-4">
                <span className="w-fit rounded-lg border border-gray-600 p-2">
                  <item.icon
                    className="transition-all duration-300 group-hover:translate-y-0.5"
                    size={32}
                  />
                </span>
                <h3 className="text-slate-800 font-semibold text-xl lg:text-3xl tracking-tight">{item.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 text-lg lg:text-xl leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
