import "./App.css";
import Navbar from "./components/navbar/navbar";
import { Routes, Route } from "react-router-dom";
import AboutPage from "./pages/about";
import PricingPage from "./pages/pricing";
import HomePage from "./pages/home";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <div className="bg-[#FAF2EE] selection:bg-[#663130] text-[#663130] selection:text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/pricing" element={<PricingPage />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
