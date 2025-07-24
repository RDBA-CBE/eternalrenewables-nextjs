// ================================================
interface ServiceCard3Props {
    title: string;
    Icon: JSX.Element;
    className?: string;
    description: string;
  }
  // ================================================
  
  export default function CareerList({ Icon, title, description, className = "d-flex flex-row" }: ServiceCard3Props) {
    return (
      <div className={className}>
        <div>{Icon}</div>
  
        <div>
          <h4 className="mb-1 text-green1">{title}</h4>
          <p className="mb-0 text-dark fw-normal ">{description}</p>
        </div>
      </div>
    );
  }
  