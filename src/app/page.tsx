import Accordion from "@/components/Home/Accordion";
import EighthSection from "@/components/Home/EighthSection";
import FifthSection from "@/components/Home/FifthSection";
import FirstSection from "@/components/Home/FirstSection";
import Footer from "@/components/Home/Footer";
import FourthSection from "@/components/Home/FourthSection";
import Navbar from "@/components/Home/Navbar";
import SecondSection from "@/components/Home/SecondSection";
import SeventhSection from "@/components/Home/SeventhSection";
import SixthSection from "@/components/Home/SixthSection";
import ThirdSection from "@/components/Home/ThirdSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing | Home",
};

export default async function Home() {
  return (
    <div>
      <Navbar />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <SeventhSection />
      <EighthSection />
      <Footer />
    </div>
  );
}
