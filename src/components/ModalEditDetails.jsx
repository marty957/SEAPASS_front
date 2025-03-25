import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";

function ModalEditDetails({ show, onHide, details, admin }) {
  const [name, setName] = useState(details.name);
  console.log("Admin status:", admin);
  const [surname, setSurname] = useState(details.surname);
  const [email, setEmail] = useState(details.email);
  const [username, setUsername] = useState(details.username);

  const token = localStorage.getItem("token");

  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("");

  const handleDetailsChanged = (e) => {
    e.preventDefault();

    fetch(`http://localhost:8080/api/user/${details.id}`, {
      method: "PATCH",
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
          return resp.json();
        }
      })
      .then((r) => {
        console.log(r);
        setAlertMessage("Modifica avvenuta con successo ✔️✔️✔️✔️");
        setAlertType("linear-gradient(180deg, rgba(34,167,224,1) 31%, rgba(164,203,214,1) 88%)");
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
          onHide();
        }, 3000);
      })
      .catch((err) => {
        console.log(err);
        setAlertMessage("Si è verificato un errore nella modifica dati ✖️✖️✖️✖️✖️✖️");
        setAlertType("linear-gradient(180deg, rgba(224,34,34,1) 31%, rgba(164,203,214,1) 88%)");
        setTimeout(() => {
          setShowAlert(false);
        }, 5000);
      });
  };
  useEffect(() => {
    if (details) {
      setName(details.name);
      setAlertMessage(details.email);
      setSurname(details.surname);
      setUsername(details.username);
    }
  }, [details]);

  return (
    <>
      <Modal show={show} onHide={onHide} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Modifica Dati</Modal.Title>
        </Modal.Header>
        {showAlert && (
          <div className={`alert fade show text-center container`} style={{ background: alertType }} role="alert">
            {alertMessage}
          </div>
        )}
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
                disabled={!admin}
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
