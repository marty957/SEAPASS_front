import { Container } from "react-bootstrap";

const HeroSection = () => {
  return (
    <>
      <div className="isole container-fluid">
        <img src="../src/assets/sfondo.jpg" alt="isole caiman" className="overflow-hidden isole" width={"100%"} height={"380vh"} />
      </div>
      <Container fluid className="cit">
        <Container className="w-75 align-center p-5 text-center">
          <h1>SEAPASS</h1>
          <p>Naviga senza pensieri. Con noi avrai i tuoi certificati sempre sotto controllo</p>
        </Container>
      </Container>
    </>
  );
};

export default HeroSection;
