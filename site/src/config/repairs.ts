export interface RepairEstimate {
  service: string;
  priceRange: string;
}

export interface RepairDeviceType {
  id: string;
  label: string;
  estimates: RepairEstimate[];
}

/**
 * Faixas de valores ILUSTRATIVAS, para dar uma referência inicial ao visitante.
 * Não são uma tabela de preços oficial da iFix Admin — o valor final depende
 * sempre da avaliação técnica (equipamento, complexidade e peças envolvidas).
 * Ajustar estes números quando a iFix Admin definir uma tabela de referência real.
 */
export const repairDeviceTypes: RepairDeviceType[] = [
  {
    id: "notebook",
    label: "Notebook",
    estimates: [
      { service: "Diagnóstico técnico", priceRange: "R$ 80 – R$ 150" },
      { service: "Limpeza interna e manutenção preventiva", priceRange: "R$ 120 – R$ 200" },
      { service: "Formatação e reinstalação do sistema", priceRange: "R$ 150 – R$ 250" },
      { service: "Upgrade de armazenamento (SSD)", priceRange: "R$ 250 – R$ 600" },
      { service: "Troca de bateria", priceRange: "R$ 200 – R$ 450" },
      { service: "Troca de tela", priceRange: "R$ 350 – R$ 900" },
    ],
  },
  {
    id: "macbooks",
    label: "Macbooks",
    estimates: [
      { service: "Diagnóstico técnico", priceRange: "R$ 80 – R$ 150" },
      { service: "Instalação e configuração", priceRange: "R$ 100 – R$ 180" },
      { service: "Manutenção preventiva", priceRange: "R$ 120 – R$ 220" },
      { service: "Backup e Atualização de Sistema Operacional", priceRange: "R$ 180 – R$ 450" },
    ],
  },
  {
    id: "desktop",
    label: "Computador desktop",
    estimates: [
      { service: "Diagnóstico técnico", priceRange: "R$ 80 – R$ 150" },
      { service: "Limpeza e manutenção preventiva", priceRange: "R$ 100 – R$ 180" },
      { service: "Formatação e reinstalação do sistema", priceRange: "R$ 150 – R$ 250" },
      { service: "Montagem ou upgrade de componentes", priceRange: "R$ 150 – R$ 400" },
      { service: "Avaliação e Consultoria de Peças", priceRange: "R$ 150 – R$ 550" },
    ],
  },
  {
    id: "Infraestrutura",
    label: "Rede e Wi-Fi",
    estimates: [
      { service: "Diagnóstico de rede", priceRange: "R$ 100 – R$ 200" },
      { service: "Configuração de roteador e Wi-Fi", priceRange: "R$ 150 – R$ 300" },
      { service: "Organização de cabeamento (por ponto)", priceRange: "R$ 80 – R$ 150" },
      { service: "Ampliação de cobertura (mesh/repetidor)", priceRange: "R$ 250 – R$ 600" },
    ],
  },
  {
    id: "servidor",
    label: "Servidor",
    estimates: [
      { service: "Diagnóstico de servidor", priceRange: "R$ 150 – R$ 300" },
      { service: "Configuração inicial de servidor", priceRange: "R$ 400 – R$ 900" },
      { service: "Atualização e manutenção", priceRange: "R$ 200 – R$ 500" },
      { service: "Configuração de rotina de backup", priceRange: "R$ 250 – R$ 550" },
    ],
  },
];

export const repairFactors = [
  {
    title: "Faixas por tipo de serviço",
    description:
      "Os valores variam conforme o serviço e o estado do equipamento, não por marca ou modelo específico.",
  },
  {
    title: "Cada caso passa por avaliação",
    description:
      "O valor final só é confirmado depois que o cenário é analisado — nunca antes disso.",
  },
  {
    title: "Peças e complexidade podem alterar o valor",
    description:
      "Componentes de reposição e situações fora do padrão são informados antes da execução.",
  },
] as const;
