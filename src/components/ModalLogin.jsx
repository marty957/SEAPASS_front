import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ModalLogin(props) {
  const [logIn, setLogIn] = useState({ username: "", password: "" });

  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();

    fetch(`http://localhost:8080/api/user/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: logIn.username,
        password: logIn.password
      })
    })
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        }
      })
      .then((params) => {
        if (params) {
          console.log("fetch di login effettuata correttamente l'id: ", params.id, "token: ", params.token);
          localStorage.setItem("token", params.token);
          props.onHide();
          navigate(`/profile/${params.id}`);
        }
      })
      .catch((err) => {
        console.log("Problemi nella fetch " + err);
      });
  };

  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="text-center">
          Login
        </Modal.Title>
      </Modal.Header>
      <Form onSubmit={login}>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Username"
              required
              value={logIn.username}
              onChange={(e) => setLogIn({ ...logIn, username: e.target.value })}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>password</Form.Label>
            <Form.Control
              type="password"
              placeholder="your password"
              required
              value={logIn.password}
              onChange={(e) => setLogIn({ ...logIn, password: e.target.value })}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button className="cit" type="submit">
            Log-in
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default ModalLogin;
