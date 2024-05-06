import FeatureCourses from "@/components/FeatureCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import TestimonialCards from "@/components/TestimonialCards";
import UpCommingWebiners from "@/components/UpCommingWebiners";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
       <HeroSection />
       <FeatureCourses />
       <WhyChooseUs />
       <TestimonialCards />
       <UpCommingWebiners />
       <Instructors />
       <Footer />
    </main>
  );
}
