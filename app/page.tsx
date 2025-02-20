import DiscoverOurLatestSection from "@/components/sections/DiscoverOurLatestSection";
import GetInTouchSection from "@/components/sections/GetInTouchSection";
import HeroSection from "@/components/sections/HeroSection";
import LeadershipSection from "@/components/sections/LeadershipSection";
import OurApproachSection from "@/components/sections/OurApproachSection";
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
      <OurApproachSection />
      <div className="bg-[#F6F6F6]">
        <DiscoverOurLatestSection />
      </div>
      <div className="bg-[#EAEAEA]">
        <GetInTouchSection />
      </div>
    </>
  );
}
