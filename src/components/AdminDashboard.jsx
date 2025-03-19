import { Col, Container, Row, Spinner } from "react-bootstrap";
import TopBarProfile from "./TopBarProfile";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import AdminModalDeleteAccount from "./AdminModalDeleteAccount";

function AdminDashboard() {
  const token = localStorage.getItem("token");
  const { id } = useParams();

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState();

  const [singleUser, setSingleUser] = useState({});
  const [showDelete, setShowDelete] = useState();

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
  }, [setShowDelete]);

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
          <div className="p-2">
            {users.map((user) => (
              <div key={user.id} className="d-flex border border-1 mb-2 border-opacity-25 rounded justify-content-between align-items-baseline">
                <div className="d-flex align-items-baseline">
                  <div className="mx-3">
                    <p>
                      Nome: {user.name} {user.surname}
                    </p>
                  </div>
                  <div className="mx-3 mt-2 ">
                    <p>Email:{user.email}</p>
                  </div>
                </div>
                <div className="d-flex ustify-content-between align-items-baseline ">
                  <div className="mx-4">
                    <a href="">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#22a7e0" className="bi bi-pen" viewBox="0 0 16 16">
                        <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708z" />
                      </svg>
                    </a>
                  </div>
                  <div className="mx-4">
                    <button
                      style={{ border: "none", backgroundColor: "transparent" }}
                      onClick={() => {
                        setSingleUser(user);
                        setShowDelete(true);
                      }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="red" className="bi bi-trash3" viewBox="0 0 16 16">
                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
            {showDelete && <AdminModalDeleteAccount show={showDelete} onHide={() => setShowDelete(false)} user={singleUser} />}
          </div>
        )}
      </Container>
    </>
  );
}

export default AdminDashboard;
