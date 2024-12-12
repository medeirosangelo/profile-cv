import { Award } from "lucide-react";
import { Card } from "../ui/card";

export const CertificationsSection = () => {
  return (
    <div>
      <h2 className="text-3xl font-heading font-bold text-slate-900 mb-8">
        Certificações
      </h2>
      <div className="space-y-4">
        <Card className="p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-start gap-4">
            <Award className="text-blue-500 mt-1" size={24} />
            <div>
              <h3 className="text-xl font-bold mb-2">AWS Cloud Practitioner</h3>
              <p className="text-slate-600">Amazon Web Services</p>
              <p className="text-slate-500">Competências em serviços cloud AWS, arquitetura e segurança</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-start gap-4">
            <Award className="text-blue-500 mt-1" size={24} />
            <div>
              <h3 className="text-xl font-bold mb-2">Junior Cybersecurity Analyst</h3>
              <p className="text-slate-600">Cisco Networking Academy</p>
              <p className="text-slate-500">Especialização em análise de segurança e proteção de redes</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-start gap-4">
            <Award className="text-blue-500 mt-1" size={24} />
            <div>
              <h3 className="text-xl font-bold mb-2">Azure Fundamentals (AZ-900)</h3>
              <p className="text-slate-600">Microsoft</p>
              <p className="text-slate-500">Fundamentos em cloud computing e serviços Microsoft Azure</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-start gap-4">
            <Award className="text-blue-500 mt-1" size={24} />
            <div>
              <h3 className="text-xl font-bold mb-2">Ethical Hacking Essentials</h3>
              <p className="text-slate-600">EC-Council</p>
              <p className="text-slate-500">Técnicas avançadas de penetration testing e segurança ofensiva</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};