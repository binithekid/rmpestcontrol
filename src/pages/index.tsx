import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MidSection from "@/components/MidSection";
import MobileNavBar from "@/components/MobileNavBar";
import NavBar from "@/components/NavBar";
import ServicesSection from "@/components/ServicesSection";
import Testimonials from "@/components/Testimonials";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`flex flex-col ${montserrat.className}`}>
      <NavBar />
      <MobileNavBar />
      <Hero />
      <MidSection />
      <ServicesSection />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}
