import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import Services from "./components/Services";

export default function Home() {
  return (
    <div>
      <Navigation />
      <Hero />
      <Services />
    </div>
  );
}
