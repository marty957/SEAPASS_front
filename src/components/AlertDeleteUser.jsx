import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function AlertDeleteUser(props) {
  return (
    <>
      <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Account eliminato</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Tutti i tuoi dati sono stati cancellati</p>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default AlertDeleteUser;
