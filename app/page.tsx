import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { PoweredBy } from "@/components/PoweredBy";
import { TwoWay } from "@/components/TwoWay";
import { Hosts } from "@/components/Hosts";
import { DayBento } from "@/components/DayBento";
import { Languages } from "@/components/Languages";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { Closer } from "@/components/Closer";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <PoweredBy />
        <TwoWay />
        <Hosts />
        <DayBento />
        <Languages />
        <Pricing />
        <FAQ />
        <Closer />
      </main>
      <Footer />
    </>
  );
}
