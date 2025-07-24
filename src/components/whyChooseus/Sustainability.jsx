import { ProcessList2 } from "components/reuseable/process-list";
// CUSTOM DATA
import { processList4 } from "data/process";
import SustainabilityCard from "./SustainabilityCard";

export default function Sustainability() {
     const SustainabilityList = [
      {
        no: "1",
        title: "Environmental Compliance",
        subtitle: "We ensure all our projects comply with local and international regulations. With an aim to protect natural resources, reduce emissions, and promote environmental stewardship we integrate sustainable practices through each phase of our project."
      },
      {
        no: "2",
        title: "Corporate Social Responsibility (CSR)",
        subtitle: "We actively engage with local communities, create job opportunities, and invest in various initiatives that contribute to social and economic development. We believe in making a meaningful impact in the communities we operate by improving their well-being and nurturing a sustainable future for all."
      },
      {
        no: "3",
        title: "Health, Safety & Environment (HSE)",
        subtitle: "We prioritize the health and safety of our team, partners, and communities. We adopt stringent safety protocols and provide continuous training to our workforce to ensure a safe working environment at every project site. We also adopt mindful practices, aiming for zero harm to people and the planet."
      }
    ];
  return (
   <section className="wrapper pt-5 pt-md-10 pb-5 pb-md-10 bg-soft-primary">
    <div className="container pt-5  pb-5 ">
    <div className="row gy-10 gy-sm-13 gx-lg-3   align-items-center">
      <div className="col-md-8 col-lg-5 position-relative  mx-auto">
        <div
          className="shape bg-dot primary rellax w-17 h-21"
          style={{ top: "-2rem", left: "-1.9rem" }}
        />

        <div
          className="shape rounded bg-soft-primary rellax d-md-block"
          style={{ width: "85%", height: "90%", right: "-1.5rem", bottom: "-1.8rem" }}
        />

        <figure className="rounded">
          <img src="/img/photos/sustainability.jpg"  alt="process" />
        </figure>
      </div>

      <div className="col-12 col-lg-6 offset-lg-1">
        {/* <h2 className="fs-16 text-uppercase text-line text-primary mb-3">How It Works?</h2> */}
        <h3 className="display-3-n mb-3 text-white">Sustainabilty</h3>
        <p className="text-white">At Eternal Renewables, we focus on sustainability and aim to achieve net-zero emissions with our business model by 2050. We strive to create value across our supply chain, stakeholders and the communities we operate in. Sustainability is deeply integrated into our business strategy, driving our innovation and long-term growth while lowering our impact on the environment.</p>

        

        {SustainabilityList.map((item) => (
          <SustainabilityCard
            {...item}
            key={item.no}
            className="icon btn btn-block btn-soft-primary pe-none me-5"
          />
        ))}
      </div>
    </div>
    </div>
   </section>
  );
}
