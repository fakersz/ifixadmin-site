import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { processSteps } from "@/config/process";

export function Process() {
  return (
    <section
      id="como-funciona"
      className="bg-surface-muted py-24 sm:py-32"
      aria-labelledby="process-heading"
    >
      <Container>
        <SectionHeading
          titleId="process-heading"
          eyebrow="Como funciona"
          title="Atendimento técnico sem confusão."
        />

        <ol className="mt-16 grid gap-10 sm:grid-cols-4 sm:gap-6">
          {processSteps.map((step, index) => {
            const isLast = index === processSteps.length - 1;
            return (
              <li key={step.number} className="relative">
                <Reveal delayMs={index * 110}>
                  <div className="flex items-center gap-4 sm:block">
                    <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-brand-700 bg-white text-sm font-semibold text-brand-700">
                      {step.number}
                    </span>
                    {!isLast ? (
                      <span
                        aria-hidden="true"
                        className="absolute left-6 top-12 h-[calc(100%+1.5rem)] w-px bg-surface-border sm:left-12 sm:right-[-1.5rem] sm:top-6 sm:h-px sm:w-auto"
                      />
                    ) : null}
                  </div>
                  <div className="mt-4 pl-16 sm:pl-0">
                    <p className="font-semibold text-ink">{step.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
