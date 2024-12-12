import { 
  Briefcase, 
  Code2, 
  Database, 
  Shield, 
  Terminal, 
  GraduationCap, 
  Award, 
  Globe,
  Server,
  Cloud
} from "lucide-react";
import { Card } from "./ui/card";

export const TechSection = () => {
  return (
    <section className="py-16 px-4 bg-white" id="tech">
      <div className="max-w-4xl mx-auto space-y-12">
        <div>
          <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4">
            Objetivo Profissional
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Profissional em Análise e Desenvolvimento de Sistemas, com foco em cibersegurança, 
            pronto para contribuir com habilidades em segurança da informação e análise de dados. 
            Busco uma oportunidade, preferencialmente remota, onde possa aplicar meus conhecimentos 
            em segurança digital, gestão de sistemas e desenvolvimento web.
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
            Certificações
          </h2>
          <div className="space-y-4">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <Award className="text-blue-500 mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-bold mb-2">Junior Cybersecurity Analyst</h3>
                  <p className="text-slate-600">Cisco Networking Academy</p>
                </div>
              </div>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <Award className="text-blue-500 mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-bold mb-2">ICT Residency Project - BRISA</h3>
                  <p className="text-slate-600">Projeto apoiado pela SOFTEX e financiado pelo MCTIC</p>
                </div>
              </div>
            </Card>
          </div>
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
                    <li>Liderança em treinamento de usuários e Análise de Requisitos</li>
                    <li>Análise de dados e suporte para redes e usuários</li>
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

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <Terminal className="text-blue-500 mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-bold mb-2">Instrutor de TI e Suporte ao Usuário</h3>
                  <p className="text-slate-700">Prepara Cursos - Boa Vista, RR</p>
                  <p className="text-slate-500 mb-4">Abril/2021 – Agosto/2022</p>
                  <ul className="list-disc list-inside text-slate-600 space-y-2">
                    <li>Instrução de alunos em informática, do básico ao avançado</li>
                    <li>Suporte técnico e manutenção de computadores</li>
                    <li>Tarefas administrativas e de recrutamento</li>
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
                Linguagens de Programação
              </h3>
              <ul className="space-y-2 text-slate-600">
                <li>Python, Java, C</li>
                <li>HTML, CSS, JavaScript</li>
                <li>SQL</li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Server className="text-blue-500" />
                Frameworks e Ferramentas
              </h3>
              <ul className="space-y-2 text-slate-600">
                <li>Django, React, Node.js</li>
                <li>Power BI, Git</li>
                <li>Docker, Kubernetes</li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Database className="text-blue-500" />
                Banco de Dados
              </h3>
              <ul className="space-y-2 text-slate-600">
                <li>MySQL, MongoDB</li>
                <li>PostgreSQL</li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Shield className="text-blue-500" />
                Ferramentas de Cibersegurança
              </h3>
              <ul className="space-y-2 text-slate-600">
                <li>Nmap, Metasploit</li>
                <li>Burp Suite, Maltego</li>
                <li>Snort, Nikto</li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Cloud className="text-blue-500" />
                Cloud e Automação
              </h3>
              <ul className="space-y-2 text-slate-600">
                <li>AWS, Azure, Google Cloud Platform</li>
                <li>Jenkins, Terraform</li>
              </ul>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Globe className="text-blue-500" />
                Idiomas
              </h3>
              <ul className="space-y-2 text-slate-600">
                <li>Português: Língua materna</li>
                <li>Inglês: Proficiência intermediária com foco em vocabulário técnico</li>
                <li>Espanhol: Fluente</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};