import About from '@/components/about';
import Achievement from '@/components/achievement';
import BottomToTop from '@/components/bottom-to-top';
import Hero from '@/components/hero';
import LogoComponent from '@/components/logo';
import Pricing from '@/components/pricing';
import Service from '@/components/service';
import Solution from '@/components/solution';

export default function Home() {
  return (
    <>
      <BottomToTop />
      <Hero />
      <LogoComponent />
      <Service />
      <Achievement />
      <About />
      <Solution />
      <Pricing />
    </>
  );
}
