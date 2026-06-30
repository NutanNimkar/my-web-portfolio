import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import Hero from "./components/Hero";
import { FloatingNavBar } from "./components/ui/FloatingNavBar";
import { navItems } from "@/data";
import Footer from "./components/Footer";

const spinner = (
  <div className="flex items-center justify-center h-96">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
  </div>
);

const Grid = dynamic(() => import("./components/Grid"), { loading: () => spinner, ssr: false });
const RecentProjects = dynamic(() => import("./components/RecentProjects"), { loading: () => spinner });
const Skills = dynamic(() => import("./components/Skills"), { loading: () => spinner, ssr: false });
const Experience = dynamic(() => import("./components/Experience"), { loading: () => spinner });

export default function Home() {
  return (
    <main
      className="relative flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5"
      style={{
        background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(5,65,33,0.986) 47%, rgba(8,73,87,1) 100%)",
      }}
    >
      <div className="max-w-7xl w-full">
        <FloatingNavBar navItems={navItems} />
        <Hero />

        <Suspense fallback={spinner}>
          <Grid />
        </Suspense>

        <Suspense fallback={spinner}>
          <RecentProjects />
        </Suspense>

        <Suspense fallback={spinner}>
          <Skills />
        </Suspense>

        <Suspense fallback={spinner}>
          <Experience />
        </Suspense>

        <Footer />
      </div>
    </main>
  );
}
