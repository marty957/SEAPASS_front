import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate, useParams } from "react-router-dom";
import AlertDeleteUser from "./AlertDeleteUser";
import { useState } from "react";

function ModalDeleteAccount(props) {
  const { id } = useParams();

  const token = localStorage.getItem("token");

  console.log(id);

  const navigate = useNavigate();
  const [alert, setAlert] = useState();

  const deleteAccount = (e) => {
    e.preventDefault();

    fetch(`http://localhost:8080/api/user/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((resp) => {
        if (resp.ok) {
          return resp.text();
        } else {
          throw new Error("Errore nella cancellazione dell'account");
        }
      })
      .then((data) => {
        if (data) {
          console.log("account eliminato");
          localStorage.removeItem("token");
          props.onHide();
          setAlert(true);
          setTimeout(() => {
            navigate("/");
          }, 3000);
        }
      })
      .catch((err) => {
        console.log("problemi di fetch", err);
      });
  };
  return (
    <>
      <Modal {...props}>
        <Modal.Header closeButton>
          <Modal.Title>Eliminazione Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>Sei sicuro di voler eliminare il tuo account? Tutti i tuoi dati saranno cancellati e non saremo in grado di recuperarli</Modal.Body>
        <Modal.Footer className="justify-content-evenly align-items-baseline">
          <a className="link text-decoration-none" onClick={props.onHide}>
            Back
          </a>
          <a onClick={deleteAccount}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="red" className="bi bi-trash3" viewBox="0 0 16 16">
              <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
            </svg>
          </a>
        </Modal.Footer>
      </Modal>
      {<AlertDeleteUser show={alert} onHide={() => setAlert(false)} />}
    </>
  );
}

export default ModalDeleteAccount;
