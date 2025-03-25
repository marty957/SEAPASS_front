import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { Spinner } from "react-bootstrap";

function ModalEditCertificate({ show, onHide, info, userId }) {
  const [name, setName] = useState(info.name);
  const [description, setDescription] = useState(info.description);
  const [file, setFile] = useState(null);
  const [fileUrl, setFileUrl] = useState(info.pdf);
  const [issueDate, setIssueDate] = useState(info.issueDate);
  const [expireDate, setExpireDate] = useState(info.expireDate);
  const [id, setId] = useState(userId);
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token");

  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("");

  const fileName = file ? file.name : fileUrl ? fileUrl.split("/").pop() : "";

  const handleFileChange = (e) => {
    const selecetedFile = e.target.files[0];
    if (selecetedFile) {
      setFile(selecetedFile);
      setFileUrl(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("issueDate", issueDate);
    formData.append("expireDate", expireDate);
    formData.append("userId", id);

    if (file) {
      formData.append("file", file);
    }

    fetch(`http://localhost:8080/api/certificate/${info.id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`
      },
      body: formData
    })
      .then((resp) => {
        if (resp.ok) {
          console.log(resp);
          return resp.json();
        }
      })
      .then(() => {
        setLoading(false);
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
        setAlertType("linear-gradient(180deg, rgb(216, 76, 76) 31%, rgb(234, 223, 215)) 88%)");
        setTimeout(() => {
          setShowAlert(false);
        }, 5000);
      });
  };
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
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Course's name</Form.Label>
              <Form.Control type="text" placeholder="Name of the course" value={name} onChange={(e) => setName(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                rows={2}
                as="textarea"
                placeholder="Short description of the course"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="File">
              <Form.Label>File</Form.Label>
              <Form.Control type="file" accept="application/pdf" onChange={handleFileChange} />
              {fileName && (
                <p className="mt-2">
                  <strong>File caricato:</strong>{" "}
                  <a className="text-decoration-none" style={{ color: "#22a7e0" }} href={fileUrl || URL.createObjectURL(file)} target="_blank">
                    {fileName}
                  </a>
                </p>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="Issue date">
              <Form.Label>Issue date</Form.Label>
              <Form.Control type="date" value={issueDate} onChange={(e) => setIssueDate(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="expire date">
              <Form.Label>Expire date</Form.Label>
              <Form.Control type="date" value={expireDate} onChange={(e) => setExpireDate(e.target.value)} />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            {loading && <Spinner animation="border" variant="info" />}
            <button type="submit" className="button py-1 " style={{ color: "#ffffff", borderRadius: "8px", cursor: "pointer" }}>
              Salva modifiche
            </button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default ModalEditCertificate;
