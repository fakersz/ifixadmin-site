import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { diagnosisSteps } from "@/config/process";
import { contactInfo } from "@/config/site";

export function Diagnosis() {
  return (
    <section className="bg-white py-24 sm:py-32" aria-labelledby="diagnosis-heading">
      <Container>
        <SectionHeading
          titleId="diagnosis-heading"
          align="center"
          eyebrow="Antes de qualquer execução"
          title="Não sabe exatamente qual é o problema?"
          description="Descreva o que está acontecendo. Nós analisamos o cenário, identificamos a causa e indicamos o melhor caminho antes de qualquer execução."
          className="mx-auto"
        />

        <ol className="mx-auto mt-16 grid max-w-4xl gap-8 sm:grid-cols-3">
          {diagnosisSteps.map((step, index) => (
            <li key={step.step}>
              <Reveal
                delayMs={index * 120}
                className="flex h-full flex-col items-center rounded-2xl border border-surface-border bg-surface-muted/60 px-6 py-8 text-center"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-700 text-base font-semibold text-white">
                  {step.step}
                </span>
                <p className="mt-5 font-semibold text-ink">{step.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {step.description}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>

        <div className="mt-14 flex justify-center">
          <Button
            href={contactInfo.whatsapp ?? "#contato"}
            size="lg"
            target={contactInfo.whatsapp ? "_blank" : undefined}
            rel={contactInfo.whatsapp ? "noopener noreferrer" : undefined}
          >
            Falar com um técnico
          </Button>
        </div>
      </Container>
    </section>
  );
}
