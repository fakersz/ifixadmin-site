import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { aboutPrinciples } from "@/config/process";

export function About() {
  return (
    <section id="sobre" className="bg-white py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Sobre a iFix Admin"
          title="Tecnologia com responsabilidade e clareza."
          description="A iFix Admin reúne manutenção técnica, infraestrutura e serviços digitais em um atendimento organizado. O objetivo é entender o cenário, corrigir o que está causando o problema e construir uma solução adequada para cada necessidade."
        />

        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          {aboutPrinciples.map((principle, index) => (
            <Reveal key={principle.title} delayMs={index * 100}>
              <div className="border-t-2 border-brand-700 pt-5">
                <p className="font-semibold text-ink">{principle.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {principle.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
