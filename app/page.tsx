import Hero from "./components/Hero";
import { FloatingNavBar } from "./components/ui/FloatingNavBar";
import Grid from "./components/Grid";
import { navItems } from "@/data";
import RecentProjects from "./components/RecentProjects";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative bg-[#064E3B] flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5"
      style={{ 
        background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(5,65,33,0.986) 47%, rgba(8,73,87,1) 100%)"
      }}>
      <div className="max-w-7xl w-full">
      <FloatingNavBar navItems={navItems}/>
      <Hero />
      <Grid />
      <RecentProjects />
      <Experience />
      <Footer />
      </div>
    </main>
  );
}
