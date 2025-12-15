import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import LeadershipSection from "@/components/LeadershipSection";
import WorshipSchedule from "@/components/WorshipSchedule";
import EventsSection from "@/components/EventsSection";
import PrayerRequestCard from "@/components/PrayerRequestCard";
import ContactSection from "@/components/ContactSection";
import ContributionCard from "@/components/ui/ContributionCard"
import NossaIgrejaCard from "@/components/NossaIgrejaCard";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div
      className="min-h-screen bg-no-repeat relative"
      style={{
        backgroundImage: "url('/images/img-backgroundPapelCell.png')",
        backgroundSize: "cover",
        backgroundPosition: "center top", // reduz sensação de zoom
        backgroundAttachment: "fixed",   // melhora percepção de qualidade
      }}
    >
      {/* overlay suave para disfarçar pixelização */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-[1px]" />

      <div className="relative z-10">
        <Header />
        <main>
          <HeroSection />
          <NossaIgrejaCard />
          <ContributionCard />
          <PrayerRequestCard />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
