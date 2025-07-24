import CountUp from "components/reuseable/CountUp";

export default function Tiles3() {
  return (
    <div className="row gx-md-5 gy-5">
      <div className="col-md-6">
        <figure className="rounded mt-md-10 position-relative">
          <img src="/img/photos/strong-relationship-1.jpg"  alt="" />
        </figure>
      </div>

      <div className="col-md-6">
        <div className="row gx-md-5 gy-5">
          <div className="col-md-12 order-md-2">
            <figure className="rounded">
              <img src="/img/photos/strong-relationship-2.jpg"  alt="" />
            </figure>
          </div>

          <div className="col-md-10">
            <div className="card bg-orange1 text-center">
              <div className="card-body py-11 counter-wrapper">
                <h3 className="counter text-nowrap text-white">
                  <CountUp end={5000} suffix="+" />
                </h3>

                <p className="mb-0 text-white">Satisfied Customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
