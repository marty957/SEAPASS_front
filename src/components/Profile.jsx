import { Container } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import TopBarProfile from "./TopBarProfile";
import { useEffect, useState } from "react";

function Profile() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const { id } = useParams();

  const [details, setDetails] = useState({});

  const persanlDetails = () => {
    fetch(`http://localhost:8080/api/user/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error(`Errore http Status: ${resp.status}`);
        }
      })
      .then((data) => {
        if (data) {
          setDetails(data);
          console.log(details);
        }
      })
      .catch((err) => {
        console.log("Errore nella fetch: ", err);
      });
  };

  useEffect(() => {
    if (token) {
      persanlDetails();
    } else {
      navigate("/");
    }
  }, [token, id]);

  return (
    <>
      <TopBarProfile />

      <Container className="my-4">
        <div className="row">
          <div className="col-sm-12 col-md-5 col-xl-3">
            <div className="my-2 position-relative container">
              <img src="../src/assets/profilo.webp" className=" rounded-circle  img-fluid" />
              <div className=" position-absolute add link">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentcolor" className="bi bi-plus-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                </svg>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-7 col-xl-8">
            <div className="my-2 ms-2 bordino ">
              <h3 className="text-center mt-4">
                Profilo ~ Dati Personali{" "}
                <span className="ms-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pen" viewBox="0 0 16 16">
                    <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708z" />
                  </svg>
                </span>
              </h3>
              <div className=" ms-3">
                <p className="my-2 ms-2">
                  <span className="fw-semibold">Nome: </span>
                  {details.name}
                </p>
              </div>
              <div>
                <div className=" ms-3">
                  <p className="my-2 ms-2">
                    <span className="fw-semibold">Cognome:</span>
                    {details.surname}
                  </p>
                </div>
              </div>
              <div>
                <div className=" ms-3">
                  <p className="my-2 ms-2">
                    <span className="fw-semibold">Email: </span>
                    {details.email}
                  </p>
                </div>
              </div>
              <div>
                <div className=" ms-3">
                  <p className="my-2 ms-2">
                    <span className="fw-semibold">Username: </span>
                    {details.username}
                  </p>
                </div>
              </div>
              <div className=" ms-3">
                <p className="my-2 ms-2">
                  <span className="fw-semibold">Password: </span>
                  **********
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Profile;
