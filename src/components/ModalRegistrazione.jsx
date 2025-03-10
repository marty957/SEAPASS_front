import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
function ModalRegistrazione(props) {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Registrazione</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="firstname">
            <Form.Label>Firstname</Form.Label>
            <Form.Control type="text" placeholder="Your firstname" />
          </Form.Group>
        </Form>
        <Form>
          <Form.Group className="mb-3" controlId="surname">
            <Form.Label>Surname</Form.Label>
            <Form.Control type="text" placeholder="Your surname" />
          </Form.Group>
        </Form>
        <Form>
          <Form.Group className="mb-3" controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Choose your username" />
          </Form.Group>
        </Form>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password" />
        <Form.Label>password</Form.Label>
        <Form.Control type="password" placeholder="your password" />
      </Modal.Body>
      <Modal.Footer>
        <Button>Sign-in</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalRegistrazione;
