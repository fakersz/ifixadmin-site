import { MessageSquare, FileCheck, Lock, Repeat, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { differentials } from "@/config/process";

const icons = {
  "message-square": MessageSquare,
  "file-check": FileCheck,
  lock: Lock,
  repeat: Repeat,
} as const;

const reportItems = [
  "Diagnóstico registrado",
  "Causa identificada",
  "Ação executada e validada",
  "Recomendações documentadas",
];

function ReportCard() {
  return (
    <div
      className="mx-auto w-full max-w-sm rounded-2xl border border-surface-border bg-white p-7 shadow-soft"
      role="img"
      aria-label="Cartão ilustrativo de relatório de atendimento com itens verificados"
    >
      <div className="flex items-center justify-between border-b border-surface-border pb-4">
        <span className="text-sm font-semibold text-ink">
          Relatório de atendimento
        </span>
        <span className="rounded-full bg-brand-50 px-2.5 py-1 text-[11px] font-medium text-brand-700">
          Concluído
        </span>
      </div>
      <ul className="mt-5 space-y-4">
        {reportItems.map((item) => (
          <li key={item} className="flex items-center gap-3">
            <CheckCircle2
              className="h-5 w-5 shrink-0 text-signal-green"
              aria-hidden="true"
            />
            <span className="text-sm text-ink-soft">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Differentials() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <Container className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="Diferenciais"
            title="Mais do que resolver o problema imediato."
          />

          <ul className="mt-10 space-y-7">
            {differentials.map((item, index) => {
              const Icon = icons[item.icon as keyof typeof icons];
              return (
                <li key={item.title}>
                  <Reveal delayMs={index * 90} className="flex gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-semibold text-ink">{item.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                        {item.description}
                      </p>
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </div>

        <Reveal>
          <ReportCard />
        </Reveal>
      </Container>
    </section>
  );
}
