import { ABOUT_US_CONTENT } from '@/constants';
import Image from 'next/image';
import { AnimatedComponent } from '@/components/animations/animated-image';
import { HoverButton } from '@/components/animations/hover-button';
import TextScrollAnimation from '@/components/animations/text-scroll-animation';

export default function About() {
  return (
    <div
      id="about"
      className="py-10 lg:py-16"
    >
      <div className="max-w-full md:max-w-2xl lg:max-w-7xl mx-auto px-5">
        <div className="flex flex-wrap -mx-3">
          <div className="w-full px-3 lg:w-1/2">
            <div className="relative mb-10 lg:mb-[115px] lg:mr-[115px]">
              <AnimatedComponent>
                <Image
                  height={940}
                  width={960}
                  loading="lazy"
                  src="/hero/discuss.webp"
                  alt="discuss"
                  sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 480px"
                  className="w-full h-auto transition-transform duration-300 hover:scale-105"
                />
              </AnimatedComponent>
              <div className="hidden lg:block absolute -bottom-[75px] -right-[34px] w-2/5 xl:w-4/6 xl:-bottom-[100px] xl:-right-[120px]">
                <AnimatedComponent>
                  <Image
                    height={640}
                    width={720}
                    loading="lazy"
                    src="/hero/members.webp"
                    alt="members"
                    sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 480px"
                    className="w-full h-auto transition-transform duration-300 hover:scale-105"
                  />
                </AnimatedComponent>
              </div>
              <div className="hidden lg:block absolute top-[70px] -right-[82px] -z-10">
                <AnimatedComponent>
                  <Image
                    height={200}
                    width={133}
                    loading="lazy"
                    src="/shape/shape1.svg"
                    alt="thumb"
                    className="w-auto h-auto"
                  />
                </AnimatedComponent>
              </div>
              <div className="hidden lg:block absolute -bottom-[92px] left-[200px] -z-10">
                <AnimatedComponent>
                  <Image
                    height={107}
                    width={104}
                    loading="lazy"
                    src="/shape/shape2.svg"
                    alt="thumb"
                    className="w-auto h-auto"
                  />
                </AnimatedComponent>
              </div>
            </div>
          </div>

          <div className="w-full px-3 lg:w-1/2 mt-8 lg:mt-0">
            <div className="lg:ml-10">
              <TextScrollAnimation
                wrapperClass="text-3xl xl:text-4xl font-semibold text-slate-800 mb-5 leading-tight tracking-tight"
                text="Committed to Your Financial Success"
              />
              <h2 className="mb-5 text-xl font-semibold text-slate-800 leading-8 tracking-tight">
                With over a decade of experience, AAA Business and Tax Consulting has built a strong reputation for
                delivering expert tax, accounting, and business advisory services.{' '}
                <span className="text-red-700">
                  Our team brings extensive experience working with Fortune 500 companies and has earned the prestigious
                  Enrolled Agent (EA) certification, demonstrating our deep expertise in taxation.
                </span>
              </h2>
              {ABOUT_US_CONTENT.map((paragraph, index) => (
                <p
                  key={index}
                  className="mb-5 text-slate-600 leading-8 text-base"
                >
                  {paragraph}
                </p>
              ))}
              <div className="mt-8 lg:mt-10">
                <HoverButton
                  customClass="border-blue-600 text-white"
                  bgAnimation="bg-blue-600"
                  textColor="text-blue-600"
                  href="#about"
                >
                  More About Us
                </HoverButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
