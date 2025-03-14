import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

function CentralSection() {
  const [key, setKey] = useState("home");
  return (
    <>
      <Tabs id="controlled-tab-example" activeKey={key} onSelect={(k) => setKey(k)} className="mb-3">
        <Tab eventKey="home" title={<span style={{ color: "#22a7e0" }}>Certificati</span>}></Tab>
        <Tab eventKey="profile" title={<span style={{ color: "#22a7e0" }}>Imbarchi</span>}></Tab>
        <Tab eventKey="contact" title={<span style={{ color: "#22a7e0" }}>Contatti</span>}></Tab>
      </Tabs>
    </>
  );
}

export default CentralSection;
