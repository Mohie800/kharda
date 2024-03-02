import Image from "next/image";
import Header from "@/ui/header/Header";
import Hero from "@/ui/hero/Hero";
import "./style.css";
import About from "@/ui/about/About";
import Features from "@/ui/features/Features";
import Join from "@/ui/join/Join";
import Footer from "@/ui/footer/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <Hero />
      <About />
      <Features />
      <Join />
      <Footer />
    </main>
  );
}
