import { ExternalLink, CheckCircle2 } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  results: string[];
  image?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Plataforma de E-commerce",
    description: "Testes completos de funcionalidades de compra, pagamento e logística para plataforma de e-commerce de grande volume.",
    category: "E-commerce",
    results: [
      "Identificadas 127 falhas críticas antes do go-live",
      "Cobertura de testes: 94%",
      "Redução de 45% em bugs pós-produção"
    ]
  },
  {
    id: 2,
    title: "Aplicativo Mobile Financeiro",
    description: "QA estratégico para app de gestão financeira com foco em segurança, performance e usabilidade.",
    category: "Mobile",
    results: [
      "Validação de 250+ cenários de teste",
      "Testes de segurança: 100% de conformidade",
      "Performance otimizada em 15 dispositivos"
    ]
  },
  {
    id: 3,
    title: "Sistema de Gestão Hospitalar",
    description: "Testes de regressão contínua e automação para sistema crítico de saúde com alta disponibilidade.",
    category: "Healthcare",
    results: [
      "Zero downtime em 18 meses",
      "Automação de 80% dos testes",
      "Conformidade HIPAA validada"
    ]
  },
  {
    id: 4,
    title: "Plataforma SaaS B2B",
    description: "Estruturação completa de QA com implementação de testes automatizados e CI/CD pipeline.",
    category: "SaaS",
    results: [
      "Implementação de 500+ testes automatizados",
      "Ciclo de release reduzido em 60%",
      "Maturidade de QA: Nível 4"
    ]
  },
  {
    id: 5,
    title: "API REST de Integrações",
    description: "Testes de integração e performance para API que processa 10M+ requisições diárias.",
    category: "Backend",
    results: [
      "Validação de 50+ endpoints",
      "Testes de carga: 100k req/s",
      "SLA mantido em 99.99%"
    ]
  },
  {
    id: 6,
    title: "Dashboard Analytics",
    description: "QA exploratório e testes de usabilidade para dashboard de business intelligence com dados em tempo real.",
    category: "Analytics",
    results: [
      "Identificadas 89 melhorias de UX",
      "Testes em 12 navegadores",
      "Satisfação do usuário: 4.8/5"
    ]
  }
];

export default function Portfolio() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              Nosso Portfólio
            </h2>
            <div className="h-1 w-20 sm:w-24 bg-gradient-to-r from-green-400 to-green-500 mx-auto"></div>
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
              Conheça alguns dos projetos que transformamos através de QA estratégico e testes de software de excelência.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group flex flex-col h-full p-4 sm:p-6 rounded-lg bg-gradient-to-br from-green-400/5 to-transparent border border-green-400/30 hover:border-green-400/60 transition-all duration-300 hover:bg-green-400/10"
              >
                {/* Category Badge */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-xs sm:text-sm font-semibold text-green-400 bg-green-400/10 rounded-full border border-green-400/30">
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-gray-300 mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Results */}
                <div className="space-y-2 pt-4 border-t border-green-400/20">
                  {project.results.map((result, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-gray-300">{result}</span>
                    </div>
                  ))}
                </div>

                {/* Link */}
                <div className="mt-4 pt-4 border-t border-green-400/20">
                  <button className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors text-sm font-semibold group/link">
                    Ver detalhes
                    <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center pt-8">
            <p className="text-lg text-gray-300 mb-4">
              Tem um projeto que precisa de QA estratégico?
            </p>
            <a
              href="#orcamento"
              className="inline-block px-8 py-3 bg-green-400 hover:bg-green-500 text-black font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-green-400/50"
            >
              Solicitar Orçamento
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
