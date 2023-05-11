import Investiment from "./Investment";

export default function Investiments({
  reports = [],
  description = "Descrição",
}) {
  const total = reports[reports.length - 1].value - reports[0].value;
  const percent =
    ((reports[reports.length - 1].value - reports[0].value) /
      reports[0].value) *
    100;

  function getReportsInvestiments(reports) {
    const newReports = [];
    let lastValue = 0;

    for (const report of reports) {
      const percent =
        lastValue === 0 ? 0 : ((report.value - lastValue) / lastValue) * 100;
      newReports.push({ ...report, percent });
      lastValue = report.value;
    }

    return newReports;
  }

  return (
    <div className="border p-2 m-6">
      <div className="text-center">
        <h2 className="font-bold mb-3">{description}</h2>
        <h4 className="font-semibold mb-2">
          Rendimento total:{" "}
          <span className={total > 0 ? "text-green-500" : "text-red-700"}>
            R$ {total.toFixed(2)} ({percent.toFixed(2)}%)
          </span>
        </h4>
      </div>
      {getReportsInvestiments(reports).map((report) => {
        return (
          <Investiment
            month={report.month}
            key={report.id}
            value={report.value}
            year={report.year}
            percent={report.percent}
          />
        );
      })}
    </div>
  );
}
