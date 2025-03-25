import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import TopBarProfile from "./TopBarProfile";
import { useEffect, useRef, useState } from "react";
import Uploader from "../assets/uploading.gif.gif";

import CentralSection from "./CentralSection";
import ModalEditDetails from "./ModalEditDetails";

function Profile() {
  const token = localStorage.getItem("token");
  const isAdmin = false;

  const { id } = useParams();

  const fileUploadRef = useRef();
  const [details, setDetails] = useState({});
  const [avatar, setAvatar] = useState("../src/assets/profilo.webp");
  const [modalEdit, setModalEdit] = useState(false);
  const [loading, setLoading] = useState();

  const handleImageUpload = (e) => {
    e.preventDefault();
    fileUploadRef.current.click();
  };
  const handleModalClose = () => {
    setModalEdit(false);
    persanlDetails(); // Ricarica i dettagli dopo la modifica
  };

  const imageChanged = async () => {
    try {
      setAvatar(Uploader);
      const uploadImage = fileUploadRef.current.files[0];
      // const image = URL.createObjectURL(uploadImage);
      //setAvatar(image);
      const formData = new FormData();
      formData.append("avatar", uploadImage);

      const response = await fetch(`http://localhost:8080/api/user/${id}/image`, {
        method: "PATCH",
        body: formData,
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (response.status === 201) {
        const data = await response.text();
        setAvatar(data);
      }
    } catch (err) {
      console.log(err);
      setAvatar("../src/assets/profilo.webp");
    }
  };

  const persanlDetails = () => {
    fetch(`http://localhost:8080/api/user/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((resp) => {
        if (resp.ok) {
          console.log(resp);
          return resp.json();
        } else {
          throw new Error(`Errore http Status: ${resp.status}`);
        }
      })
      .then((data) => {
        if (data) {
          console.log(data);
          setLoading(false);
          setDetails(data);
          setAvatar(data.avatar || "../src/assets/profilo.webp");
        }
      })
      .catch((err) => {
        console.log("Errore nella fetch: ", err);
      });
  };

  useEffect(() => {
    if (token) {
      persanlDetails();
    }
  }, [token, modalEdit, details.username]);

  if (loading) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  return (
    <>
      <TopBarProfile />

      <Container className="my-4">
        <div className="row">
          <div className="col-sm-12 col-md-5 col-xl-3">
            <div className="my-2 position-relative container">
              <img src={avatar} alt="Avatar" className=" rounded-circle" style={{ objectFit: "contain", width: "200px", height: "200px" }} />

              <div>
                <button
                  type="button"
                  className=" position-absolute add link text-center"
                  style={{ border: "none", background: "lightgrey", borderRadius: "50%", width: "33px", height: "33px", padding: "0" }}
                  onClick={handleImageUpload}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentcolor"
                    className="bi bi-plus-circle text-start"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                  </svg>
                </button>
                <input type="file" id="fileinput" style={{ display: "none" }} ref={fileUploadRef} onChange={imageChanged} />
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-7 col-xl-8">
            <div className="my-2 ms-2 bordino  ">
              <h3 className="text-center mt-4">Profilo ~ Dati Personali</h3>
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
              <div className="text-end me-5 mb-4">
                <button
                  type="button"
                  className="button py-1 "
                  style={{ color: "#ffffff", borderRadius: "8px", cursor: "pointer" }}
                  onClick={() => {
                    setModalEdit(true);
                  }}
                >
                  Modifica
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <CentralSection />
      {Object.keys(details).length > 0 && <ModalEditDetails show={modalEdit} details={details} onHide={handleModalClose} admin={isAdmin} />}
    </>
  );
}

export default Profile;
