import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import AlertNewUser from "./AlertNewUser";
import { useState } from "react";
function ModalRegistrazione(props) {
  const [user, setUser] = useState({ name: "", surname: "", username: "", email: "", password: "" });

  const [successMessage, setSuccessMessage] = useState(false);

  const signIn = (e) => {
    e.preventDefault();
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
          props.onHide();
          setSuccessMessage(true);
        }
      })
      .catch((err) => {
        console.error(err);
        console.log(err);
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
            <Form.Control
              type="password"
              placeholder="your password"
              required
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </Modal.Body>
          <Modal.Footer>
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
