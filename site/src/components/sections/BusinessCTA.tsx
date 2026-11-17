import { Network, Headset, Activity, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { businessIndicators } from "@/config/process";

const icons = {
  network: Network,
  headset: Headset,
  activity: Activity,
  shield: ShieldCheck,
} as const;

export function BusinessCTA() {
  return (
    <section className="bg-brand-900 py-24 sm:py-32">
      <Container>
        <SectionHeading
          tone="dark"
          eyebrow="Para empresas"
          title="Sua empresa não pode parar por causa da tecnologia."
          description="Conte com suporte para computadores, redes, acessos, servidores, backups e serviços digitais essenciais para a operação."
        />

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Button href="#contato" variant="onDarkPrimary" size="lg">
            Solicitar avaliação
          </Button>
          <Button href="#servicos" variant="onDark" size="lg">
            Ver soluções para empresas
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 border-t border-white/10 pt-10 sm:grid-cols-4">
          {businessIndicators.map((indicator, index) => {
            const Icon = icons[indicator.icon as keyof typeof icons];
            return (
              <Reveal key={indicator.label} delayMs={index * 80}>
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-white">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-medium text-white/85">
                    {indicator.label}
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
