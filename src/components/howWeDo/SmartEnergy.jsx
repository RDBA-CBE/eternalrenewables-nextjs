import { processList7 } from "data/process";
import Design from "icons/lineal/Design";
import LightBulb from "icons/lineal/LightBulb";
import PieChartTwo from "icons/lineal/PieChartTwo";

export default function SmartEnergy() {
     const processList7 = [
      {
        id: 1,
        Icon: '/img/how-we-do/smart-enegry/icon-1.png',
        title: "Green Hydrogen",
        description: "Advancing hydrogen-based energy solutions to support decarbonization."
      },
      {
        id: 2,
        Icon: '/img/how-we-do/smart-enegry/icon-2.png',
        title: "Battery Energy Storage Systems (BESS)",
        description: "Deploying next-generation storage technologies to enhance energy reliability and grid stability."
      },
      {
        id: 3,
        Icon: '/img/how-we-do/smart-enegry/icon-3.png',
        title: "Solar Microgrids",
        description: "Providing off-grid and decentralized solar solutions for rural and industrial applications."
      }
    ];
  return (
    <section className="wrapper pb-5 pb-md-10">
        <div className="container py-5 py-md-5">
        <div className="row gx-lg-8 gx-xl-12 gy-10  align-items-center">
      <div className="col-lg-6">
        <figure>
          <img className="w-auto" src="/img/how-we-do/smart-enegry/image.jpg"  alt="" />
        </figure>
      </div>

      <div className="col-lg-6">
        {/* <h2 className="fs-15 text-uppercase text-line text-primary mb-3">How It Works?</h2> */}
        <h3 className="display-3 mb-3 pe-xxl-5 text-green1">Smart Energy</h3>
        <p className="mb-5">At Eternal Renewables, we strive to be at the forefront of smart energy solutions, developing and managing integrated systems to ensure a net-zero carbon future, which include:</p>

        {processList7.map(({ id, title, description, Icon }, i) => {
          const lastItem = i === processList7.length - 1;

          return (
            <div className={`d-flex flex-row ${lastItem ? "mb-0" : "mb-4"}`} key={id}>
              <div className="me-3">
              <img src={Icon} alt={title} />
              </div>

              <div>
                <h4 className="mb-1 text-orange1">{title}</h4>
                <p className="mb-1">{description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
        </div>
    </section>
  );
}
