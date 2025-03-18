import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import CertficateSection from "./CertifcateSection";
import { Col, Container, Row } from "react-bootstrap";

function CentralSection() {
  const [key, setKey] = useState("home");
  return (
    <>
      <Tabs id="controlled-tab-example" activeKey={key} onSelect={(k) => setKey(k)} className="mb-3">
        <Tab eventKey="home" title={<span style={{ color: "#22a7e0" }}>Certificati</span>}>
          <CertficateSection />
        </Tab>
        <Tab eventKey="profile" title={<span style={{ color: "#22a7e0" }}>Imbarchi</span>}></Tab>
        <Tab eventKey="contact" title={<span style={{ color: "#22a7e0" }}>Contatti</span>}>
          <Container className="my-3">
            <h3 className="text-center my-5">Contatti utili per il rinnovo dei certificati</h3>
            <Row className="g-5">
              <div className="col-sm-12 col-lg-6">
                <h5 className="fs-6" style={{ borderBottom: " 1px solid #22a7e0" }}>
                  Eumac
                </h5>
                <div className="d-flex align-items-baseline">
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#22a7e0" className="bi bi-envelope-open me-2" viewBox="0 0 16 16">
                    <path d="M8.47 1.318a1 1 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.817l5.75 3.45L8 8.917l1.25.75L15 6.217V5.4a1 1 0 0 0-.53-.882zM15 7.383l-4.778 2.867L15 13.117zm-.035 6.88L8 10.082l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738ZM1 13.116l4.778-2.867L1 7.383v5.734ZM7.059.435a2 2 0 0 1 1.882 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765z" />
                  </svg>
                  <a href="mailto:europeanmaritimeacademy@gmail.com" className="text-decoration-none" style={{ color: "#22a7e0" }}>
                    <p className="mt-1 ">europeanmaritimeacademy@gmail.com</p>
                  </a>
                </div>
                <div className="d-flex align-items-baseline">
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#22a7e0" className="bi bi-telephone me-2" viewBox="0 0 16 16">
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                  </svg>
                  <a href="tel:+39 0966378015" className="text-decoration-none text-reset">
                    <p className="">0966378015</p>
                  </a>
                </div>
                <div className="d-flex align-items-baseline">
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#22a7e0" className="bi bi-whatsapp me-2" viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                  </svg>
                  <a href="https://wa.me/393491155400?text=Salve%2C%0AHo%20bisogno%20di%20info" target="_blank" className="text-decoration-none text-reset">
                    <p className="">3313516817</p>
                  </a>
                </div>
                <div className="d-flex align-items-baseline">
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#22a7e0" className="bi bi-geo-alt me-2" viewBox="0 0 16 16">
                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                  </svg>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Via+Vincenzo+Saletta,+89015+Palmi+RC"
                    target="_blank"
                    className="text-decoration-none"
                    style={{ color: "#22a7e0" }}
                  >
                    <p className="">Via Vincenzo Saletta, 89015 Palmi RC</p>
                  </a>
                </div>
              </div>
              <div className="col-sm-12 col-lg-6">
                <h5 className="fs-6" style={{ borderBottom: " 1px solid #22a7e0" }}>
                  Imat
                </h5>
                <div className="d-flex align-items-baseline">
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#22a7e0" className="bi bi-envelope-open me-2" viewBox="0 0 16 16">
                    <path d="M8.47 1.318a1 1 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.817l5.75 3.45L8 8.917l1.25.75L15 6.217V5.4a1 1 0 0 0-.53-.882zM15 7.383l-4.778 2.867L15 13.117zm-.035 6.88L8 10.082l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738ZM1 13.116l4.778-2.867L1 7.383v5.734ZM7.059.435a2 2 0 0 1 1.882 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765z" />
                  </svg>
                  <a href="mailto:info@imat2006.it" className="text-decoration-none" style={{ color: "#22a7e0" }}>
                    <p className="mt-1">info@imat2006.it</p>
                  </a>
                </div>
                <div className="d-flex align-items-baseline">
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#22a7e0" className="bi bi-telephone me-2" viewBox="0 0 16 16">
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                  </svg>
                  <a href="tel:390815099303" className="text-decoration-none text-reset">
                    <p className="">081-5099303</p>
                  </a>
                </div>
                <div className="d-flex align-items-baseline">
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#22a7e0" className="bi bi-geo-alt me-2" viewBox="0 0 16 16">
                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                  </svg>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Viale+degli+Oleandri,+n1+81030+Castel+Volturno+CE"
                    target="_blank"
                    className="text-decoration-none"
                    style={{ color: "#22a7e0" }}
                  >
                    <p className="">Viale degli Oleandri, 1 81030 Castel Volturno </p>
                  </a>
                </div>
              </div>
              <div className="col-sm-12 col-lg-6">
                <h5 className="fs-6" style={{ borderBottom: " 1px solid #22a7e0" }}>
                  STS marine group
                </h5>
                <div className="d-flex align-items-baseline">
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#22a7e0" className="bi bi-envelope-open me-2" viewBox="0 0 16 16">
                    <path d="M8.47 1.318a1 1 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.817l5.75 3.45L8 8.917l1.25.75L15 6.217V5.4a1 1 0 0 0-.53-.882zM15 7.383l-4.778 2.867L15 13.117zm-.035 6.88L8 10.082l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738ZM1 13.116l4.778-2.867L1 7.383v5.734ZM7.059.435a2 2 0 0 1 1.882 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765z" />
                  </svg>
                  <a href="mailto:info@stsmarinegroup.com" className="text-decoration-none" style={{ color: "#22a7e0" }}>
                    <p className="mt-1">info@stsmarinegroup.com</p>
                  </a>
                </div>
                <div className="d-flex align-items-baseline">
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#22a7e0" className="bi bi-telephone me-2" viewBox="0 0 16 16">
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                  </svg>
                  <a href="tel:390854680128" className="text-decoration-none text-reset">
                    <p className="">0854680128 </p>
                  </a>
                </div>
                <div className="d-flex align-items-baseline">
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#22a7e0" className="bi bi-whatsapp me-2" viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                  </svg>
                  <a href="https://wa.me/393791304378?text=Salve%2C%0AHo%20bisogno%20di%20info" target="_blank" className="text-decoration-none text-reset">
                    <p className="">3791304378</p>
                  </a>
                </div>
                <div className="d-flex align-items-baseline">
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#22a7e0" className="bi bi-geo-alt me-2" viewBox="0 0 16 16">
                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                  </svg>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=SAFETY+TOTAL+SYSTEM+MARINE+GROUP+Contrada+Alboreto,+66026+Ortona+CH"
                    target="_blank"
                    className="text-decoration-none"
                    style={{ color: "#22a7e0" }}
                  >
                    <p className="">Contrada Alboreto, 66026 Ortona CH</p>
                  </a>
                </div>
              </div>
              <div className="col-sm-12 col-lg-6">
                <h5 className="fs-6" style={{ borderBottom: " 1px solid #22a7e0" }}>
                  Star Center Italia
                </h5>
                <div className="d-flex align-items-baseline">
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#22a7e0" className="bi bi-envelope-open me-2" viewBox="0 0 16 16">
                    <path d="M8.47 1.318a1 1 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.817l5.75 3.45L8 8.917l1.25.75L15 6.217V5.4a1 1 0 0 0-.53-.882zM15 7.383l-4.778 2.867L15 13.117zm-.035 6.88L8 10.082l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738ZM1 13.116l4.778-2.867L1 7.383v5.734ZM7.059.435a2 2 0 0 1 1.882 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765z" />
                  </svg>
                  <a href="mailto:info@starcenteritalia.it" className="text-decoration-none" style={{ color: "#22a7e0" }}>
                    <p className="mt-1">info@starcenteritalia.it</p>
                  </a>
                </div>
                <div className="d-flex align-items-baseline">
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#22a7e0" className="bi bi-telephone me-2" viewBox="0 0 16 16">
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                  </svg>
                  <a href="tel:39081 509 3887" className="text-decoration-none text-reset">
                    <p className="">081 509 3887</p>
                  </a>
                </div>
                <div className="d-flex align-items-baseline">
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#22a7e0" className="bi bi-geo-alt me-2" viewBox="0 0 16 16">
                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                  </svg>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=740,+Via+S.S+Domitiana+km+35,+81030+Castel+Volturno+CE"
                    target="_blank"
                    className="text-decoration-none"
                    style={{ color: "#22a7e0" }}
                  >
                    <p className="">740, Via S.S. Domitiana km 35, 81030 Castel Volturno CE</p>
                  </a>
                </div>
              </div>
            </Row>
          </Container>
        </Tab>
      </Tabs>
    </>
  );
}

export default CentralSection;
