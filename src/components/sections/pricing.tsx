import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PRICING_PLANS } from '@/constants';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TextScrollAnimation from '@/components/animations/text-scroll-animation';

export default function Pricing() {
  return (
    <div
      id="pricing"
      className="py-10 md:py-16"
    >
      <div className="max-w-2xl lg:max-w-7xl mx-auto px-5">
        <div className="pb-10 md:pb-16 max-w-2xl mx-auto text-center">
          <TextScrollAnimation
            wrapperClass="lg:text-nowrap font-semibold text-4xl sm:text-6xl leading-[1.15em] tracking-tight text-slate-900"
            text="Prices that make sense !"
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {PRICING_PLANS.map((plan) => (
            <Card
              key={plan.id}
              className={cn('group hover:shadow-xl hover:-translate-y-1 transition-all duration-300', {
                'bg-navy text-white': plan.isHighlighted,
                'bg-white border border-slate-200': !plan.isHighlighted
              })}
            >
              <CardHeader>
                <CardTitle>Starting at</CardTitle>
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
                      className="flex items-center gap-2"
                    >
                      <Check className="w-4 h-4 text-primary" />
                      <p>{feature.title}</p>
                    </div>
                  ))}
                </div>
                <Button
                  variant={plan.isHighlighted ? 'navy' : 'default'}
                  className="w-full"
                >
                  {plan.buttonText}
                  <plan.buttonIcon className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
