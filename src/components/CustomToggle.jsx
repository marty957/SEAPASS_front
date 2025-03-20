import { useAccordionButton } from "react-bootstrap/AccordionButton";

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () => console.log("Accordation personalizzato"));

  return (
    <button type="button" style={{ backgroundColor: "#22a7e0", border: "none", borderRadius: "10px", color: "#ffffff" }} onClick={decoratedOnClick}>
      {children}
    </button>
  );
}

export default CustomToggle;
