import Faq from "@/components/ui/Faq";
import GetYourAppointment from "@/components/ui/GetYourAppointment";
import Service from "@/components/ui/Service";
import Statistics from "@/components/ui/Statistics";
import Testimonial from "@/components/ui/Testimonial";
import WhoWeAre from "@/components/ui/WhoWeAre";
import Hero from "@/components/ui/hero";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero/>
      <Statistics/>
      <WhoWeAre/>
      <Service/>
      <Testimonial/>
      <Faq/>
      <GetYourAppointment/>
    </main>
  );
}
