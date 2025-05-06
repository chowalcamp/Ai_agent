import DonutChart from "./donutChart";
import './chartSection.css'
import Explain from "./explain";

export default function ChartSection() {
    return (
        <div className="chartSection-container">
            <h2>Token Distribution</h2>
            <h4>PopcornAI is a community-driven project with a transparent token distribution.</h4>
            <div className="chartSection-content">
                <Explain />
                <DonutChart />
            </div>
        </div>
    )
}