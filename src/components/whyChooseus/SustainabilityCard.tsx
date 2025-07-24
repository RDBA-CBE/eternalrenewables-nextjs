// ==============================================================
interface ProcessList2Props {
    no: string;
    title: string;
    subtitle: string;
    className?: string;
  }
  // ==============================================================
  
  export default function SustainabilityCard({ no, title, subtitle, className = "" }: ProcessList2Props) {
    return (
      <div className="d-flex flex-row mb-6">
        <div>
          <span className={className}>
            <span className="number fs-18 ">{no}</span>
          </span>
        </div>
  
        <div>
          <h4 className="mb-1 text-white">{title}</h4>
          <p className="mb-0 text-white">{subtitle}</p>
        </div>
      </div>
    );
  }
  