import Header from "@/components/Header";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skill from "@/components/Skill";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <About />
      <main className="w-full max-w-3xl mx-auto px-6 sm:px-16 pb-24 z-10 flex flex-col gap-16">
        <Projects />
        <Skill />
      </main>
    </div>
  );
}
