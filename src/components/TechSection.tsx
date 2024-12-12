import { 
  Briefcase, 
  Code2, 
  Database, 
  Shield, 
  Terminal, 
  GraduationCap, 
  Globe,
  Server,
  Cloud
} from "lucide-react";
import { Card } from "./ui/card";
import { CertificationsSection } from "./tech/CertificationsSection";
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
            Profissional em Análise e Desenvolvimento de Sistemas, especializado em cibersegurança 
            e desenvolvimento full stack, com forte experiência em cloud computing e automação. 
            Busco uma posição desafiadora onde possa aplicar minha expertise em segurança digital, 
            desenvolvimento de sistemas escaláveis e análise de dados para criar soluções inovadoras 
            e impactantes.
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
                <p className="text-slate-500">Conclusão prevista: Abril/2025</p>
                <ul className="list-disc list-inside text-slate-600 space-y-2 mt-2">
                  <li>Foco em Desenvolvimento Full Stack e Segurança da Informação</li>
                  <li>Projetos práticos com tecnologias modernas</li>
                  <li>Participação em hackathons e eventos de tecnologia</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>

        <CertificationsSection />

        <div>
          <h2 className="text-3xl font-heading font-bold text-slate-900 mb-8">
            Experiência Profissional
          </h2>
          <div className="space-y-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <Briefcase className="text-blue-500 mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-bold mb-2">Estagiário de Desenvolvimento de Sistemas</h3>
                  <p className="text-slate-700">Defensoria Pública do Estado de Roraima - Boa Vista, RR</p>
                  <p className="text-slate-500 mb-4">Agosto/2023 – Março/2025</p>
                  <ul className="list-disc list-inside text-slate-600 space-y-2">
                    <li>Desenvolvimento de sistemas internos com React e Node.js, resultando em 40% de aumento na produtividade</li>
                    <li>Implementação de práticas de DevSecOps e CI/CD com GitHub Actions</li>
                    <li>Otimização de consultas SQL e APIs REST, melhorando o tempo de resposta em 60%</li>
                    <li>Liderança em treinamentos técnicos para mais de 50 usuários</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <Code2 className="text-blue-500 mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-bold mb-2">Desenvolvedor e Analista de Dados</h3>
                  <p className="text-slate-700">ICT Residency – BRISA/SOFTEX - Boa Vista, RR</p>
                  <p className="text-slate-500 mb-4">Junho/2022 – Novembro/2022</p>
                  <ul className="list-disc list-inside text-slate-600 space-y-2">
                    <li>Desenvolvimento de aplicativo mobile para SAMU usando React Native e Firebase</li>
                    <li>Implementação de análise de dados em tempo real com Python e Pandas</li>
                    <li>Criação de dashboards interativos com Power BI, impactando decisões estratégicas</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <ProjectsSection />

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
                <li>React, Next.js, Node.js</li>
                <li>Python (Django, FastAPI)</li>
                <li>TypeScript, JavaScript</li>
                <li>Java Spring Boot</li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Cloud className="text-blue-500" />
                Cloud & DevOps
              </h3>
              <ul className="space-y-2 text-slate-600">
                <li>AWS (EC2, S3, Lambda)</li>
                <li>Docker, Kubernetes</li>
                <li>CI/CD (GitHub Actions)</li>
                <li>Terraform, Ansible</li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Shield className="text-blue-500" />
                Segurança
              </h3>
              <ul className="space-y-2 text-slate-600">
                <li>Penetration Testing</li>
                <li>OWASP Top 10</li>
                <li>Análise de Vulnerabilidades</li>
                <li>Segurança em Cloud</li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Database className="text-blue-500" />
                Dados
              </h3>
              <ul className="space-y-2 text-slate-600">
                <li>SQL (PostgreSQL, MySQL)</li>
                <li>MongoDB, Redis</li>
                <li>Análise de Dados (Pandas)</li>
                <li>Power BI, Grafana</li>
              </ul>
            </Card>
          </div>
        </div>

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
              <li>Inglês: Proficiência profissional completa (Leitura técnica, escrita e conversação)</li>
              <li>Espanhol: Fluente (Comunicação profissional)</li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};