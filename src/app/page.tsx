import BusinessModel from "@/components/businessModel";
import { FsSolution } from "@/components/fsSolution";
import { Hassel } from "@/components/hassel";
import HeroSection from "@/components/hero";
import Usp from "@/components/ourUsp";
import TargetMarket from "@/components/targetMarket";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Hassel />
      <FsSolution/>
      <TargetMarket/>
      <Usp/>
      <BusinessModel/>
    </div>
  );
}
