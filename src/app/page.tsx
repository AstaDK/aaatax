import About from "@/components/about";
import Achievement from "@/components/achievement";
import BottomToTop from "@/components/bottom-to-top";
import Hero from "@/components/hero";
import LogoComponent from "@/components/logo";
import Pricing from "@/components/pricing";
import Reason from "@/components/reason";
import Service from "@/components/service";

export default function Home() {
  return (
    <>
      <BottomToTop />
      <Hero />
      <LogoComponent />
      <Service />
      <Achievement />
      <About />
      <Reason />
      <Pricing />
    </>
  );
}
