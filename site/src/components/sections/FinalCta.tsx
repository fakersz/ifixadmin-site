import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function FinalCta() {
  return (
    <section className="bg-white pb-16 pt-24 sm:pt-32">
      <Container className="max-w-2xl text-center">
        <h2 className="text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Vamos entender o que você precisa?
        </h2>
        <p className="mt-4 text-balance text-lg leading-relaxed text-ink-soft">
          Explique o problema, o equipamento ou o serviço desejado. A partir
          disso, organizamos os próximos passos.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Button href="/acompanhar/" size="lg">
            Solicitar atendimento
          </Button>
          <Button href="#contato-form" variant="secondary" size="lg">
            Enviar mensagem
          </Button>
        </div>
      </Container>
    </section>
  );
}
