import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MidSection from "@/components/MidSection";
import NavBar from "@/components/NavBar";
import ServicesSection from "@/components/ServicesSection";
import Testimonials from "@/components/Testimonials";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex flex-col">
      <NavBar />
      <Hero />
      <MidSection />
      <ServicesSection />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}
