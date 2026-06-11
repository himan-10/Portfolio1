import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white selection:bg-zinc-800 selection:text-zinc-300">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Projects/>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
