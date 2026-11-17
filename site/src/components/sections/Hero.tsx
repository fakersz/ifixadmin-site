import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HeroVisual } from "@/components/sections/HeroVisual";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden pb-20 pt-32 sm:pb-28 sm:pt-40"
    >
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="motion-safe:animate-fade-up">
          <h1 className="text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
            Tecnologia funcionando como deveria.
          </h1>
          <p className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-ink-soft">
            Infraestrutura, manutenção de equipamentos e serviços digitais
            para quem precisa de soluções confiáveis, organizadas e sem
            complicação.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button href="/acompanhar/" size="lg">
              Solicitar atendimento
            </Button>
            <Button href="#servicos" variant="secondary" size="lg">
              Conhecer os serviços
            </Button>
          </div>

          <p className="mt-8 flex items-center gap-2 text-sm text-ink-faint">
            <span
              className="h-1.5 w-1.5 rounded-full bg-signal-green"
              aria-hidden="true"
            />
            Atendimento técnico para empresas, profissionais e ambientes
            residenciais.
          </p>
        </div>

        <div className="motion-safe:animate-fade-in [animation-delay:0.2s]">
          <HeroVisual />
        </div>
      </Container>
    </section>
  );
}
