import { Code2, Shield, Database } from "lucide-react";
import { Card } from "../ui/card";

export const ProjectsSection = () => {
  return (
    <div>
      <h2 className="text-3xl font-heading font-bold text-slate-900 mb-8">
        Projetos Relevantes
      </h2>
      <div className="space-y-4">
        <Card className="p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-start gap-4">
            <Shield className="text-blue-500 mt-1" size={24} />
            <div>
              <h3 className="text-xl font-bold mb-2">Sistema de Monitoramento de Segurança</h3>
              <p className="text-slate-600">Projeto Full Stack com React e Node.js</p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 mt-2">
                <li>Dashboard em tempo real para monitoramento de ameaças</li>
                <li>Integração com APIs de segurança e análise de logs</li>
                <li>Implementação de autenticação OAuth2 e JWT</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-start gap-4">
            <Database className="text-blue-500 mt-1" size={24} />
            <div>
              <h3 className="text-xl font-bold mb-2">Análise de Dados em Tempo Real</h3>
              <p className="text-slate-600">Sistema de Analytics com Python e AWS</p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 mt-2">
                <li>Processamento de mais de 1 milhão de registros diários</li>
                <li>Implementação de machine learning para detecção de anomalias</li>
                <li>Visualização de dados com Grafana e Kibana</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-start gap-4">
            <Code2 className="text-blue-500 mt-1" size={24} />
            <div>
              <h3 className="text-xl font-bold mb-2">Automação com IA</h3>
              <p className="text-slate-600">Projeto de Automação usando Python e TensorFlow</p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 mt-2">
                <li>Desenvolvimento de modelos de ML para automação de processos</li>
                <li>Redução de 70% no tempo de processamento manual</li>
                <li>Integração com sistemas legados via APIs RESTful</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};