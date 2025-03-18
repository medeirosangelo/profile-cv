
import { 
  Briefcase, 
  Code2, 
  Database, 
  Shield, 
  GraduationCap, 
  Globe,
  Cloud,
  Server,
  Cpu,
  Terminal
} from "lucide-react";
import { Card } from "./ui/card";
import { ExtracurricularCoursesSection } from "./tech/ExtracurricularCoursesSection";
import { ProjectsSection } from "./tech/ProjectsSection";

export const TechSection = () => {
  return (
    <section className="py-16 px-4 bg-white" id="tech">
      <div className="max-w-4xl mx-auto space-y-12">
        <div>
          <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4">
            Objetivo Profissional
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Atuar na área de Desenvolvimento de Sistemas e Análise de Dados, aplicando conhecimentos
            em segurança da informação, automação e otimização de processos.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4">
            Resumo Profissional
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Profissional de TI com experiência em desenvolvimento de sistemas, segurança da
            informação e análise de dados. Liderança em projetos estratégicos, com foco em otimização
            de processos e automação. Habilidade em integrar tecnologia e estratégia para entregar
            soluções escaláveis e seguras.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-heading font-bold text-slate-900 mb-8">
            Formação Acadêmica
          </h2>
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <GraduationCap className="text-blue-500 mt-1" size={24} />
              <div>
                <h3 className="text-xl font-bold mb-2">Tecnologia em Análise e Desenvolvimento de Sistemas</h3>
                <p className="text-slate-600">Instituto Federal de Educação, Ciência e Tecnologia de Roraima (IFRR)</p>
                <p className="text-slate-500">Conclusão: Fevereiro/2025</p>
              </div>
            </div>
          </Card>
        </div>

        <div>
          <h2 className="text-3xl font-heading font-bold text-slate-900 mb-8">
            Experiência Profissional
          </h2>
          <div className="space-y-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <Briefcase className="text-blue-500 mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-bold mb-2">Estagiário em Desenvolvimento de Sistemas</h3>
                  <p className="text-slate-700">Defensoria Pública do Estado de Roraima - Boa Vista, RR</p>
                  <p className="text-slate-500 mb-4">Agosto/2023 – Fevereiro/2025 (1 ano e 6 meses)</p>
                  <ul className="list-disc list-inside text-slate-600 space-y-2">
                    <li>Desenvolvimento e manutenção de sistemas internos, com foco no sistema Solar (gestão jurídica e administrativa)</li>
                    <li>Otimização de processos e implementação de dashboards gerenciais para análise de produtividade</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <Code2 className="text-blue-500 mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-bold mb-2">Residência Desenvolvimento e Análise de Dados</h3>
                  <p className="text-slate-700">BRISA/SOFTEX – Boa Vista, RR</p>
                  <p className="text-slate-500 mb-4">Janeiro/2023 – Outubro/2023 (9 meses)</p>
                  <ul className="list-disc list-inside text-slate-600 space-y-2">
                    <li>Desenvolvimento de aplicações web e mobile para o SAMU, com aplicação de metodologias ágeis e boas práticas de segurança</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <Briefcase className="text-blue-500 mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-bold mb-2">Instrutor de TI e Suporte a Usuários</h3>
                  <p className="text-slate-700">Prepara Cursos – Boa Vista, RR</p>
                  <p className="text-slate-500 mb-4">Abril/2021 – Agosto/2022 (1 ano e 4 meses)</p>
                  <ul className="list-disc list-inside text-slate-600 space-y-2">
                    <li>Treinamento em informática básica e avançada, suporte técnico e manutenção de redes e computadores</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-heading font-bold text-slate-900 mb-8">
            Habilidades Técnicas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Code2 className="text-blue-500" />
                Desenvolvimento
              </h3>
              <ul className="space-y-2 text-slate-600">
                <li>Python, PHP, Java, JavaScript, C, C++</li>
                <li>React, Node.js, Django, Spring Boot</li>
                <li>Flutter, HTML, CSS, TypeScript</li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Cloud className="text-blue-500" />
                Cloud & DevOps
              </h3>
              <ul className="space-y-2 text-slate-600">
                <li>AWS, Azure</li>
                <li>Docker, Kubernetes, CI/CD</li>
                <li>Linux, Windows Server</li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Shield className="text-blue-500" />
                Segurança
              </h3>
              <ul className="space-y-2 text-slate-600">
                <li>Cybersecurity, Ethical Hacking</li>
                <li>Análise de Vulnerabilidades</li>
                <li>Segurança em Redes</li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Database className="text-blue-500" />
                Análise de Dados
              </h3>
              <ul className="space-y-2 text-slate-600">
                <li>Power BI, Tableau</li>
                <li>Machine Learning (Scikit-Learn, TensorFlow)</li>
                <li>Big Data (Hadoop, Spark)</li>
              </ul>
            </Card>
          </div>
        </div>

        <ProjectsSection />
        <ExtracurricularCoursesSection />

        <div>
          <h2 className="text-3xl font-heading font-bold text-slate-900 mb-8">
            Idiomas
          </h2>
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Globe className="text-blue-500" />
              Proficiência Linguística
            </h3>
            <ul className="space-y-2 text-slate-600">
              <li>Português: Língua materna</li>
              <li>Inglês: Intermediário</li>
              <li>Espanhol: Avançado</li>
            </ul>
          </Card>
        </div>

        <div>
          <h2 className="text-3xl font-heading font-bold text-slate-900 mb-8">
            Informações Adicionais
          </h2>
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <ul className="space-y-2 text-slate-600">
              <li>CNH: Categorias A, B</li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};
