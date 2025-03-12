import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import ModalLogin from "./ModalLogin";
import ModalRegistrazione from "./ModalRegistrazione";
import ModalDeleteAccount from "./ModalDeleteAccount";
function TopBar() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const navigate = useNavigate();

  const handleDeleteAccount = () => {
    setDeleteModal(true);
  };

  const handleLogOut = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <>
      {["md"].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary p-0 my_navbar m-0" sticky="top">
          <Container>
            <Navbar.Brand>
              <Link to="/">
                <img src="../src/assets/logo_SEAPASS.png" alt="seapass logo" width={"100px"} />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} onClick={() => setShowOffcanvas(true)} className="link" />
            <Navbar.Offcanvas
              className="canvas"
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              show={showOffcanvas}
              onHide={() => setShowOffcanvas(false)}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>Seapass</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <NavDropdown title="Impostazioni" id={`offcanvasNavbarDropdown-expand-${expand}`}>
                    <NavDropdown.Item href="/">Cambiare password</NavDropdown.Item>
                    <NavDropdown.Item href="/" onClick={handleLogOut}>
                      Log-out
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={handleDeleteAccount}>Elimina account</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      <ModalDeleteAccount show={deleteModal} onHide={() => setDeleteModal(false)} />
    </>
  );
}

export default TopBar;
