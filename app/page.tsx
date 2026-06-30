import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import Hero from "./components/Hero";
import { FloatingNavBar } from "./components/ui/FloatingNavBar";
import { navItems } from "@/data";
import Footer from "./components/Footer";

const shimmer = (h: string) => (
  <div className={`w-full ${h} rounded-2xl bg-white/5 animate-pulse`} />
);

const Experience = dynamic(() => import("./components/Experience"), { loading: () => shimmer("h-96"), ssr: false });
const RecentProjects = dynamic(() => import("./components/RecentProjects"), { loading: () => shimmer("h-96"), ssr: false });
const Skills = dynamic(() => import("./components/Skills"), { loading: () => shimmer("h-64"), ssr: false });

export default function Home() {
  return (
    <main
      className="relative flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5"
      style={{
        background: "#0d0d1a",
      }}
    >
      <div className="max-w-7xl w-full">
        <FloatingNavBar navItems={navItems} />
        <Hero />

        <div className="border-t border-white/[0.06] my-8" />

        <Suspense fallback={shimmer("h-96")}>
          <Experience />
        </Suspense>

        <div className="border-t border-white/[0.06] my-8" />

        <Suspense fallback={shimmer("h-96")}>
          <RecentProjects />
        </Suspense>

        <div className="border-t border-white/[0.06] my-8" />

        <Suspense fallback={shimmer("h-64")}>
          <Skills />
        </Suspense>

        <div className="border-t border-white/[0.06] my-8" />

        <Footer />
      </div>
    </main>
  );
}
