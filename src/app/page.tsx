import About from '@/components/sections/about';
import Achievement from '@/components/sections/achievement';
import Hero from '@/components/sections/hero';
import Pricing from '@/components/sections/pricing';
import Service from '@/components/sections/service';
import Solution from '@/components/sections/solution';

export default function Home() {
  return (
    <>
      <Hero />
      <Service />
      <Achievement />
      <About />
      <Solution />
      <Pricing />
    </>
  );
}
