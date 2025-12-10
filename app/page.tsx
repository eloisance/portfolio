import { Navbar, Footer } from './components/Layout';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { MediumFeed } from './components/MediumFeed';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-accent selection:text-white bg-dark text-slate-100">
      <Navbar />
      <main className="flex-grow pt-16">
        <div id="about">
          <Hero />
        </div>
        <div id="articles" className="bg-slate-900/50 py-20 border-y border-slate-800">
          <div className="container mx-auto px-4 md:px-6">
            <MediumFeed username="eloisance" />
          </div>
        </div>
        <div id="experience" className="container mx-auto px-4 md:px-6 py-20">
          <Experience />
        </div>
        <div id="projects" className="bg-slate-900/50 py-20 border-t border-slate-800">
          <div className="container mx-auto px-4 md:px-6">
            <Projects />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};