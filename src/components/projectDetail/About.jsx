import { Fragment } from "react";
import ProgressList from "components/common/ProgressList";
import ListColumn from "components/reuseable/ListColumn";

export default function About() {
  const list = [
    ["Aenean quam ornare. Curabitur blandit.", "Nullam quis risus eget urna mollis ornare."],
    ["Etiam porta euismod malesuada mollis.", "Vivamus sagittis lacus vel augue rutrum."]
  ];
  return (
    <Fragment>
      <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-16 align-items-center">
          <div className="col-lg-7">
            <figure>
              <img className="w-auto" src="/img/illustrations/i8.png" srcSet="/img/illustrations/i8@2x.png 2x" alt="" />
            </figure>
          </div>

          <div className="col-lg-5">
            <h3 className="display-4 mb-6 pe-xxl-6">We bring rapid solutions to make the life of our customers easier.</h3>
            <ProgressList />
          </div>
      </div>

      <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
            <div className="col-lg-7 order-lg-2">
              <figure>
                <img
                  alt="illustration"
                  className="w-auto"
                  src="/img/illustrations/i7.png"
                  srcSet="/img/illustrations/i7@2x.png 2x"
                />
              </figure>
            </div>

            <div className="col-lg-5">
              <h3 className="display-4 mb-5">We make your spending stress-free for you to have the perfect control.</h3>

              <p className="mb-6">
                Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl
                consectetur et.
              </p>

              <ListColumn list={list} />
            </div>
      </div>
    </Fragment>
  );
}