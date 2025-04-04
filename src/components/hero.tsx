'use client';

import Image from 'next/image';
import { CardContainer, CardItem } from './3d-animation/3d-effect';
import { BackgroundBeamsWithCollision } from './background-animation/background-beams-with-collision';
import BorderMovingButton from './button/border-moving-button';
import HoverButton from './button/hover-button';
import ImageAnimation from './image-animation';
import { TextGenerateEffect } from './text-animation/text-generate-effect';

export default function Hero() {
  return (
    <>
      <BackgroundBeamsWithCollision backgroundImage="/assets/images/hero/bg1.png">
        <div
          id="home"
          className="pt-[200px] pb-[100px] lg:pt-[230px] lg:pb-[130px]"
        >
          <div className="bstr-container mx-auto px-3">
            <div className="flex flex-col lg:flex-row lg:flex-wrap -mx-3 mt-0">
              <div className="lg:flex-none lg:w-1/2 max-w-full px-3">
                <div className="text-center lg:text-left p-0 m-0">
                  <h5 className="font-medium mb-[15px] text-white font-sora text-[20px] lg:leading-[30px] lg:tracking-[-0.02em]">
                    We provide professional Accounting and Taxation Services
                  </h5>
                  <TextGenerateEffect
                    duration={1}
                    filter={false}
                    words="We Handle Your Finances, So You Can Focus on Growth."
                  />
                  <p className="text-white text-[18px] leading-[32px] mb-5 lg:mb-6">
                    Take control of your business success with expert tax and
                    financial consulting solutions.
                  </p>
                  <div className="mt-[30px] lg:mt-10">
                    <div className="flex justify-center flex-wrap gap-4 lg:justify-start">
                      <BorderMovingButton href="/about">
                        Schedule a Free Consultation
                      </BorderMovingButton>
                      <HoverButton
                        customClass="border-white"
                        bgAnimation="bg-white"
                        textColor="text-white"
                        href="/about"
                      >
                        Services
                      </HoverButton>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-3 lg:p-0 lg:flex-none lg:w-[41.66666667%] lg:ml-[8.33333333%] lg:px-3">
                <div className="mt-10 lg:m-0">
                  <ImageAnimation>
                    <CardContainer className="inter-var">
                      <CardItem translateZ="100" className="w-full mt-4">
                        <Image
                          src="/assets/images/hero/hero-thumb1.webp"
                          alt="hero"
                          width={1052}
                          height={1180}
                          sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          priority
                          className="h-auto w-full"
                        />
                      </CardItem>
                    </CardContainer>
                  </ImageAnimation>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BackgroundBeamsWithCollision>
    </>
  );
}
