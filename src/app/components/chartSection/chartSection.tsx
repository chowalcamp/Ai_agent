import DonutChart from "./donutChart";
import './chartSection.css'
import Explain from "./explain";

export default function ChartSection() {
    return (
        <div className="chartSection-container">
            <h2>Token Distribution</h2>
            <div className="chartSection-content">
                <Explain />
                <DonutChart />
            </div>
        </div>
    )
}