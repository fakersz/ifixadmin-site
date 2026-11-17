"use client";

import { useMemo, useState } from "react";
import { ChevronDown, Info, Laptop, Monitor, Wifi, Server, Printer } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { repairDeviceTypes, type RepairDeviceType } from "@/config/repairs";
import { cn } from "@/lib/utils";

const deviceIcons: Record<RepairDeviceType["id"], typeof Laptop> = {
  notebook: Laptop,
  desktop: Monitor,
  rede: Wifi,
  Infraestrutura: Wifi,
  servidor: Server,
  macbooks: Laptop,
  perifericos: Printer,
};

const selectClasses =
  "w-full appearance-none rounded-xl border border-white/15 bg-white/5 px-4 py-3 pr-10 text-sm text-white transition-colors focus:border-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-900";

function DeviceIllustration({ deviceId }: { deviceId: RepairDeviceType["id"] }) {
  const Icon = deviceIcons[deviceId] ?? Laptop;
  return (
    <div
      className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-100 to-brand-300"
      role="img"
      aria-label="Ilustração do equipamento selecionado"
    >
      <Icon className="h-9 w-9 text-brand-900" strokeWidth={1.5} aria-hidden="true" />
    </div>
  );
}

export function RepairEstimator() {
  const [deviceId, setDeviceId] = useState(repairDeviceTypes[0].id);

  const device = useMemo(
    () => repairDeviceTypes.find((item) => item.id === deviceId) ?? repairDeviceTypes[0],
    [deviceId],
  );

  const [serviceIndex, setServiceIndex] = useState(0);
  const estimate = device.estimates[serviceIndex] ?? device.estimates[0];

  function handleDeviceChange(nextId: string) {
    setDeviceId(nextId);
    setServiceIndex(0);
  }

  return (
    <div className="mx-auto max-w-xl overflow-hidden rounded-3xl bg-brand-900 p-6 shadow-lift sm:p-10">
      <h2 className="text-center text-2xl font-semibold text-white sm:text-3xl">
        Selecione o equipamento
      </h2>

      <div className="mt-8 space-y-4">
        <div>
          <label htmlFor="repair-device" className="text-sm font-medium text-white/60">
            Tipo de equipamento
          </label>
          <div className="relative mt-2">
            <select
              id="repair-device"
              className={selectClasses}
              value={deviceId}
              onChange={(event) => handleDeviceChange(event.target.value)}
            >
              {repairDeviceTypes.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.label}
                </option>
              ))}
            </select>
            <ChevronDown
              className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50"
              aria-hidden="true"
            />
          </div>
        </div>

        <div>
          <label htmlFor="repair-service" className="text-sm font-medium text-white/60">
            Serviço
          </label>
          <div className="relative mt-2">
            <select
              id="repair-service"
              className={selectClasses}
              value={serviceIndex}
              onChange={(event) => setServiceIndex(Number(event.target.value))}
            >
              {device.estimates.map((item, index) => (
                <option key={item.service} value={index}>
                  {item.service}
                </option>
              ))}
            </select>
            <ChevronDown
              className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-white/10 pt-8">
        <p className="text-sm font-medium text-white/60">Faixa de valor estimada</p>

        <div className="mt-4 flex items-center gap-5">
          <DeviceIllustration deviceId={deviceId} />

          <div className="min-w-0 flex-1">
            <div className={cn("flex items-baseline justify-between gap-4 pb-3")}>
              <span className="truncate text-sm text-white/85">{estimate.service}</span>
              <span className="whitespace-nowrap text-lg font-semibold text-white">
                {estimate.priceRange}
              </span>
            </div>
            <div className="flex items-baseline justify-between gap-4 border-t border-white/10 pt-3">
              <span className="text-sm text-white/45">Outras necessidades*</span>
              <span className="text-sm text-white/45">Sob avaliação</span>
            </div>
          </div>
        </div>

        <p className="mt-5 flex items-start gap-2 text-xs leading-relaxed text-white/40">
          <Info className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          * Valores ilustrativos, para referência inicial. O orçamento real é
          definido após a avaliação técnica do equipamento.
        </p>
      </div>

      <div className="mt-8">
        <Button href="/#contato-form" variant="onDarkPrimary" size="lg" className="w-full">
          Solicitar avaliação
        </Button>
      </div>
    </div>
  );
}
