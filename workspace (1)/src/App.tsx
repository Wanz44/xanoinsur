import { Backdrop, Footer, Nav } from "./components/Chrome";
import Hero from "./components/Hero";
import { Layers, Manifesto, Moteurs } from "./components/Systems";
import BrainLab from "./components/BrainLab";
import Families from "./components/Families";
import Trust from "./components/Trust";
import { Business, Roadmap } from "./components/Business";

export default function App() {
  return (
    <div id="top" className="relative min-h-screen overflow-x-clip">
      <Backdrop />
      <div className="noise" aria-hidden="true" />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <Manifesto />
        <Layers />
        <BrainLab />
        <Families />
        <Moteurs />
        <Trust />
        <Business />
        <Roadmap />
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
