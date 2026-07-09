import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import WorksSection from "@/components/WorksSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BackgroundContainer from "@/components/BackgroundContainer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <BackgroundContainer />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <WorksSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
