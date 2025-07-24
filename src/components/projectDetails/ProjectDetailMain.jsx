"use client";


export default function ProjectDetailMain({banner}) {
  return (
   <section className="pro-detail p-0 mt-10">
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-6 p-0">
                 <div className="img-con">
                     <img src="img/what-we-do/what-we-do.jpg" alt="" />
                 </div>
               
            </div>
            <div className="col-md-6 p-0">
                <div className="content-con">
                    <p className="text-white ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, autem ducimus dolores quam aspernatur aliquam ab quisquam corporis necessitatibus quod maxime! Animi alias a tempora pariatur modi quaerat voluptas dicta!
                    </p>
                </div>
            </div>
        </div>
    </div>

    <div className="container battery-info-section py-5 pt-10">
      <div className="row justify-content-center text-center">
        <div className="col-lg-12">
          <p className="battery-quote text-white">
            “ Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, autem ducimus dolores quam aspernatur aliquam ab quisquam corporis necessitatibus quod maxime! Animi alias a tempora pariatur modi quaerat voluptas dicta! Tempore, autem ducimus dolores quam aspernatur aliquam ab quisquam corporis necessitatibus quod maxime! Animi alias a tempora pariatur modi quaerat voluptas dicta!”
          </p>
        </div>
      </div>

      <div className="row justify-content-center py-10">
        <div className="col-11 col-md-10 col-lg-9 col-xl-6">
          <div className="battery-details">
            <div className="battery-detail-row d-flex justify-content-between border-bottom py-2 row">
              <strong className="text-white col-5 px-0 ">Lorem ipsum dolor sit amet</strong>
              <span className=" text-orange1 col-7 px-0">Lorem ipsum dolor sit amet sit amet</span>
            </div>
            <div className="battery-detail-row d-flex justify-content-between border-bottom py-2 row">
              <strong className="text-white col-5 px-0">Loremipsum </strong>
              <span className="text-orange1 col-7 px-0">Ipsum dolor sit</span>
            </div>
            <div className="battery-detail-row d-flex justify-content-between py-2 row">
              <strong className="text-white col-5 px-0">Sitamet </strong>
              <span className="text-orange1 col-7 px-0">Lorem ipsum dolor sit amet sit amet</span>
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-center pb-0">
        <div className="col-md-8 col-lg-10 col-xl-8 text-center">
          <img
            src="img/what-we-do/what-we-do.jpg"
            alt=""
            className="img-fluid battery-info-image"
          />
        </div>
      </div>
    </div>
   </section>
  );
}
