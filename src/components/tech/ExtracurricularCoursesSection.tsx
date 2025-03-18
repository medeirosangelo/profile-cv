
import { Award } from "lucide-react";
import { Card } from "../ui/card";

export const ExtracurricularCoursesSection = () => {
  return (
    <div>
      <h2 className="text-3xl font-heading font-bold text-slate-900 mb-8">
        Cursos Extracurriculares
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-start gap-4">
            <Award className="text-blue-500 mt-1" size={24} />
            <div>
              <h3 className="text-xl font-bold mb-2">Junior Cybersecurity Analyst</h3>
              <p className="text-slate-600">CISCO</p>
              <p className="text-slate-500">120 horas - 2025</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-start gap-4">
            <Award className="text-blue-500 mt-1" size={24} />
            <div>
              <h3 className="text-xl font-bold mb-2">Formação PHP Experience</h3>
              <p className="text-slate-600">DIO</p>
              <p className="text-slate-500">40 horas - 2024</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-start gap-4">
            <Award className="text-blue-500 mt-1" size={24} />
            <div>
              <h3 className="text-xl font-bold mb-2">Formação Python Backend Developer</h3>
              <p className="text-slate-600">DIO</p>
              <p className="text-slate-500">35 horas - 2022</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-start gap-4">
            <Award className="text-blue-500 mt-1" size={24} />
            <div>
              <h3 className="text-xl font-bold mb-2">Formação Machine Learning Specialist</h3>
              <p className="text-slate-600">DIO</p>
              <p className="text-slate-500">92 horas - 2024</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-start gap-4">
            <Award className="text-blue-500 mt-1" size={24} />
            <div>
              <h3 className="text-xl font-bold mb-2">Machine Learning Practitioner</h3>
              <p className="text-slate-600">BairesDev</p>
              <p className="text-slate-500">96 horas - 2024</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-start gap-4">
            <Award className="text-blue-500 mt-1" size={24} />
            <div>
              <h3 className="text-xl font-bold mb-2">Formação Linux</h3>
              <p className="text-slate-600">DIO</p>
              <p className="text-slate-500">44 horas - 2022</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-start gap-4">
            <Award className="text-blue-500 mt-1" size={24} />
            <div>
              <h3 className="text-xl font-bold mb-2">Formação Cybersecurity Specialist</h3>
              <p className="text-slate-600">DIO</p>
              <p className="text-slate-500">22 horas - 2024</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-start gap-4">
            <Award className="text-blue-500 mt-1" size={24} />
            <div>
              <h3 className="text-xl font-bold mb-2">Formação DevOps Fundamentals</h3>
              <p className="text-slate-600">DIO</p>
              <p className="text-slate-500">14 horas - 2022</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-start gap-4">
            <Award className="text-blue-500 mt-1" size={24} />
            <div>
              <h3 className="text-xl font-bold mb-2">Python Data Analytics</h3>
              <p className="text-slate-600">Squadio - DIO</p>
              <p className="text-slate-500">68 horas - 2024</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-start gap-4">
            <Award className="text-blue-500 mt-1" size={24} />
            <div>
              <h3 className="text-xl font-bold mb-2">Microsoft Azure AI Fundamentals</h3>
              <p className="text-slate-600">DIO</p>
              <p className="text-slate-500">35 horas - 2022</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-start gap-4">
            <Award className="text-blue-500 mt-1" size={24} />
            <div>
              <h3 className="text-xl font-bold mb-2">Formação Docker Fundamentals</h3>
              <p className="text-slate-600">DIO</p>
              <p className="text-slate-500">15 horas - 2023</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-start gap-4">
            <Award className="text-blue-500 mt-1" size={24} />
            <div>
              <h3 className="text-xl font-bold mb-2">Formação Power BI Analyst</h3>
              <p className="text-slate-600">DIO</p>
              <p className="text-slate-500">60 horas - 2023</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
