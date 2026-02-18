import { Button } from "@/components/ui/button";
import { ChevronDown, CheckCircle2, Zap, BarChart3, Rocket, Linkedin, Mail, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import BudgetForm from "@/components/BudgetForm";
import Portfolio from "@/components/Portfolio";


export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0E27] via-[#0F1535] to-[#0A0E27] text-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-[#0A0E27]/95 backdrop-blur-sm shadow-lg shadow-green-400/20" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-gradient-to-br from-green-400/20 to-transparent border border-green-400/40 flex items-center justify-center flex-shrink-0 overflow-hidden" style={{clipPath: 'circle(50%)'}}>
              <img src="/bughunters-landing-page/logo.png" alt="BugHunters" className="h-10 sm:h-12 w-10 sm:w-12 object-cover filter drop-shadow-lg" />
            </div>
            <span className="text-lg sm:text-xl font-bold text-white">BugHunters</span>
          </div>
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <a href="#visao" className="text-sm lg:text-base text-gray-300 hover:text-green-400 transition-colors duration-300">
              Nossa Visão
            </a>
            <a href="#metodo" className="text-sm lg:text-base text-gray-300 hover:text-green-400 transition-colors duration-300">
              Método
            </a>
            <a href="#diferenciais" className="text-sm lg:text-base text-gray-300 hover:text-green-400 transition-colors duration-300">
              Diferenciais
            </a>
            <a href="#orcamento" className="text-sm lg:text-base text-gray-300 hover:text-green-400 transition-colors duration-300">
              Orçamento
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 border-b border-green-400/20">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Precisão que protege seu produto
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl">
                A BugHunters é uma equipe especializada em Quality Assurance estratégico. 
                Nosso papel vai além da identificação de falhas — garantimos estabilidade, 
                previsibilidade e confiança na entrega de produtos digitais.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                className="bg-green-400 hover:bg-green-500 text-black font-semibold px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-lg transition-all duration-300 hover:shadow-lg hover:shadow-green-400/50 w-full sm:w-auto"
                onClick={() => document.getElementById('orcamento')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Solicitar Orçamento
              </Button>
              <Button
                variant="outline"
                className="border-2 border-green-400 text-green-400 hover:bg-green-400/10 font-semibold px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-lg transition-all duration-300 w-full sm:w-auto"
                onClick={() => document.getElementById('visao')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Saiba Mais
              </Button>
            </div>
            <div className="pt-6 sm:pt-8 flex items-center gap-2 text-gray-400 text-sm sm:text-base">
              <ChevronDown className="w-4 sm:w-5 h-4 sm:h-5 animate-bounce text-green-400" />
              <span>Role para explorar</span>
            </div>
          </div>
        </div>
      </section>

      {/* Abertura Institucional */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-b from-[#0F1535] to-[#0A0E27]">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">Abertura Institucional</h2>
              <div className="h-1 w-20 sm:w-24 bg-gradient-to-r from-green-400 to-green-500"></div>
            </div>
            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-300 leading-relaxed">
              <p>
                <span className="font-semibold text-green-400">
                  "A BugHunters é uma equipe especializada em Quality Assurance estratégico. 
                  Nosso papel vai além da identificação de falhas — garantimos estabilidade, 
                  previsibilidade e confiança na entrega de produtos digitais."
                </span>
              </p>
              <p>
                <span className="font-semibold text-green-400">
                  "Trabalhamos para que a qualidade deixe de ser uma etapa final e passe a ser 
                  parte estruturante da estratégia do negócio."
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nossa Visão de Qualidade */}
      <section id="visao" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-white">Nossa Visão de Qualidade</h2>
              <div className="h-1 w-24 bg-gradient-to-r from-green-400 to-green-500"></div>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed">
              Na BugHunters, entendemos que qualidade não é apenas técnica — é reputação, 
              experiência e resultado.
            </p>
            <p className="text-lg text-green-400 leading-relaxed font-semibold">
              Nossa atuação é baseada em três fundamentos:
            </p>

            {/* Fundamentos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              <div className="space-y-3 sm:space-y-4 p-4 sm:p-6 rounded-lg bg-gradient-to-br from-green-400/10 to-transparent border border-green-400/30 hover:border-green-400/60 transition-all duration-300">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-green-400/20 flex items-center justify-center border border-green-400/50 flex-shrink-0">
                    <Zap className="w-5 sm:w-6 h-5 sm:h-6 text-green-400" />
                  </div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white">Antecipação de Riscos</h3>
                </div>
                <p className="text-sm sm:text-base text-gray-300">
                  Identificamos vulnerabilidades ainda na fase de planejamento, reduzindo 
                  retrabalho e custos futuros.
                </p>
              </div>

              <div className="space-y-4 p-6 rounded-lg bg-gradient-to-br from-green-400/10 to-transparent border border-green-400/30 hover:border-green-400/60 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-green-400/20 flex items-center justify-center border border-green-400/50">
                    <BarChart3 className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Priorização Inteligente</h3>
                </div>
                <p className="text-gray-300">
                  Direcionamos esforços para áreas críticas do negócio, garantindo maior 
                  impacto com menor desperdício.
                </p>
              </div>

              <div className="space-y-4 p-6 rounded-lg bg-gradient-to-br from-green-400/10 to-transparent border border-green-400/30 hover:border-green-400/60 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-green-400/20 flex items-center justify-center border border-green-400/50">
                    <Rocket className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Sustentabilidade Operacional</h3>
                </div>
                <p className="text-gray-300">
                  Criamos processos escaláveis que acompanham o crescimento do produto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nosso Método de Trabalho */}
      <section id="metodo" className="py-20 px-6 bg-gradient-to-b from-[#0F1535] to-[#0A0E27]">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-white">Nosso Método de Trabalho</h2>
              <div className="h-1 w-24 bg-gradient-to-r from-green-400 to-green-500"></div>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed">
              Adotamos um fluxo estruturado, adaptável a metodologias ágeis ou modelos tradicionais.
            </p>

            {/* Etapas do Método */}
            <div className="space-y-8">
              <div className="border-l-4 border-green-400 pl-6 space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-400 flex items-center justify-center text-black font-bold text-sm">
                    1
                  </div>
                  <h3 className="text-2xl font-bold text-white">Diagnóstico e Imersão</h3>
                </div>
                <ul className="space-y-2 text-gray-300 ml-11">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 font-bold">•</span>
                    <span>Análise técnica e funcional do produto</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 font-bold">•</span>
                    <span>Avaliação de riscos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 font-bold">•</span>
                    <span>Alinhamento com stakeholders</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 font-bold">•</span>
                    <span>Entendimento dos objetivos estratégicos</span>
                  </li>
                </ul>
                <p className="text-gray-400 italic mt-4 ml-11">
                  "Antes de testar funcionalidades, entendemos o negócio."
                </p>
              </div>

              <div className="border-l-4 border-green-400 pl-6 space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-400 flex items-center justify-center text-black font-bold text-sm">
                    2
                  </div>
                  <h3 className="text-2xl font-bold text-white">Planejamento Estratégico de Testes</h3>
                </div>
                <ul className="space-y-2 text-gray-300 ml-11">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 font-bold">•</span>
                    <span>Definição de escopo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 font-bold">•</span>
                    <span>Mapeamento de cenários críticos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 font-bold">•</span>
                    <span>Estratégia de cobertura</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 font-bold">•</span>
                    <span>Definição de métricas de qualidade</span>
                  </li>
                </ul>
                <p className="text-gray-400 italic mt-4 ml-11">
                  "Cada ciclo de teste possui objetivos claros e mensuráveis."
                </p>
              </div>

              <div className="border-l-4 border-green-400 pl-6 space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-400 flex items-center justify-center text-black font-bold text-sm">
                    3
                  </div>
                  <h3 className="text-2xl font-bold text-white">Execução Estruturada</h3>
                </div>
                <ul className="space-y-2 text-gray-300 ml-11">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 font-bold">•</span>
                    <span>Testes funcionais e exploratórios</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 font-bold">•</span>
                    <span>Testes de regressão</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 font-bold">•</span>
                    <span>Validação de regras de negócio</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 font-bold">•</span>
                    <span>Registro técnico detalhado</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 font-bold">•</span>
                    <span>Comunicação assertiva com o time de desenvolvimento</span>
                  </li>
                </ul>
                <p className="text-gray-400 italic mt-4 ml-11">
                  "Trabalhamos com documentação organizada e evidências rastreáveis."
                </p>
              </div>

              <div className="border-l-4 border-green-400 pl-6 space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-400 flex items-center justify-center text-black font-bold text-sm">
                    4
                  </div>
                  <h3 className="text-2xl font-bold text-white">Automação Estratégica</h3>
                </div>
                <p className="text-gray-300 ml-11 mt-2">
                  Quando aplicável, implementamos automação com foco em:
                </p>
                <ul className="space-y-2 text-gray-300 ml-11">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 font-bold">•</span>
                    <span>Redução de custo operacional</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 font-bold">•</span>
                    <span>Ganho de velocidade em regressões</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 font-bold">•</span>
                    <span>Integração com pipelines CI/CD</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 font-bold">•</span>
                    <span>Geração de relatórios executivos</span>
                  </li>
                </ul>
                <p className="text-gray-400 italic mt-4 ml-11">
                  "Automatizamos com propósito, não por tendência."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais Competitivos */}
      <section id="diferenciais" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-white">Diferenciais Competitivos</h2>
              <div className="h-1 w-24 bg-gradient-to-r from-green-400 to-green-500"></div>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed">
              A BugHunters se destaca por:
            </p>

            <div className="space-y-4">
              {[
                "Mentalidade estratégica orientada a negócio",
                "Comunicação clara entre áreas técnicas e executivas",
                "Estruturação de processos de QA do zero",
                "Visão preventiva e não apenas corretiva",
                "Capacidade de escalar qualidade junto com o produto"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-green-400/5 rounded-lg hover:bg-green-400/10 transition-colors border border-green-400/20 hover:border-green-400/40">
                  <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-300">{item}</p>
                </div>
              ))}
            </div>

            <p className="text-lg text-green-400 leading-relaxed italic">
              "Não apenas testamos — estruturamos maturidade de qualidade."
            </p>
          </div>
        </div>
      </section>

      {/* Portfólio */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <Portfolio />
      </section>

      {/* Modelos de Atuação */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#0F1535] to-[#0A0E27]">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-white">Modelos de Atuação</h2>
              <div className="h-1 w-24 bg-gradient-to-r from-green-400 to-green-500"></div>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed">
              Atuamos de forma flexível, conforme a necessidade do cliente:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {[
                { title: "QA sob demanda para projetos específicos", icon: "◇" },
                { title: "Atuação contínua por sprint", icon: "◇" },
                { title: "Estruturação completa da área de QA", icon: "◇" },
                { title: "Implantação de cultura de qualidade", icon: "◇" }
              ].map((model, index) => (
                <div key={index} className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-green-400/5 rounded-lg border border-green-400/30 hover:border-green-400/60 transition-all hover:bg-green-400/10">
                  <span className="text-xl sm:text-2xl text-green-400 font-bold flex-shrink-0">{model.icon}</span>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-300 font-semibold">{model.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Encerramento Executivo */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-white">Nossa Promessa</h2>
              <div className="h-1 w-24 bg-gradient-to-r from-green-400 to-green-500"></div>
            </div>

            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p className="text-xl font-semibold text-green-400">
                "Na BugHunters, entendemos que qualidade impacta diretamente receita, 
                reputação e retenção de usuários....além de sonhos."
              </p>
              <p className="text-xl font-semibold text-green-400">
                "Nosso compromisso é transformar Qualidade em vantagem competitiva."
              </p>
              <p className="text-xl font-semibold text-green-400">
                "Porque qualidade não é custo. É estratégia."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Formulário de Orçamento */}
      <section id="orcamento" className="py-20 px-6 bg-gradient-to-b from-green-400/5 to-[#0A0E27] border-t border-green-400/20">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold text-white">Solicite seu Orçamento</h2>
              <div className="h-1 w-24 bg-gradient-to-r from-green-400 to-green-500 mx-auto"></div>
              <p className="text-xl text-gray-300">
                Preencha o formulário abaixo e receba uma proposta personalizada para sua empresa.
              </p>
            </div>

            <BudgetForm />
          </div>
        </div>
      </section>

      {/* Redes Sociais e Contato */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#0F1535] to-[#0A0E27] border-t border-green-400/20">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-white">Conecte-se Conosco</h2>
              <div className="h-1 w-24 bg-gradient-to-r from-green-400 to-green-500 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/bughunters-qa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 sm:gap-4 p-4 sm:p-6 rounded-lg bg-green-400/5 border border-green-400/30 hover:border-green-400/60 hover:bg-green-400/10 transition-all group"
              >
                <div className="w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-green-400/20 flex items-center justify-center group-hover:bg-green-400/30 transition-all">
                  <Linkedin className="w-6 sm:w-8 h-6 sm:h-8 text-green-400" />
                </div>
                <div className="text-center">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">LinkedIn</h3>
                  <p className="text-gray-400 text-xs sm:text-sm">Siga-nos para atualizações e insights</p>
                  <p className="text-green-400 font-semibold mt-2 text-sm">@bughunters-qa</p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:contato@bughunters.com.br"
                className="flex flex-col items-center gap-3 sm:gap-4 p-4 sm:p-6 rounded-lg bg-green-400/5 border border-green-400/30 hover:border-green-400/60 hover:bg-green-400/10 transition-all group"
              >
                <div className="w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-green-400/20 flex items-center justify-center group-hover:bg-green-400/30 transition-all">
                  <Mail className="w-6 sm:w-8 h-6 sm:h-8 text-green-400" />
                </div>
                <div className="text-center">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Email</h3>
                  <p className="text-gray-400 text-xs sm:text-sm">Envie suas dúvidas</p>
                  <p className="text-green-400 font-semibold mt-2 text-sm">contato@bughunters.com.br</p>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/5511987654321"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 sm:gap-4 p-4 sm:p-6 rounded-lg bg-green-400/5 border border-green-400/30 hover:border-green-400/60 hover:bg-green-400/10 transition-all group"
              >
                <div className="w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-green-400/20 flex items-center justify-center group-hover:bg-green-400/30 transition-all">
                  <MessageCircle className="w-6 sm:w-8 h-6 sm:h-8 text-green-400" />
                </div>
                <div className="text-center">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">WhatsApp</h3>
                  <p className="text-gray-400 text-xs sm:text-sm">Chat rápido e direto</p>
                  <p className="text-green-400 font-semibold mt-2 text-sm">(11) 98765-4321</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-black/50 text-gray-500 text-center border-t border-green-400/20">
        <div className="container mx-auto">
          <p>&copy; 2024 BugHunters. Precisão que protege seu produto.</p>
        </div>
      </footer>
    </div>
  );
}