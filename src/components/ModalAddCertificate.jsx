import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

function ModalAddCertificate(props) {
  const [certificate, setCertificate] = useState({ name: "", description: "", file: null, issueDate: "", expireDate: "", category: "" });
  const { id } = useParams();
  const token = localStorage.getItem("token");

  const [loading, setLoading] = useState(false);

  const today = new Date().toISOString().split("T")[0];

  const addCetificate = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", certificate.name);
    formData.append("description", certificate.description);
    formData.append("issueDate", certificate.issueDate);
    formData.append("expireDate", certificate.expireDate);

    if (certificate.file) {
      formData.append("file", certificate.file);
    }

    setLoading(true);

    fetch(`http://localhost:8080/api/certificate/${id}/new`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`
      },
      body: formData
    })
      .then((resp) => {
        setLoading(false);
        props.onHide();
        return resp.text();
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Nuovo Certificato</Modal.Title>
      </Modal.Header>
      <Form onSubmit={addCetificate}>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="course">
            <Form.Label>Course's name</Form.Label>
            <Form.Control
              type="text"
              required
              placeholder="Course's name"
              value={certificate.name}
              onChange={(e) => setCertificate({ ...certificate, name: e.target.value })}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Short description of the course</Form.Label>
            <Form.Control
              as="textarea"
              rows={2}
              value={certificate.description}
              onChange={(e) => setCertificate({ ...certificate, description: e.target.value })}
            />
          </Form.Group>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Certificat PDF </Form.Label>
            <Form.Control type="file" accept="application/pdf" onChange={(e) => setCertificate({ ...certificate, file: e.target.files[0] })} />
          </Form.Group>
          <Form.Group controlId="category" className="mb-3">
            <Form.Label>Type of Certificate </Form.Label>
            <Form.Select
              aria-label="Default select example"
              value={certificate.category || "GENERAL"}
              onChange={(e) => setCertificate({ ...certificate, category: e.target.value })}
            >
              <option></option>
              <option value="GENERAL">GENERAL</option>
              <option value="MEDIICAL">MEDICAL</option>
              <option value="SECURITY">SECURITY</option>
              <option value="VISA">VISA</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="course">
            <Form.Label>Issue Date</Form.Label>
            <Form.Control
              type="date"
              required
              placeholder="Course's name"
              value={certificate.issueDate}
              onChange={(e) => setCertificate({ ...certificate, issueDate: e.target.value })}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="course">
            <Form.Label>Expire Date</Form.Label>
            <Form.Control
              type="date"
              required
              min={today}
              placeholder="Course's name"
              value={certificate.expireDate}
              onChange={(e) => setCertificate({ ...certificate, expireDate: e.target.value })}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          {loading && <Spinner animation="border" variant="info" />}
          <button type="submit" className="button py-1 " style={{ color: "#ffffff", borderRadius: "8px", cursor: "pointer" }}>
            Add Certificate
          </button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
export default ModalAddCertificate;
