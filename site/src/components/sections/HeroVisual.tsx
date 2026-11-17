import { Server, ShieldCheck, Headset, Lock, Wifi } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatusCardProps {
  icon: React.ReactNode;
  label: string;
  status: string;
  tone?: "green" | "amber";
  className?: string;
}

function StatusCard({ icon, label, status, tone = "green", className }: StatusCardProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 rounded-2xl border border-surface-border bg-white/95 px-4 py-3.5 shadow-card backdrop-blur-sm",
        className,
      )}
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block text-[13px] font-medium leading-tight text-ink">
          {label}
        </span>
        <span className="mt-0.5 flex items-center gap-1.5">
          <span
            className={cn(
              "h-1.5 w-1.5 shrink-0 rounded-full motion-safe:animate-pulse-soft",
              tone === "green" ? "bg-signal-green" : "bg-signal-amber",
            )}
            aria-hidden="true"
          />
          <span className="text-xs text-ink-faint">{status}</span>
        </span>
      </span>
    </div>
  );
}

export function HeroVisual() {
  return (
    <div
      className="relative mx-auto w-full max-w-md py-6 sm:max-w-lg lg:max-w-none lg:py-0"
      role="img"
      aria-label="Painel ilustrativo mostrando indicadores de rede estável, backup protegido, servidor online, chamado em atendimento e segurança ativa"
    >
      <div className="relative rounded-[2rem] border border-surface-border bg-gradient-to-b from-surface-muted to-white p-6 shadow-soft sm:p-8">
        <div className="absolute -inset-x-6 -top-6 -z-10 h-40 rounded-full bg-brand-100/50 blur-3xl sm:-inset-x-10" aria-hidden="true" />

        <StatusCard
          icon={<Wifi className="h-5 w-5" aria-hidden="true" />}
          label="Rede"
          status="Estável"
          className="motion-safe:animate-float"
        />

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <StatusCard
            icon={<ShieldCheck className="h-5 w-5" aria-hidden="true" />}
            label="Backup"
            status="Protegido"
            className="motion-safe:animate-float [animation-delay:0.3s]"
          />
          <StatusCard
            icon={<Server className="h-5 w-5" aria-hidden="true" />}
            label="Servidor"
            status="Online"
            className="motion-safe:animate-float [animation-delay:0.6s]"
          />
          <StatusCard
            icon={<Headset className="h-5 w-5" aria-hidden="true" />}
            label="Chamado"
            status="Em atendimento"
            tone="amber"
            className="motion-safe:animate-float [animation-delay:0.9s]"
          />
          <StatusCard
            icon={<Lock className="h-5 w-5" aria-hidden="true" />}
            label="Segurança"
            status="Ativa"
            className="motion-safe:animate-float [animation-delay:1.2s]"
          />
        </div>
      </div>
    </div>
  );
}
