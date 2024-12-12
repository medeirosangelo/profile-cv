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
          no desenvolvimento de sistemas, especialmente na área de healthtech e sistemas hospitalares.
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
              <li>Experiência em ambientes que exigem alta precisão</li>
            </ul>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Heart className="text-blue-500" />
              Vantagens na Área Tech
            </h3>
            <ul className="space-y-2 text-slate-600">
              <li>Compreensão profunda de sistemas hospitalares e fluxos de trabalho clínicos</li>
              <li>Capacidade de traduzir necessidades médicas para soluções tecnológicas</li>
              <li>Experiência prática em gestão de dados sensíveis de pacientes</li>
            </ul>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Hospital className="text-blue-500" />
              Áreas de Aplicação
            </h3>
            <ul className="space-y-2 text-slate-600">
              <li>Desenvolvimento de sistemas para gestão hospitalar</li>
              <li>Soluções de telemedicina e monitoramento remoto</li>
              <li>Sistemas de gestão de dados clínicos e prontuários eletrônicos</li>
            </ul>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <User className="text-blue-500" />
              Diferencial Profissional
            </h3>
            <ul className="space-y-2 text-slate-600">
              <li>Visão holística do setor de saúde</li>
              <li>Experiência em comunicação com profissionais de saúde</li>
              <li>Conhecimento das necessidades reais dos usuários finais na área médica</li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};