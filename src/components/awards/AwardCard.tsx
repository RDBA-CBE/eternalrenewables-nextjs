import Awardtooltip from "components/awards/Awardtooltip";
import Awardcontent from "components/awards/Awardcontent";

// CUSTOM DATA

export default function AwardCard() {
    const awardlist = [
        {
          id: 1,
          color: 'aqua',
        //   category: 'Workshop',
          image: '/img/photos/pd6.jpg',
          title: 'Ipsum Mollis Vulputate'
        },
        {
          id: 2,
          color: 'purple',
        //   category: 'Product',
          image: '/img/photos/pd4.jpg',
          title: 'Inceptos Euismod Egestas'
        },
        {
          id: 3,
          color: 'yellow',
        //   category: 'Coffee',
          image: '/img/photos/pd1.jpg',
          title: 'Cras Fermentum Sem'
        },
        {
          id: 4,
          color: 'red',
        //   category: 'Stationary',
          image: '/img/photos/pd2.jpg',
          title: 'Mollis Ipsum Mattis'
        },
        {
          id: 5,
          color: 'orange',
        //   category: 'Branding',
          image: '/img/photos/pd3.jpg',
          title: 'Ipsum Ultricies Cursus'
        },
        {
          id: 6,
          color: 'leaf',
        //   category: 'Print',
          image: '/img/photos/pd5.jpg',
          title: 'Sollicitudin Ornare Porta'
        }
      ];
  return (
    <section className="wrapper">
        <div className="container pt-10 pt-lg-15 pb-5">
       <div className="grid grid-view projects-masonry mb-10">
      <div className="row g-8 g-lg-10">
        {/* USER FOR TOOLTIP FUNCTIONALITY */}
        {/* <Awardtooltip /> */}

        {awardlist.map((item) => (
          <div key={item.id} className="project col-md-6 col-xl-4">
            <Awardcontent {...item} />
          </div>
        ))}
      </div>
    </div>
    </div>
    </section>
  );
}