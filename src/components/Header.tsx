
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "./ui/button";

export const Header = () => {
  return (
    <header className="w-full bg-gradient-to-r from-blue-50 to-indigo-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-4 animate-fade-in">
          Ângelo Gabriel Medeiros
        </h1>
        <p className="text-lg text-slate-600 mb-6 animate-fade-in">
          Desenvolvedor de Sistemas & Analista de Dados
        </p>
        <div className="flex flex-wrap gap-4 animate-fade-in">
          <Button
            variant="outline"
            className="gap-2"
            onClick={() => window.open("https://github.com/medeirosangelo", "_blank")}
          >
            <Github size={20} />
            GitHub
          </Button>
          <Button
            variant="outline"
            className="gap-2"
            onClick={() => window.open("https://www.linkedin.com/in/medeirosangelo", "_blank")}
          >
            <Linkedin size={20} />
            LinkedIn
          </Button>
          <Button
            variant="outline"
            className="gap-2"
            onClick={() => window.location.href = "mailto:medeirosangelogabrieltrabalho@gmail.com"}
          >
            <Mail size={20} />
            Email
          </Button>
          <Button
            variant="outline"
            className="gap-2"
            onClick={() => window.location.href = "tel:+5595991765312"}
          >
            <Phone size={20} />
            (95) 99176-5312
          </Button>
        </div>
      </div>
    </header>
  );
};
