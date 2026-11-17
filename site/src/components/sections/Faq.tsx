import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { faqItems } from "@/config/faq";

export function Faq() {
  return (
    <section className="bg-surface-muted py-24 sm:py-32" aria-labelledby="faq-heading">
      <Container className="max-w-3xl">
        <SectionHeading
          titleId="faq-heading"
          eyebrow="Perguntas frequentes"
          title="Dúvidas comuns sobre o atendimento."
        />

        <div className="mt-12">
          <Accordion items={faqItems} />
        </div>
      </Container>
    </section>
  );
}
