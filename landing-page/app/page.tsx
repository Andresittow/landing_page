import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/HeroBanner";
import MenuSection from "@/components/MenuSection";
import Bestsellers from "@/components/Bestsellers";
import OurPromise from "@/components/OurPromise";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fdf6f0] font-sans">
      <Navbar />
      <HeroBanner />

      {/*
        Gran contenedor blanco que empieza solapando el hero rojo
        y envuelve Menu + Bestsellers + Our Promise
      */}
      <div className="relative -mt-8 bg-white rounded-t-[2rem] shadow-sm">
        <MenuSection />
        <Bestsellers />
        <OurPromise />
      </div>

      <Footer />
    </main>
  );
}