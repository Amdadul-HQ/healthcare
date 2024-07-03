import Statistics from "@/components/ui/Statistics";
import WhoWeAre from "@/components/ui/WhoWeAre";
import Hero from "@/components/ui/hero";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero/>
      <Statistics/>
      <WhoWeAre/>
    </main>
  );
}
