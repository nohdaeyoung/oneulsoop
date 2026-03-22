import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ConnectFlow from "@/components/ConnectFlow";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Services />
        <ConnectFlow />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
