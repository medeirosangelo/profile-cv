import { Code2, Database, Shield, Terminal } from "lucide-react";
import { Card } from "./ui/card";

export const TechSection = () => {
  return (
    <section className="py-16 px-4 bg-white" id="tech">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-heading font-bold text-slate-900 mb-8">
          Perfil em Tecnologia
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Code2 className="text-blue-500" />
              Desenvolvimento
            </h3>
            <ul className="space-y-2 text-slate-600">
              <li>Python, Java, C, HTML, CSS, SQL, JavaScript</li>
              <li>Django, React, Node.js</li>
              <li>Git, Docker, Kubernetes</li>
            </ul>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Shield className="text-blue-500" />
              Cybersegurança
            </h3>
            <ul className="space-y-2 text-slate-600">
              <li>Certificação Cisco - Junior Cybersecurity Analyst</li>
              <li>Nmap, Metasploit, Burp Suite</li>
              <li>Análise de Vulnerabilidades</li>
            </ul>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Database className="text-blue-500" />
              Banco de Dados & Cloud
            </h3>
            <ul className="space-y-2 text-slate-600">
              <li>MySQL, MongoDB, PostgreSQL</li>
              <li>AWS, Azure, Google Cloud Platform</li>
              <li>Terraform, Jenkins</li>
            </ul>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Terminal className="text-blue-500" />
              Experiência Profissional
            </h3>
            <ul className="space-y-2 text-slate-600">
              <li>Defensoria Pública de Roraima - Desenvolvimento de Sistemas</li>
              <li>ICT Residency – BRISA/SOFTEX - Desenvolvedor</li>
              <li>Prepara Cursos - Instrutor de TI</li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};