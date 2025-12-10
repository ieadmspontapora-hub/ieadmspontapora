import { PrayerRequestCard } from "@/components/PrayerRequestCard";
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md">
        <PrayerRequestCard />
      </div>
      <MadeWithDyad />
    </div>
  );
};

export default Index;