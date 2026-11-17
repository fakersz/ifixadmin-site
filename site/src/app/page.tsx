import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Services } from "@/components/sections/Services";
import { Diagnosis } from "@/components/sections/Diagnosis";
// import { Process } from "@/components/sections/Process"; // seção "Como funciona" — desativada a pedido, código preservado
import { BusinessCTA } from "@/components/sections/BusinessCTA";
// import { About } from "@/components/sections/About"; // seção "Sobre" — desativada a pedido, código preservado
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { ContactForm } from "@/components/sections/ContactForm";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <Diagnosis />
      {/* <Process /> */}
      <BusinessCTA />
      {/* <About /> */}
      <Faq />
      <FinalCta />
      <ContactForm />
    </>
  );
}
