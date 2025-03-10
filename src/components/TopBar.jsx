import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
const TopBar = () => {
  return (
    <>
      {["lg"].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary p-0 my_navbar m-0" sticky="top">
          <Container>
            <Navbar.Brand>
              <Link to="/">
                <img src="../src/assets/logo_SEAPASS.png" alt="seapass logo" width={"100px"} />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              className="canvas"
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>Seapass</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Registrati</Nav.Link>
                  <Nav.Link href="#action2">Login</Nav.Link>
                  <NavDropdown title="Link Utili" id={`offcanvasNavbarDropdown-expand-${expand}`}>
                    <NavDropdown.Item href="#action3">Navi da Crociera</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Navi da Carico</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Traghetti</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action6">Formazione</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default TopBar;
