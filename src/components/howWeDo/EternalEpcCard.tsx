// ================================================
interface ServiceCard3Props {
    title: string;
    Icon: string;
    className?: string;
    description: string;
  }
  // ================================================
  
  export default function EternalEpcCard({ Icon, title, description, className = "d-flex flex-row" }: ServiceCard3Props) {
    return (
      <div className={className}>
        <img src={Icon} alt={title} className="me-3 img-fluid" style={{ maxHeight: '50px', width: 'auto' }} />
  
        <div>
          <h4 className="mb-1 text-white">{title}</h4>
          <p className="mb-0 text-white fw-normal ">{description}</p>
        </div>
      </div>
    );
  }
  