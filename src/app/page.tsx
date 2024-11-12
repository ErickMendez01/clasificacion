import AboutUs from "@/components/aboutUs";
import Contact from "@/components/contact";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Home() {
  return (
    <main className="space-y-40 mb-0">
      <Header />
      <Features />
      <AboutUs />
      <Contact />
      <Footer />
    </main>
  );
}
