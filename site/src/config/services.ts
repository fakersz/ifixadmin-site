export type ServiceIcon =
  | "network"
  | "laptop"
  | "headset"
  | "server"
  | "shield"
  | "code";

export interface Service {
  slug: string;
  icon: ServiceIcon;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    slug: "infraestrutura-e-redes",
    icon: "network",
    title: "Infraestrutura e redes",
    description:
      "Configuração de redes, Wi-Fi, roteadores, cabeamento, organização de equipamentos e melhoria de estabilidade.",
  },
  {
    slug: "manutencao-de-computadores",
    icon: "laptop",
    title: "Manutenção de computadores",
    description:
      "Diagnóstico, limpeza, otimização, troca de componentes, formatação e correção de falhas em computadores e notebooks.",
  },
  {
    slug: "suporte-tecnico",
    icon: "headset",
    title: "Suporte técnico",
    description:
      "Atendimento para problemas de sistema, programas, acessos, impressoras, periféricos e configurações.",
  },
  {
    slug: "servidores-e-servicos",
    icon: "server",
    title: "Servidores e serviços",
    description:
      "Implantação, configuração, atualização e acompanhamento de servidores, aplicações e serviços internos.",
  },
  {
    slug: "backup-e-seguranca",
    icon: "shield",
    title: "Backup e segurança",
    description:
      "Proteção de dados, rotinas de backup, recuperação, controle de acesso e boas práticas de segurança.",
  },
  {
    slug: "servicos-digitais",
    icon: "code",
    title: "Serviços digitais",
    description:
      "Criação e manutenção de sites, sistemas, automações, integrações e ferramentas para melhorar operações.",
  },
];
