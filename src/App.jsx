import "./App.css";
import Hero from "./components/hero/hero";
import Navbar from "./components/navbar/navbar";
import WeProvideBanner from "./components/we-provide-banner/we-provide-banner";

function App() {
  return (
    <div className="bg-[#FAF2EE] selection:bg-[#663130] text-[#663130] selection:text-white">
      <Navbar />
      <Hero />
      <WeProvideBanner />
    </div>
  );
}

export default App;
