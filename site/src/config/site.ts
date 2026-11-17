export const siteConfig = {
  name: "iFixAdmin",
  shortName: "iFix",
  domain: "ifixadmin.site",
  url: "https://ifixadmin.site",
  locale: "pt-BR",
  title: "iFixAdmin | Infraestrutura, Manutenção e Serviços Digitais",
  description:
    "Serviços de infraestrutura, manutenção de equipamentos, suporte técnico, redes, servidores, segurança e soluções digitais.",
  tagline: "Tecnologia funcionando como deveria.",
} as const;

export const navLinks = [
  { label: "Início", href: "/#inicio" },
  { label: "Serviços", href: "/#servicos" },
  { label: "Reparos", href: "/reparos/" },
  { label: "Contato", href: "/#contato" },
] as const;

/**
 * Dados comerciais reais ainda não confirmados.
 * Preencher quando definidos e o rodapé/formulário passam a exibi-los automaticamente.
 * Formatos esperados:
 *  phone     -> "+55 11 91234-5678"
 *  whatsapp  -> link "https://wa.me/55119..."
 *  email     -> "contato@ifixadmin.site"
 *  region    -> "São Paulo, SP"
 */
export const contactInfo: {
  phone: string | null; // [ADICIONAR TELEFONE]
  whatsapp: string | null; // [ADICIONAR WHATSAPP]
  email: string | null; // [ADICIONAR E-MAIL]
  region: string | null; // [ADICIONAR CIDADE/REGIÃO]
} = {
  phone: null,
  whatsapp: null,
  email: null,
  region: null,
};
