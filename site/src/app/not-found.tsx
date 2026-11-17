import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="py-32">
      <Container className="max-w-xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
          404
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Página não encontrada.
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-ink-soft">
          O endereço acessado não existe ou foi movido.
        </p>
        <div className="mt-8 flex justify-center">
          <Button href="/">Voltar ao início</Button>
        </div>
      </Container>
    </section>
  );
}
