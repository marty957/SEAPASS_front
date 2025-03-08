import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TopBar from "./components/TopBar";
import HeroSection from "./components/HeroSection";
import LinkSection from "./components/LinkSection";

function App() {
  return (
    <>
      <TopBar />
      <HeroSection />
      <LinkSection />
    </>
  );
}

export default App;
