import { getMonth } from "../helpers/getMonth";
export default function Investiment({ month, value, percent, year }) {
  return (
    <div className="grid gap-4 grid-cols-3 grid-rows-2 border-b-2 mt-4">
      <div className="font-serif">
        {getMonth(month)}/{year}
      </div>
      <div
        className={
          percent > 0
            ? "text-green-600 font-semibold"
            : "text-red-800 font-semibold"
        }
      >
        R$ {value.toFixed(2)}
      </div>
      <div
        className={
          percent > 0
            ? "text-green-600 font-semibold"
            : "text-red-800 font-semibold"
        }
      >
        {percent.toFixed(2)}%
      </div>
    </div>
  );
}
