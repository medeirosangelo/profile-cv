import { Header } from "@/components/Header";
import { HealthSection } from "@/components/HealthSection";
import { TechSection } from "@/components/TechSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <TechSection />
        <HealthSection />
      </main>
    </div>
  );
};

export default Index;