import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";

function ModalEditDetails({ show, onHide, details }) {
  const [name, setName] = useState(details.name);
  const [surname, setSurname] = useState(details.surname);
  const [email, setEmail] = useState(details.email);
  const [username, setUsername] = useState(details.username);
  const token = localStorage.getItem("token");
  const { id } = useParams();

  const handleDetailsChanged = (e) => {
    e.preventDefault();

    fetch(`http://localhost:8080/api/user/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        name: name,
        surname: surname,
        username: username,
        email: email
      })
    })
      .then((resp) => {
        if (resp.ok) {
          console.log(resp);
          return resp.text();
        }
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    if (details) {
      setName(details.name);
    }
  }, [details]);

  return (
    <>
      <Modal show={show} onHide={onHide} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Modifica Dati</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleDetailsChanged}>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="your name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="surname">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="your surname"
                value={surname}
                onChange={(e) => {
                  setSurname(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="email"
                placeholder="your email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="your name"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <button type="submit" className="button py-1 " style={{ color: "#ffffff", borderRadius: "8px", cursor: "pointer" }}>
              Salva modifiche
            </button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}
export default ModalEditDetails;
