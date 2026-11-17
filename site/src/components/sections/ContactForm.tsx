"use client";

import { useId, useState, type FormEvent } from "react";
import { Info, Loader2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { contactInfo } from "@/config/site";
import {
  serviceTypeOptions,
  attendancePreferenceOptions,
} from "@/config/contact-form";

type SubmitState = "idle" | "submitting" | "whatsappOpened" | "notConnected";

const inputClasses =
  "w-full rounded-xl border border-surface-border bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-faint transition-colors focus:border-brand-500 focus-visible:outline-none";

function buildWhatsAppMessage(data: FormData): string {
  const preferencia = data.get("preferencia") === "presencial" ? "Presencial" : "Remoto";
  const lines = [
    "Nova solicitação de atendimento — iFix Admin",
    "",
    `Nome: ${data.get("nome")}`,
    `Empresa: ${data.get("empresa") || "-"}`,
    `Telefone/WhatsApp: ${data.get("telefone")}`,
    `E-mail: ${data.get("email")}`,
    `Tipo de serviço: ${data.get("tipoServico")}`,
    `Preferência de atendimento: ${preferencia}`,
    `Descrição: ${data.get("descricao")}`,
  ];
  return lines.join("\n");
}

export function ContactForm() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const formHeadingId = useId();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    if (contactInfo.whatsapp) {
      // Aberto de forma síncrona (sem setTimeout) para não ser bloqueado
      // pelo bloqueador de pop-ups do navegador — precisa ocorrer dentro
      // do mesmo gesto de clique do usuário.
      const message = buildWhatsAppMessage(new FormData(form));
      const url = `${contactInfo.whatsapp}?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank", "noopener,noreferrer");
      setSubmitState("whatsappOpened");
      return;
    }

    setSubmitState("submitting");
    window.setTimeout(() => {
      setSubmitState("notConnected");
    }, 400);
  }

  return (
    <section id="contato" className="bg-surface-muted py-24 sm:py-32">
      <Container className="max-w-3xl">
        <SectionHeading
          titleId={formHeadingId}
          eyebrow="Contato"
          title="Solicitar atendimento"
          description="Preencha os dados abaixo. Quanto mais claro o cenário, mais preciso será o retorno."
        />

        <form
          id="contato-form"
          onSubmit={handleSubmit}
          noValidate
          aria-labelledby={formHeadingId}
          className="mt-10 rounded-2xl border border-surface-border bg-white p-6 shadow-card sm:p-8"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="nome" className="text-sm font-medium text-ink">
                Nome <span aria-hidden="true">*</span>
              </label>
              <input
                id="nome"
                name="nome"
                type="text"
                autoComplete="name"
                required
                className={cn(inputClasses, "mt-2")}
                placeholder="Seu nome completo"
              />
            </div>

            <div>
              <label htmlFor="empresa" className="text-sm font-medium text-ink">
                Empresa{" "}
                <span className="font-normal text-ink-faint">(opcional)</span>
              </label>
              <input
                id="empresa"
                name="empresa"
                type="text"
                autoComplete="organization"
                className={cn(inputClasses, "mt-2")}
                placeholder="Nome da empresa"
              />
            </div>

            <div>
              <label htmlFor="telefone" className="text-sm font-medium text-ink">
                Telefone ou WhatsApp <span aria-hidden="true">*</span>
              </label>
              <input
                id="telefone"
                name="telefone"
                type="tel"
                autoComplete="tel"
                required
                className={cn(inputClasses, "mt-2")}
                placeholder="(00) 00000-0000"
              />
            </div>

            <div>
              <label htmlFor="email" className="text-sm font-medium text-ink">
                E-mail <span aria-hidden="true">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className={cn(inputClasses, "mt-2")}
                placeholder="voce@exemplo.com"
              />
            </div>

            <div>
              <label htmlFor="tipoServico" className="text-sm font-medium text-ink">
                Tipo de serviço <span aria-hidden="true">*</span>
              </label>
              <select
                id="tipoServico"
                name="tipoServico"
                required
                defaultValue=""
                className={cn(inputClasses, "mt-2 appearance-none")}
              >
                <option value="" disabled>
                  Selecione uma opção
                </option>
                {serviceTypeOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <fieldset>
              <legend className="text-sm font-medium text-ink">
                Preferência de atendimento <span aria-hidden="true">*</span>
              </legend>
              <div className="mt-2 flex gap-6 pt-1">
                {attendancePreferenceOptions.map((option, index) => (
                  <label
                    key={option.value}
                    htmlFor={`preferencia-${option.value}`}
                    className="flex items-center gap-2 text-sm text-ink-soft"
                  >
                    <input
                      id={`preferencia-${option.value}`}
                      type="radio"
                      name="preferencia"
                      value={option.value}
                      required
                      defaultChecked={index === 0}
                      className="h-4 w-4 border-surface-border text-brand-700 focus-visible:outline-none"
                    />
                    {option.label}
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="sm:col-span-2">
              <label htmlFor="descricao" className="text-sm font-medium text-ink">
                Descrição da necessidade <span aria-hidden="true">*</span>
              </label>
              <textarea
                id="descricao"
                name="descricao"
                required
                minLength={10}
                rows={5}
                className={cn(inputClasses, "mt-2 resize-none")}
                placeholder="Descreva o equipamento, o ambiente ou o problema que está enfrentando."
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="consentimento"
                className="flex cursor-pointer items-start gap-3 text-sm text-ink-soft"
              >
                <input
                  id="consentimento"
                  name="consentimento"
                  type="checkbox"
                  required
                  className="mt-0.5 h-4 w-4 shrink-0 rounded border-surface-border text-brand-700 focus-visible:outline-none"
                />
                Autorizo o contato da iFix Admin a partir das informações
                enviadas neste formulário. <span aria-hidden="true">*</span>
              </label>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button
              type="submit"
              size="lg"
              disabled={submitState === "submitting"}
              className="sm:w-auto"
            >
              {submitState === "submitting" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                  Enviando...
                </>
              ) : (
                "Enviar solicitação"
              )}
            </Button>

            <p aria-live="polite" role="status" className="text-sm text-ink-soft">
              {submitState === "whatsappOpened" ? (
                <span className="flex items-start gap-2 text-brand-700">
                  <Info className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                  Abrimos o WhatsApp com sua solicitação já preenchida —
                  confirme o envio por lá para concluir. Se não abriu,
                  verifique o bloqueador de pop-ups do navegador.
                </span>
              ) : null}
              {submitState === "notConnected" ? (
                <span className="flex items-start gap-2 text-brand-700">
                  <Info className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                  Este formulário ainda não está conectado a um canal de
                  atendimento definitivo. Sua solicitação não foi enviada —
                  em breve o envio será habilitado.
                </span>
              ) : null}
            </p>
          </div>
        </form>
      </Container>
    </section>
  );
}
