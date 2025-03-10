import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TopBar from "./components/TopBar";
import HeroSection from "./components/HeroSection";
import LinkSection from "./components/LinkSection";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter
        future={{
          v7_relativeSplatPath: true,
          v7_startTransition: true
        }}
      >
        <TopBar />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/link" element={<LinkSection />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
