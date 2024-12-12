import { 
  Briefcase, 
  Code2, 
  Database, 
  Shield, 
  GraduationCap, 
  Globe,
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
            e desenvolvimento full stack. Busco uma oportunidade, preferencialmente remota, 
            onde possa aplicar meus conhecimentos em segurança digital, gestão de sistemas 
            e desenvolvimento web.
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
                  <h3 className="text-xl font-bold mb-2">Estagiário de Desenvolvimento de Sistemas</h3>
                  <p className="text-slate-700">Defensoria Pública do Estado de Roraima - Boa Vista, RR</p>
                  <p className="text-slate-500 mb-4">Agosto/2023 – Março/2025</p>
                  <ul className="list-disc list-inside text-slate-600 space-y-2">
                    <li>Colaboração no Desenvolvimento e Suporte de sistemas internos da Defensoria</li>
                    <li>Liderança em treinamentos de usuários e Análise de Requisitos</li>
                    <li>Análise de dados e suporte a redes e usuários</li>
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
                    <li>Expertise em projetos de desenvolvimento web e análise de dados</li>
                    <li>Aplicação de metodologias ágeis e aperfeiçoamento de habilidades em sistemas digitais</li>
                    <li>Desenvolvimento Mobile para o Serviço de Atendimento Móvel de Urgência (SAMU)</li>
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
                <li>Python, Java, JavaScript</li>
                <li>React, Node.js, Django</li>
                <li>HTML, CSS, SQL</li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Cloud className="text-blue-500" />
                Cloud & DevOps
              </h3>
              <ul className="space-y-2 text-slate-600">
                <li>AWS, Azure</li>
                <li>Docker</li>
                <li>Git, GitHub</li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Shield className="text-blue-500" />
                Segurança
              </h3>
              <ul className="space-y-2 text-slate-600">
                <li>Análise de Vulnerabilidades</li>
                <li>Segurança em Cloud</li>
                <li>OWASP Top 10</li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Database className="text-blue-500" />
                Dados
              </h3>
              <ul className="space-y-2 text-slate-600">
                <li>MySQL, PostgreSQL</li>
                <li>MongoDB</li>
                <li>Power BI</li>
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
              <li>Inglês: Proficiência profissional (Leitura técnica, escrita e conversação)</li>
              <li>Espanhol: Fluente</li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};