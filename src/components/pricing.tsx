import { Card, CardContent, CardHeader, CardTitle } from '@/components/card/card';
import { PRICING_PLANS } from '@/constants';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';
import TextScrollAnimation from './text-animation/text-scroll-animation';
import { Button } from './button/button';

export default function Pricing() {
  return (
    <div
      id="pricing"
      className="py-10 md:py-16"
    >
      <div className="max-w-full md:max-w-2xl lg:max-w-7xl mx-auto px-5">
        <div className="pb-10 md:pb-16 max-w-2xl mx-auto text-center">
          <TextScrollAnimation
            wrapperClass="lg:text-nowrap font-semibold text-4xl sm:text-6xl leading-[1.15em] tracking-tight text-black"
            text="Prices that make sense !"
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
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
                <div className="flex items-center justify-between md:text-3xl font-bold">
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
                <Button
                  className={cn(
                    'w-full flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105',
                    {
                      'bg-white text-navy': plan.isHighlighted,
                      'bg-navy text-white': !plan.isHighlighted
                    }
                  )}
                >
                  {plan.buttonText} <plan.buttonIcon className="w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
