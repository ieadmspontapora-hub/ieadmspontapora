import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import LeadershipSection from "@/components/LeadershipSection";
import WorshipSchedule from "@/components/WorshipSchedule";
import EventsSection from "@/components/EventsSection";
import PrayerRequestCard from "@/components/PrayerRequestCard";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat"
         style={{
           backgroundImage: "url('/images/img-backgroundpapel.png')",
           backgroundSize: 'cover',
           backgroundPosition: 'center'
         }}>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <LeadershipSection />
        <WorshipSchedule />
        <EventsSection />
        <PrayerRequestCard />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;