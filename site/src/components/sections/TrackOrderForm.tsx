"use client";

import { useEffect, useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Info, CheckCircle2, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/Button";

const STATUS_API_URL = process.env.NEXT_PUBLIC_STATUS_API_URL ?? "https://admin.example.com/portal/service-order-status";

interface OrderStatus {
  statusLabel: string;
  deviceLabel: string | null;
  openedAt: string | null;
  closedAt: string | null;
  diagnosis: string | null;
}

type ViewState =
  | { kind: "idle" }
  | { kind: "loading" }
  | { kind: "found"; order: OrderStatus }
  | { kind: "notFound" }
  | { kind: "error" };

function formatDate(value: string | null): string | null {
  if (!value) return null;
  const date = new Date(value.replace(" ", "T"));
  if (Number.isNaN(date.getTime())) return null;
  return new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "short",
    timeStyle: "short",
  }).format(date);
}

async function lookupToken(token: string): Promise<ViewState> {
  try {
    const response = await fetch(
      `${STATUS_API_URL}?token=${encodeURIComponent(token)}`,
    );
    if (response.status === 404) {
      return { kind: "notFound" };
    }
    if (!response.ok) {
      return { kind: "error" };
    }
    const data = await response.json();
    if (!data.ok) {
      return { kind: "notFound" };
    }
    return { kind: "found", order: data.order as OrderStatus };
  } catch {
    return { kind: "error" };
  }
}

export function TrackOrderForm() {
  const searchParams = useSearchParams();
  const prefilledToken = searchParams.get("token") ?? "";
  const [token, setToken] = useState(prefilledToken);
  const [view, setView] = useState<ViewState>({ kind: "idle" });

  useEffect(() => {
    if (!prefilledToken) return;
    let active = true;
    setView({ kind: "loading" });
    lookupToken(prefilledToken).then((result) => {
      if (active) setView(result);
    });
    return () => {
      active = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setView({ kind: "loading" });
    setView(await lookupToken(token.trim()));
  }

  return (
    <div className="mx-auto max-w-md rounded-2xl border border-surface-border bg-white p-6 shadow-card sm:p-8">
      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        <div>
          <label htmlFor="os-token" className="text-sm font-medium text-ink">
            Token da OS <span aria-hidden="true">*</span>
          </label>
          <input
            id="os-token"
            name="token"
            type="text"
            required
            autoComplete="off"
            value={token}
            onChange={(event) => setToken(event.target.value)}
            placeholder="Cole aqui o token enviado pela iFix Admin"
            className="mt-2 w-full rounded-xl border border-surface-border bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-faint transition-colors focus:border-brand-500 focus-visible:outline-none"
          />
        </div>

        <Button
          type="submit"
          size="lg"
          disabled={view.kind === "loading"}
          className="w-full"
        >
          {view.kind === "loading" ? "Consultando..." : "Acompanhar atendimento"}
        </Button>
      </form>

      <div className="mt-5" aria-live="polite" role="status">
        {view.kind === "found" ? (
          <div className="rounded-xl border border-surface-border bg-surface-muted p-4">
            <div className="flex items-center gap-2 text-brand-700">
              <CheckCircle2 className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span className="font-medium">{view.order.statusLabel}</span>
            </div>
            <dl className="mt-3 space-y-1.5 text-sm text-ink-soft">
              {view.order.deviceLabel ? (
                <div className="flex justify-between gap-4">
                  <dt>Equipamento</dt>
                  <dd className="text-ink">{view.order.deviceLabel}</dd>
                </div>
              ) : null}
              {formatDate(view.order.openedAt) ? (
                <div className="flex justify-between gap-4">
                  <dt>Aberta em</dt>
                  <dd className="text-ink">{formatDate(view.order.openedAt)}</dd>
                </div>
              ) : null}
              {formatDate(view.order.closedAt) ? (
                <div className="flex justify-between gap-4">
                  <dt>Encerrada em</dt>
                  <dd className="text-ink">{formatDate(view.order.closedAt)}</dd>
                </div>
              ) : null}
            </dl>
            {view.order.diagnosis ? (
              <p className="mt-3 border-t border-surface-border pt-3 text-sm text-ink-soft">
                <span className="font-medium text-ink">Diagnóstico: </span>
                {view.order.diagnosis}
              </p>
            ) : null}
          </div>
        ) : null}

        {view.kind === "notFound" ? (
          <p className="flex items-start gap-2 text-sm text-brand-700">
            <Info className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            Não encontramos nenhum atendimento com esse token. Confira se ele
            foi copiado corretamente.
          </p>
        ) : null}

        {view.kind === "error" ? (
          <p className="flex items-start gap-2 text-sm text-brand-700">
            <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            Não foi possível consultar o andamento agora. Tente novamente em
            instantes.
          </p>
        ) : null}
      </div>

      <p className="mt-6 border-t border-surface-border pt-5 text-sm text-ink-soft">
        Ainda não tem um token de atendimento?{" "}
        <Link
          href="/#contato-form"
          className="font-medium text-brand-700 hover:text-brand-800"
        >
          Solicite atendimento pelo formulário de contato
        </Link>
        .
      </p>
    </div>
  );
}
