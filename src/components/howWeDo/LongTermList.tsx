import clsx from "clsx";

// ==============================================================
interface ProcessList1Props {
  no: string;
  title: string;
  subtitle: string;
  shadow?: boolean;
  className: string;
}
// ==============================================================

export default function LongTermList({ no, title, subtitle, className, shadow }: ProcessList1Props) {
  return (
    <div
      className={clsx({
        card: true,
        "shadow-lg": shadow,
        [className]: Boolean(className)
      })}>
      <div className="card-body p-6">
        <div className="d-flex flex-row">
          <div>
            <span className="icon btn btn-circle btn-lg bg-orange1 pe-none me-4">
              <span className="number text-white">{no}</span>
            </span>
          </div>

          <div>
            <h4 className="mb-1 text-blue">{title}</h4>
            <p className="mb-0">{subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
