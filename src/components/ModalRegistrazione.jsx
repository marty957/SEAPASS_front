import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import AlertNewUser from "./AlertNewUser";
import { useState } from "react";
import Spinner from "react-bootstrap/Spinner";

function ModalRegistrazione(props) {
  const [user, setUser] = useState({ name: "", surname: "", username: "", email: "", password: "" });

  const [successMessage, setSuccessMessage] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const signIn = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch(`http://localhost:8080/api/user/new`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: user.name,
        surname: user.surname,
        username: user.username,
        email: user.email,
        password: user.password
      })
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((resp) => {
        if (resp) {
          setUser({ name: "", surname: "", username: "", email: "", password: "" });
          setLoading(false);
          setShowPassword(false);
          props.onHide();
          setSuccessMessage(true);
        }
      })
      .catch((err) => {
        console.log(err);
        alert("errore nella registrazione");
      });
  };

  return (
    <>
      <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Registrazione</Modal.Title>
        </Modal.Header>
        <Form onSubmit={signIn}>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="firstname">
              <Form.Label>Firstname</Form.Label>
              <Form.Control
                autoFocus
                type="text"
                placeholder="Your firstname"
                required
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="surname">
              <Form.Label>Surname</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your surname"
                required
                value={user.surname}
                onChange={(e) => setUser({ ...user, surname: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Choose your username"
                required
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                required
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password" />
            <Form.Label>password</Form.Label>
            <div className="position-relative">
              <Form.Control
                type={showPassword ? "text" : "password"}
                placeholder="your password"
                required
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
              <span
                onClick={() => {
                  setShowPassword(!showPassword);
                  setTimeout(() => {
                    setShowPassword(false);
                  }, 2000);
                }}
                style={{ cursor: "pointer", position: "absolute", right: "10px", transform: "translateY(-130%)" }}
              >
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-eye-slash" viewBox="0 0 16 16">
                    <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z" />
                    <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829" />
                    <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z" />
                  </svg>
                )}
              </span>
            </div>
          </Modal.Body>
          <Modal.Footer>
            {loading && <Spinner animation="border" variant="info" />}
            <button type="submit" className="button py-1 " style={{ color: "#ffffff", borderRadius: "8px", cursor: "pointer" }}>
              Sign-in
            </button>
          </Modal.Footer>
        </Form>
      </Modal>
      {<AlertNewUser show={successMessage} onHide={() => setSuccessMessage(false)} />}
    </>
  );
}

export default ModalRegistrazione;
