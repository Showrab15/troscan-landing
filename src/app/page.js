import Banner from "@/components/Banner/Banner";
import CaseStudies from "@/components/CaseStudies/CaseStudies";
import Contact from "@/components/Contact/Contact";
import FAQSection from "@/components/FAQ/FAQ";
import Features from "@/components/Features/Features";
import Pricing from "@/components/Pricing/Pricing";

export default function Home() {
  return (
    <div>
      <Banner />
      <CaseStudies />
      <Features />
      <Pricing />
      <FAQSection />
      <Contact />
    </div>
  );
}
