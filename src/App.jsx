import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TopBar from "./components/TopBar";
import HeroSection from "./components/HeroSection";

import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./components/Profile";
import AdminDashboard from "./components/AdminDashboard";

function App() {
  return (
    <>
      <BrowserRouter
        future={{
          v7_relativeSplatPath: true,
          v7_startTransition: true
        }}
      >
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/admin/:id" element={<AdminDashboard />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
