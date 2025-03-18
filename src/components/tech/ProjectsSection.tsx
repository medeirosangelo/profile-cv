
import { Code2, Database, Shield } from "lucide-react";
import { Card } from "../ui/card";

export const ProjectsSection = () => {
  return (
    <div>
      <h2 className="text-3xl font-heading font-bold text-slate-900 mb-8">
        Projetos Acadêmicos e Profissionais
      </h2>
      <div className="space-y-4">
        <Card className="p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-start gap-4">
            <Database className="text-blue-500 mt-1" size={24} />
            <div>
              <h3 className="text-xl font-bold mb-2">Monitor Epidemiológico</h3>
              <p className="text-slate-600">Sistema web para monitoramento e gestão epidemiológica municipal</p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 mt-2">
                <li>Tecnologias: React, TypeScript, PostgreSQL</li>
                <li>Visualização de dados epidemiológicos em tempo real</li>
                <li>Dashboards para tomada de decisão em saúde pública</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-start gap-4">
            <Code2 className="text-blue-500 mt-1" size={24} />
            <div>
              <h3 className="text-xl font-bold mb-2">Sistema de Monitoramento Agrícola</h3>
              <p className="text-slate-600">Plataforma web para acompanhamento de safras e diagnóstico de pragas</p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 mt-2">
                <li>Tecnologias: React, TypeScript, PostgreSQL</li>
                <li>Integração com sistemas de previsão meteorológica</li>
                <li>Alertas automáticos para riscos de pragas</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-start gap-4">
            <Shield className="text-blue-500 mt-1" size={24} />
            <div>
              <h3 className="text-xl font-bold mb-2">SWGCM</h3>
              <p className="text-slate-600">Sistema para gestão de contratos e monitoramento de produtividade</p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 mt-2">
                <li>Tecnologias: Django, PostgreSQL, WebSocket</li>
                <li>Autenticação multifator e controle de acesso baseado em papéis</li>
                <li>Dashboards interativos para acompanhamento de KPIs</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
