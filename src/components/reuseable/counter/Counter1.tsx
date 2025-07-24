import CountUp from "components/reuseable/CountUp";

// ====================================================
interface CounterProps {
  title: string;
  number: number;
  unit?: string;      // optional unit, e.g., "kg", "%"
  showPlus?: boolean; // to display a "+" after the number
  titleColor?: string;
  image?: any;
}

// ====================================================

export default function Counter1({
  title,
  number,
  unit = '',
  showPlus = false,
  titleColor,
  image = ''
}: CounterProps) {
  // Build suffix: " kg", "+", "+ %" etc.
  const suffix = `${showPlus ? '+' : ''}${unit ? ' ' + unit : ''}`;

  return (
    <div className="col-md-4">
      <img src={image} className="mb-2" alt="" />
      <h3 className={`counter counter-lg ${titleColor}`}>
        <CountUp end={number} suffix={suffix} />
      </h3>
      <p className="text-white">{title}</p>
    </div>
  );
}
