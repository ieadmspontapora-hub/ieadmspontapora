import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ContributionCard from "@/components/ui/ContributionCard";
import NossaIgrejaCard from "@/components/NossaIgrejaCard";
import Footer from "@/components/Footer";
import PrayerRequestCard from "@/components/PrayerRequestCard";

const Index = () => {
  return (
    <div
      className="min-h-screen bg-no-repeat relative"
      style={{
        backgroundImage: "url('/images/img-backgroundPapelCell.png')",
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundAttachment: "fixed",
      }}
    >
      {/* overlay suave */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-[1px]" />

      <div className="relative z-10">
        <Header />
        <main>
          <HeroSection />
          <NossaIgrejaCard />
          <ContributionCard />
          <PrayerRequestCard />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;