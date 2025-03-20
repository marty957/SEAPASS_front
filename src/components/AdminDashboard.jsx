import { Card, Col, Container, Row, Spinner } from "react-bootstrap";
import TopBarProfile from "./TopBarProfile";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import AdminModalDeleteAccount from "./AdminModalDeleteAccount";
import Accordion from "react-bootstrap/Accordion";
import CustomToggle from "./CustomToggle";
import ListGroup from "react-bootstrap/ListGroup";
import AdminModALDeleteCertificated from "./AdminModalDeleteCertificate";
import ModalEditDetails from "./ModalEditDetails";
import ModalEditCertificate from "./ModalEditCertificate";

function AdminDashboard() {
  const token = localStorage.getItem("token");
  const { id } = useParams();

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState();

  const [singleUser, setSingleUser] = useState({});
  const [showDelete, setShowDelete] = useState(false);
  const [singleCert, setSingleCert] = useState({});
  const [userId, setUserId] = useState();
  const [showDeleteCer, setShowDeleteCert] = useState(false);

  const [showModalEditCert, setShowModalEditCert] = useState(false);
  const [showModalEditAccount, setShowModalEditAccount] = useState(false);

  const getAllUsers = () => {
    setLoading(true);
    fetch(`http://localhost:8080/api/user/${id}/allUser`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        }
      })
      .then((data) => {
        if (data) {
          console.log(data);
          setUsers(data);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllUsers();
  }, [showDelete, showDeleteCer, showModalEditAccount, showModalEditCert]);

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
      <Container className="my-5">
        <h3 className="mb-3 text-center">Lista Utenti Attivi</h3>
        {users.length === 0 ? (
          <div className="container">
            {" "}
            <p style={{ color: "#7f7575" }}>Lista utenti vuota</p>
          </div>
        ) : (
          <Row>
            {users.map((user) => (
              <Col sm={12} lg={4} key={user.id} className="border border-1 my-2 border-opacity-25 rounded ">
                <div className="d-flex justify-content-center align-items-baseline p-2">
                  {user.roles.length > 1 ? (
                    <p>
                      {" "}
                      <strong>ADMIN: </strong>
                      {user.name} {user.surname}
                    </p>
                  ) : (
                    <p>
                      {" "}
                      <strong>USER: </strong> {user.name} {user.surname}
                    </p>
                  )}

                  <button
                    className="mx-2"
                    style={{ border: "none", backgroundColor: "transparent" }}
                    onClick={() => {
                      setSingleUser(user);
                      setShowModalEditAccount(true);
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#22a7e0" className="bi bi-pen" viewBox="0 0 16 16">
                      <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708z" />
                    </svg>
                  </button>
                  <button
                    style={{ border: "none", backgroundColor: "transparent" }}
                    onClick={() => {
                      setSingleUser(user);
                      setShowDelete(true);
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" className="bi bi-trash3" viewBox="0 0 16 16">
                      <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                    </svg>
                  </button>
                </div>
                <Accordion className="my-2">
                  <Card style={{ borderRadius: "15px" }}>
                    <Card.Header style={{ backgroundColor: "transparent", borderRadius: "15px" }}>
                      <CustomToggle eventKey="0">Certificati</CustomToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        {user.certificates.length === 0 ? (
                          <p className="text-muted">Nessun certificato</p>
                        ) : (
                          <ListGroup variant="flush">
                            {user.certificates.map((cert) => (
                              <ListGroup.Item key={cert.id}>
                                <button
                                  className="mx-2"
                                  style={{ border: "none", backgroundColor: "transparent" }}
                                  onClick={() => {
                                    setSingleCert(cert);
                                    setShowModalEditCert(true);
                                    setUserId(user.id);
                                  }}
                                >
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#22a7e0" className="bi bi-pen" viewBox="0 0 16 16">
                                    <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708z" />
                                  </svg>
                                </button>
                                <button
                                  style={{ border: "none", backgroundColor: "transparent" }}
                                  className="me-2"
                                  onClick={() => {
                                    setSingleCert(cert);
                                    setShowDeleteCert(true);
                                  }}
                                >
                                  {" "}
                                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="red" className="bi bi-trash3" viewBox="0 0 16 16">
                                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                                  </svg>
                                </button>
                                <a style={{ color: "#22a7e0" }} className="text-decoration-none" href={cert.pdf} target="_blanck">
                                  {cert.name}
                                </a>
                              </ListGroup.Item>
                            ))}
                          </ListGroup>
                        )}
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </Col>
            ))}
            {showDelete && <AdminModalDeleteAccount show={showDelete} onHide={() => setShowDelete(false)} user={singleUser} />}
            {showDeleteCer && <AdminModALDeleteCertificated show={showDeleteCer} onHide={() => setShowDeleteCert(false)} cert={singleCert} />}
            {showModalEditAccount && <ModalEditDetails show={showModalEditAccount} onHide={() => setShowModalEditAccount(false)} details={singleUser} />}
            {showModalEditCert && (
              <ModalEditCertificate show={showModalEditCert} onHide={() => setShowModalEditCert(false)} info={singleCert} userId={userId} />
            )}
          </Row>
        )}
      </Container>
    </>
  );
}

export default AdminDashboard;
