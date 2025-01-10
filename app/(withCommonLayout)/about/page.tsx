import FAQ from "@/app/src/common/FAQ";
import FooterSection from "@/app/src/common/Footer";
import AboutMainBanner from "@/app/src/pages/About/AboutMainBanner";
import FoundationalValues from "@/app/src/pages/About/FoundationalValues";
import MissionVision from "@/app/src/pages/About/MissionVission";
import OurJourney from "@/app/src/pages/About/OurJourney";
import Consultation from "@/app/src/pages/Home/Consultation";

const AboutPage = () => {
  return (
    <div>
      <AboutMainBanner />
      <OurJourney />
      <MissionVision />
      <FoundationalValues />
      <FAQ />
      <Consultation />
      <FooterSection/>
    </div>
  );
};

export default AboutPage;
