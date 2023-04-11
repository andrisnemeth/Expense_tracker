import { dataPointInterface, dataPointsInterface } from "../../interfaces/Item";
import "./Chart.css";
import ChartBar from "./ChartBar";

function Chart({ dataPoints }: dataPointsInterface) {
  const dataPointValues = dataPoints.map(
    (dataPoint: dataPointInterface) => dataPoint.value
  );
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {dataPoints.map((dataPoint: dataPointInterface) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
