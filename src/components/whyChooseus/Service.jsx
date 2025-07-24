import { Fragment } from "react";
import ProgressList from "components/common/ProgressList";
import Target from "icons/lineal/Target";
import BarChart from "icons/lineal/BarChart";
import Megaphone from "icons/lineal/Megaphone";
import SettingsThree from "icons/lineal/SettingsThree";

export default function Service() {
    const serviceList2 = [
        {
          id: 1,
          title: "Marketing",
          Icon: <Megaphone />,
          description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras justo cum sociis natoque magnis.`
        },
        {
          id: 2,
          title: "Strategy",
          Icon: <Target className="icon-svg-md text-green mb-3" />,
          description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras justo cum sociis natoque magnis.`
        },
        {
          id: 3,
          title: "Development",
          Icon: <SettingsThree />,
          description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras justo cum sociis natoque magnis.`
        },
        {
          id: 4,
          Icon: <BarChart />,
          title: "Data Analysis",
          description: `Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras justo cum sociis natoque magnis.`
        }
      ];
    return (

        <Fragment>
             <div className="container pb-5 pb-md-16">
                <div className="row gx-lg-8 gx-xl-12 gy-6 mb-10 align-items-center">
                    <div className="col-lg-6 order-lg-2">
                    <ProgressList />
                    </div>

                    <div className="col-lg-6">
                    <h3 className="display-5 mb-5">
                        The full service we are offering is specifically designed to meet your business needs and projects.
                    </h3>

                    <p>
                        Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac
                        consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur duis
                        mollis commodo.
                    </p>
                    </div>
                </div>

                <div className="row gx-lg-8 gx-xl-12 gy-6 gy-md-0 text-center">
            {serviceList2.map(({ id, Icon, title, description }) => (
              <div className="col-md-6 col-lg-3" key={id}>
                {Icon}
                <h4>{title}</h4>
                <p className="mb-2">{description}</p>
              </div>
            ))}
                </div>
            </div>   
 
  

        </Fragment>


);
}