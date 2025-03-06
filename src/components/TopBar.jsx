import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
const TopBar = () => {
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img alt="logo SEEPASS" src="../src/assets/1.svg" width="30" height="30" className="d-inline-block align-top" />
            <span m-5>SEEPASS</span>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default TopBar;
