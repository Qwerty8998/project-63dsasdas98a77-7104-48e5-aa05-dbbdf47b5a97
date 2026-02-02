import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Calculator from "@/components/Calculator";
import Equipment from "@/components/Equipment";
import Process from "@/components/Process";
import GeoMap from "@/components/GeoMap";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <TrustBar />
      <Calculator />
      <Equipment />
      <Process />
      <GeoMap />
      <Footer />
    </div>
  );
};

export default Index;
