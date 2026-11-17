import { Network, Laptop, Headset, Server, ShieldCheck, Code2, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { services, type ServiceIcon } from "@/config/services";

const icons: Record<ServiceIcon, typeof Network> = {
  network: Network,
  laptop: Laptop,
  headset: Headset,
  server: Server,
  shield: ShieldCheck,
  code: Code2,
};

export function Services() {
  return (
    <section id="servicos" className="bg-surface-muted py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Serviços"
          title="Do equipamento à infraestrutura completa."
          description="A iFix Admin cuida dos problemas técnicos do dia a dia e também estrutura ambientes digitais mais seguros, estáveis e eficientes."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = icons[service.icon];
            return (
              <Reveal key={service.slug} delayMs={(index % 3) * 90}>
                <article className="group flex h-full flex-col rounded-2xl border border-surface-border bg-white p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lift">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700 transition-colors duration-300 group-hover:bg-brand-700 group-hover:text-white">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 text-lg font-semibold text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
                    {service.description}
                  </p>
                  <a
                    href="#contato"
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand-700 transition-all duration-300 hover:gap-2.5 hover:text-brand-800"
                  >
                    Ver detalhes
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
