import { Container } from "react-bootstrap";
import LinkSection from "./LinkSection";
import TopBar from "./TopBar";

const HeroSection = () => {
  return (
    <>
      <TopBar />
      <div className="isole container-fluid">
        <img src="../src/assets/sfondo.jpg" alt="isole caiman" className="overflow-hidden isole" width={"100%"} height={"380vh"} />
      </div>
      <Container fluid className="cit p-0">
        <Container className="w-75 align-center px-3 py-5 text-center mx-auto">
          <h1>SEAPASS</h1>
          <p className="fs-4">Naviga senza pensieri. Con noi avrai i tuoi certificati sempre sotto controllo</p>
        </Container>
      </Container>
      <LinkSection />
      <Container fluid className=" px-3 py-5 text-center mx-auto">
        <div className="d-flex justify-content-around  align-items-center">
          <div>
            <h3 className="mb-4">
              <scan style={{ borderBottom: " 1px solid #22a7e0" }}>Supporta il nostro lavoro!</scan>
            </h3>
            <p>
              La tua donazione a SeaPass è essenziale per sostenere
              <br /> la nostra missione e migliorare i servizi offerti alla comunità. <br />
              Grazie!
            </p>
          </div>
          <div className="rounded cit p-2">
            <img src="../src/assets/qrcode.png" alt="qr code" width={"150px"} className=" rounded" />
            <p className="mt-2 p-0">Scansiona e dona!</p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default HeroSection;
