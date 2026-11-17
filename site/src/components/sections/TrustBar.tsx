import { Search, ClipboardList, SlidersHorizontal, LifeBuoy } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { trustPoints } from "@/config/process";

const icons = {
  search: Search,
  clipboard: ClipboardList,
  sliders: SlidersHorizontal,
  "life-buoy": LifeBuoy,
} as const;

export function TrustBar() {
  return (
    <section className="border-y border-surface-border bg-white py-12 sm:py-14" aria-label="Diferenciais de atendimento">
      <Container>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((point, index) => {
            const Icon = icons[point.icon as keyof typeof icons];
            return (
              <Reveal key={point.title} delayMs={index * 80}>
                <div className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-medium text-ink">{point.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                      {point.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
