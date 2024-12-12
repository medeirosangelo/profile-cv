import { Heart, Hospital, Stethoscope, User } from "lucide-react";
import { Card } from "./ui/card";

export const HealthSection = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-indigo-50" id="health">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-heading font-bold text-slate-900 mb-8">
          Perfil em Enfermagem
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Stethoscope className="text-blue-500" />
              Formação
            </h3>
            <ul className="space-y-2 text-slate-600">
              <li>Técnico em Enfermagem - Instituto Projeção</li>
              <li>Especialização em Instrumentação Cirúrgica</li>
              <li>Enfermagem em Saúde da Criança e do Adolescente</li>
            </ul>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Hospital className="text-blue-500" />
              Experiência Hospitalar
            </h3>
            <ul className="space-y-2 text-slate-600">
              <li>Hospital Lotty Iris - Estágio em Enfermagem</li>
              <li>CEHMO - Centro de Hemodiálise</li>
              <li>Hospital Cosme Silva</li>
            </ul>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Heart className="text-blue-500" />
              Especializações
            </h3>
            <ul className="space-y-2 text-slate-600">
              <li>Sala de Vacinas</li>
              <li>Instrumentação Cirúrgica</li>
              <li>Diálise e Hemodiálise</li>
            </ul>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <User className="text-blue-500" />
              Registro Profissional
            </h3>
            <ul className="space-y-2 text-slate-600">
              <li>COREN RR 001.937.924</li>
              <li>Atuação em Cuidados Diretos ao Paciente</li>
              <li>Monitoramento de Sinais Vitais</li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};