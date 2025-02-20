import HeroSection from "@/components/sections/HeroSection";
import LeadershipSection from "@/components/sections/LeadershipSection";
import OurLeaders from "@/components/sections/OurLeaders";
import OurStory from "@/components/sections/OurStory";
import StatOverview from "@/components/sections/StatOverview";

export default function page() {
  return (
    <>
      <HeroSection />
      <OurStory />
      <StatOverview />
      <LeadershipSection />
      <OurLeaders />
      <LeadershipSection />
    </>
  );
}
