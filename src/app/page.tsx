import Achievement from "@/components/achievement";
import BottomToTop from "@/components/bottom-to-top";
import Hero from "@/components/hero";
import LogoComponent from "@/components/logo";
import Navbar from "@/components/navbar";
import Service from "@/components/service";

export default function Home() {
  return (
    <>
      <Navbar />
      <BottomToTop />
      <Hero />
      <LogoComponent />
      <Service />
      <Achievement />
    </>
  );
}
