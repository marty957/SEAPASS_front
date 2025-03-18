import { useEffect, useState } from "react";
import { Card, Container, Row, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ModalAddCertificate from "./ModalAddCertificate";
import ModalDeleteCertificate from "./ModalDeleteCertificate";
import ModalEditCertificate from "./ModalEditCertificate";

function CertficateSection() {
  const token = localStorage.getItem("token");
  const { id } = useParams();

  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState();

  const [modalShow, setModalShow] = useState();

  const [deleteCerti, setDeleteCerti] = useState(false);
  const [modalEditCer, setModalEditCert] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState({});

  const uploadinfCertificate = async () => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:8080/api/certificate/${id}/all`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (response.status === 200) {
        setLoading(false);
        const data = await response.json();
        setCertificates(data);
        console.log(data);
      }
    } catch (err) {
      console.log("Errore nella fetch", err);
    }
  };

  useEffect(() => {
    uploadinfCertificate();
  }, [modalShow, deleteCerti]);
  if (loading) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  return (
    <>
      <Container>
        <div className="d-flex  justify-content-center mb-3">
          <h3 className="pt-2 me-2">I tuoi certificati</h3>
          <button type="button" style={{ cursor: "pointer", backgroundColor: "transparent", border: "none" }} onClick={() => setModalShow(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="#22a7e0" className="bi bi-plus-circle" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
            </svg>
          </button>

          <ModalAddCertificate show={modalShow} onHide={() => setModalShow(false)} />
        </div>

        {certificates.length === 0 ? (
          <div className="container">
            <p style={{ color: "#7f7575" }}>Lista certificati vuota</p>
          </div>
        ) : (
          <Row>
            {certificates.map((certificate) => (
              <div key={certificate.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
                <Card className="mb-3">
                  <Card.Body>
                    <a href={certificate.pdf} target="_blank" className="text-decoration-none" style={{ color: "#22a7e0" }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#22a7e0" className="bi bi-filetype-pdf" viewBox="0 0 16 16">
                        <path
                          fillRule="evenodd"
                          d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM1.6 11.85H0v3.999h.791v-1.342h.803q.43 0 .732-.173.305-.175.463-.474a1.4 1.4 0 0 0 .161-.677q0-.375-.158-.677a1.2 1.2 0 0 0-.46-.477q-.3-.18-.732-.179m.545 1.333a.8.8 0 0 1-.085.38.57.57 0 0 1-.238.241.8.8 0 0 1-.375.082H.788V12.48h.66q.327 0 .512.181.185.183.185.522m1.217-1.333v3.999h1.46q.602 0 .998-.237a1.45 1.45 0 0 0 .595-.689q.196-.45.196-1.084 0-.63-.196-1.075a1.43 1.43 0 0 0-.589-.68q-.396-.234-1.005-.234zm.791.645h.563q.371 0 .609.152a.9.9 0 0 1 .354.454q.118.302.118.753a2.3 2.3 0 0 1-.068.592 1.1 1.1 0 0 1-.196.422.8.8 0 0 1-.334.252 1.3 1.3 0 0 1-.483.082h-.563zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638z"
                        />
                      </svg>
                      <p className="d-inline ms-1 mt-2">{certificate.name}</p>
                    </a>
                    <Card.Text className="mt-2">{certificate.description}</Card.Text>

                    <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: "0.8rem" }}>
                      Date of Issue: {certificate.issueDate}
                    </Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: "0.8rem" }}>
                      Date of Expire: {certificate.expireDate}
                    </Card.Subtitle>
                    <hr />
                    <div className="d-flex justify-content-between">
                      <button
                        onClick={() => {
                          setSelectedCertificate(certificate);
                          setModalEditCert(true);
                        }}
                        type="button"
                        className="button py-1 "
                        style={{ color: "#ffffff", borderRadius: "8px", cursor: "pointer", fontSize: "0.9rem" }}
                      >
                        Edit
                      </button>

                      <button type="button" style={{ cursor: "pointer", backgroundColor: "transparent", border: "none" }} onClick={() => setDeleteCerti(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="red" className="bi bi-trash3" viewBox="0 0 16 16">
                          <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                        </svg>
                      </button>
                      {<ModalDeleteCertificate show={deleteCerti} onHide={() => setDeleteCerti(false)} id={certificate.id} />}
                    </div>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </Row>
        )}
        <p className="text-center">Entro un mese dalla scadenza di un tuo certificato ti verra mandata una email</p>
        {modalEditCer && <ModalEditCertificate show={modalEditCer} onHide={() => setModalEditCert(false)} info={selectedCertificate} />}
      </Container>
    </>
  );
}

export default CertficateSection;
