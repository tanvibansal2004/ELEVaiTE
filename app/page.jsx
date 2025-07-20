import CTASection from "@/components/ctaSection";
import FAQSection from "@/components/faqSection";
import FeatureSection from "@/components/featureSection";
import HeroSection from "@/components/heroSection";
import HowItWorksSection from "@/components/howItWorksSection";
import StatSection from "@/components/statSection";
import TestimonialSection from "@/components/testimonialSection";

export default function Home() {
  return (
    <>
      <div className="grid-background">
        <HeroSection />
        <FeatureSection />
        <StatSection />
        <HowItWorksSection />
        <TestimonialSection />
        <FAQSection />
        <CTASection />
      </div>
    </>
  );
}
