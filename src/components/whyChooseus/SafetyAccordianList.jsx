import Accordion from "components/reuseable/accordion";

// CUSTOM DATA
const accordions = [
  {
    no: "One",
    expand: true,
    heading: "Personal Safety",
    body: "FWe prioritize the well-being of our employees, partners, and communities by adopting necessary safety measures on our work site. We provide rigorous training, continuously assess risks and empower every individual to take responsibility for their own safety and that of those around them."
  },
  {
    no: "Two",
    expand: false,
    heading: "Process Safety",
    body: "We ensure that our systems, infrastructure, and procedures are designed and maintained to prevent accidents. We implement stringent safety standards, conduct regular audits, and use the latest technology to mitigate risks and enhance reliability across our renewable energy projects."
  },
  {
    no: "Three",
    expand: false,
    heading: "Transport Safety",
    body: "We implement stringent transport safety measures, like vehicle monitoring, driver training and route risk assessment to ensure the safe transportation of materials, equipment, and personnel. "
  }
];

export default function SafetyAccordianList() {
  return (
    <div className="accordion accordion-wrapper" id="accordionExample">
      {accordions.map((item) => (
        <Accordion type="plain" key={item.no} {...item} />
      ))}
    </div>
  );
}
