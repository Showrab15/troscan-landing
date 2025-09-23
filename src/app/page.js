import Banner from "@/components/Banner/Banner";
import CaseStudies from "@/components/CaseStudies/CaseStudies";
import Contact from "@/components/Contact/Contact";
import FAQSection from "@/components/FAQ/FAQ";
import Features from "@/components/Features/Features";
import Pricing from "@/components/Pricing/Pricing";
import ProcessSection from "@/components/ProcessSection/ProcessSection";
import Slider from "@/components/Slider/Slider";
import Testimonial from "@/components/Testimonial/Testimonial";

export default function Home() {
  return (
    <div>
      <div className="bg-[#151E1B]">
        <Banner />
        <Slider />

        <Features />
      </div>
      <div className="bg-[#0A0F0D]">
        <CaseStudies />
        <Pricing />
      </div>
      <div className="bg-[#152921]">
        <ProcessSection />
        <Testimonial />
        <FAQSection />
      </div>
      <Contact />
    </div>
  );
}
