'use client';
import { AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { CardContainer, CardItem } from './3d-animation/3d-effect';
import { BackgroundBeamsWithCollision } from './background-animation/background-beams-with-collision';
import BorderMovingButton from './button/border-moving-button';
import { HoverButton } from './button/hover-button';
import { TextGenerateEffect } from './text-animation/text-generate-effect';

export default function Hero() {
  return (
    <BackgroundBeamsWithCollision backgroundImage="/hero/bg1.png">
      <div
        id="home"
        className="pt-[9.5rem] pb-[6rem] lg:pt-[12.5rem] lg:pb-[8rem]"
      >
        <div className="max-w-full md:max-w-2xl lg:max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Text Section */}
            <div className="text-center lg:text-left">
              <h5 className="font-medium mb-4 text-white text-xl lg:text-2xl">
                We provide professional Accounting and Taxation Services
              </h5>
              <TextGenerateEffect
                duration={1}
                filter={false}
                words="We Handle Your Finances, So You Can Focus on Growth."
                className="text-3xl lg:text-5xl font-bold text-white mb-4"
              />
              <p className="text-white text-lg leading-relaxed mb-6">
                Take control of your business success with expert tax and financial consulting solutions.
              </p>
              <div className="flex justify-center lg:justify-start gap-4">
                <BorderMovingButton href="/about">Schedule a Free Consultation</BorderMovingButton>
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
            {/* Image Section */}
            <div className="flex justify-center">
              <AnimatePresence>
                <CardContainer>
                  <CardItem
                    translateZ="100"
                    className="w-full"
                  >
                    <Image
                      src="/hero/hero-thumb1.webp"
                      alt="hero"
                      width={526}
                      height={590}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                      className="h-auto w-full rounded-lg"
                    />
                  </CardItem>
                </CardContainer>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
