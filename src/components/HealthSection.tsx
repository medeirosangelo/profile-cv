
import { Brain, Heart, Hospital, User } from "lucide-react";
import { Card } from "./ui/card";

export const HealthSection = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-indigo-50" id="health">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-heading font-bold text-slate-900 mb-4">
          Formação Complementar em Saúde
        </h2>
        
        <p className="text-slate-600 mb-8 leading-relaxed">
          Minha formação como Técnico em Enfermagem (COREN RR 001.937.924) proporciona uma perspectiva única 
          no desenvolvimento de sistemas, especialmente para soluções na área de saúde digital (healthtech).
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Brain className="text-blue-500" />
              Habilidades Transferíveis
            </h3>
            <ul className="space-y-2 text-slate-600">
              <li>Pensamento analítico e resolução de problemas complexos</li>
              <li>Atenção meticulosa aos detalhes e documentação</li>
              <li>Capacidade de trabalhar sob pressão e tomar decisões críticas</li>
            </ul>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Heart className="text-blue-500" />
              Vantagens na Área Tech
            </h3>
            <ul className="space-y-2 text-slate-600">
              <li>Compreensão de terminologias médicas e fluxos de trabalho clínicos</li>
              <li>Capacidade de traduzir necessidades da área de saúde para soluções tecnológicas</li>
              <li>Conhecimento sobre requisitos de segurança e privacidade de dados sensíveis (LGPD para saúde)</li>
            </ul>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Hospital className="text-blue-500" />
              Áreas de Aplicação
            </h3>
            <ul className="space-y-2 text-slate-600">
              <li>Desenvolvimento de sistemas para gestão hospitalar e clínica</li>
              <li>Aplicações de telemedicina e monitoramento remoto de pacientes</li>
              <li>Soluções de IA para diagnóstico e análise preditiva em saúde</li>
            </ul>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <User className="text-blue-500" />
              Diferencial Profissional
            </h3>
            <ul className="space-y-2 text-slate-600">
              <li>Visão holística da interseção entre tecnologia e saúde</li>
              <li>Comunicação eficaz com stakeholders da área médica</li>
              <li>Conhecimento dos desafios reais enfrentados por profissionais de saúde</li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};
