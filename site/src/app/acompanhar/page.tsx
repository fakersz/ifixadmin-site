import type { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TrackOrderForm } from "@/components/sections/TrackOrderForm";

export const metadata: Metadata = {
  title: "Acompanhar atendimento",
  description:
    "Consulte o andamento da sua Ordem de Serviço informando o token enviado pela iFix Admin.",
  alternates: {
    canonical: "/acompanhar/",
  },
};

export default function AcompanharPage() {
  return (
    <section className="bg-white pb-24 pt-32 sm:pb-32 sm:pt-40">
      <Container className="max-w-lg">
        <SectionHeading
          align="center"
          eyebrow="Acompanhamento"
          title="Consultar sua Ordem de Serviço"
          description="Digite o token enviado pela iFix Admin para acompanhar o andamento do seu atendimento."
          className="mx-auto"
        />

        <div className="mt-12">
          <Suspense fallback={null}>
            <TrackOrderForm />
          </Suspense>
        </div>
      </Container>
    </section>
  );
}
