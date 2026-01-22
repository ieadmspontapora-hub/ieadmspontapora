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
import CamisetaCarousel from "@/components/CamisetaCarousel";




const Index = () => {
   const camisetas = [
  "https://res.cloudinary.com/dgpsnu8ks/image/upload/v1769100274/Camisa1_n9xv8q.jpg",
  "https://res.cloudinary.com/dgpsnu8ks/image/upload/v1769100281/Camisa2_cvcb3l.jpg",
];

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
           <div>
      <CamisetaCarousel camisetas={camisetas} />
    </div>
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
