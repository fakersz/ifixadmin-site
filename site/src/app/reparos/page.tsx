import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { RepairEstimator } from "@/components/sections/RepairEstimator";
import { repairFactors } from "@/config/repairs";

export const metadata: Metadata = {
  title: "Reparos e estimativa de valores",
  description:
    "Veja faixas de valores ilustrativas para os serviços de manutenção e reparo mais comuns. O orçamento final é sempre confirmado após a avaliação técnica.",
  alternates: {
    canonical: "/reparos/",
  },
};

export default function ReparosPage() {
  return (
    <>
      <section className="bg-white pb-16 pt-32 sm:pb-20 sm:pt-40">
        <Container className="max-w-2xl text-center">
          <SectionHeading
            align="center"
            eyebrow="Reparos"
            title="Quanto pode custar o seu reparo?"
            description="Veja uma faixa de valores para os serviços mais comuns. O valor final é sempre confirmado depois da avaliação técnica do equipamento."
            className="mx-auto"
          />
        </Container>
      </section>

      <section className="bg-surface-muted pb-20 pt-4 sm:pb-28">
        <Container>
          <Reveal>
            <RepairEstimator />
          </Reveal>
        </Container>
      </section>

      <section className="bg-white py-24 sm:py-32" aria-labelledby="repair-factors-heading">
        <Container className="max-w-3xl">
          <SectionHeading
            titleId="repair-factors-heading"
            align="center"
            eyebrow="Como chegamos a esse valor"
            title="Transparência antes da execução."
            className="mx-auto"
          />

          <div className="mt-14 grid gap-8 sm:grid-cols-3">
            {repairFactors.map((factor, index) => (
              <Reveal key={factor.title} delayMs={index * 100}>
                <div className="border-t-2 border-brand-700 pt-5 text-center sm:text-left">
                  <p className="font-semibold text-ink">{factor.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {factor.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-surface-muted py-24 sm:py-28">
        <Container className="max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Prefere já enviar os detalhes do seu equipamento?
          </h2>
          <p className="mt-4 text-balance text-lg leading-relaxed text-ink-soft">
            Conte o que está acontecendo e organizamos os próximos passos a
            partir da sua solicitação.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Button href="/acompanhar/" size="lg">
              Solicitar atendimento
            </Button>
            <Button href="/#servicos" variant="secondary" size="lg">
              Ver todos os serviços
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
