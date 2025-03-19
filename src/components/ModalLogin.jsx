import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ModalLogin(props) {
  const [logIn, setLogIn] = useState({ username: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("");
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
        } else if (resp.status === 400) {
          setShowAlert(true);
          setAlertMessage("Si è verificato un errore, l'user o la password inseriti sono errati");
          setAlertType("linear-gradient(180deg, rgb(216, 76, 76) 31%, rgb(234, 223, 215) 88%)");
          setTimeout(() => {
            setShowAlert(false);
          }, 3000);
        }
      })
      .then((params) => {
        if (params) {
          console.log("fetch di login effettuata correttamente l'id: ", params.id, "token: ", params.token);
          localStorage.setItem("token", params.token);
          setShowPassword(false);
          props.onHide();
          navigate(`/profile/${params.id}`);
        }
      })
      .catch((err) => {
        console.log("Problemi nella fetch " + err);
        setAlertMessage("Si è verificato un errore ");
        setAlertType("linear-gradient(180deg, rgb(216, 76, 76) 31%, rgb(234, 223, 215) 88%)");
        setTimeout(() => {
          setShowAlert(false);
        }, 5000);
      });
  };

  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="text-center">
          Login
        </Modal.Title>
      </Modal.Header>
      {showAlert && (
        <div className={`alert fade show text-center container`} style={{ background: alertType }} role="alert">
          {alertMessage}
        </div>
      )}

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
            <div className="position-relative">
              <Form.Control
                type={showPassword ? "text" : "password"}
                placeholder="your password"
                required
                value={logIn.password}
                onChange={(e) => setLogIn({ ...logIn, password: e.target.value })}
              />
              <span
                onClick={() => {
                  setShowPassword(!showPassword);
                  setTimeout(() => {
                    setShowPassword(false);
                  }, 3000);
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
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <button className="button py-1" style={{ color: "#ffffff", borderRadius: "8px", cursor: "pointer" }} type="submit">
            Log-in
          </button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default ModalLogin;
