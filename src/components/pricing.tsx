import { Card, CardContent, CardHeader, CardTitle } from '@/components/card/card';
import { PRICING_PLANS } from '@/constants';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';
import TextScrollAnimation from './text-animation/text-scroll-animation';

export default function Pricing() {
  return (
    <div
      id="pricing"
      className="py-10 md:py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pb-12 text-center">
          <TextScrollAnimation
            wrapperClass="font-semibold text-3xl md:text-5xl text-black"
            text="Prices that make sense !"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRICING_PLANS.map((plan) => (
            <Card
              key={plan.id}
              className={cn('w-full rounded-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300', {
                'bg-navy text-white': plan.isHighlighted,
                'bg-white border border-slate-200': !plan.isHighlighted
              })}
            >
              <CardHeader>
                <CardTitle className="text-xl font-semibold">Starting at</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-8">
                <div className="flex items-center justify-between text-3xl font-bold">
                  <span>{plan.price}</span>
                  <span>|</span>
                  <span>{plan.title}</span>
                </div>
                <div className="flex flex-col gap-4">
                  {plan.features.map((feature) => (
                    <div
                      key={feature.id}
                      className="flex flex-row items-center gap-2"
                    >
                      <Check className="w-4 h-4 text-primary" />
                      <div>
                        <p>{feature.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <button
                  className={cn(
                    'w-full flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 cursor-pointer',
                    {
                      'bg-white text-navy': plan.isHighlighted,
                      'bg-navy text-white': !plan.isHighlighted
                    }
                  )}
                >
                  {plan.buttonText} <plan.buttonIcon className="w-4 h-4" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
