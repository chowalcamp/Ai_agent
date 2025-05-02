'use client'

import './donutChart.css'
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend, ChartOptions } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Team', 'Partnerships', 'Community Rewards', 'Liquidity', 'Ecosystem Fund'],
  datasets: [
    {
      data: [15, 10, 25, 20, 30],
      backgroundColor: [
        'rgba(255, 51, 51, 1)',
        'rgba(255, 102, 102, 1)',
        'rgba(255, 153, 153, 1)',
        'rgba(255, 204, 204, 1)',
        'rgba(255, 0, 0, 1)'
      ],
      borderWidth: 0,
    },
  ],
};

const options: ChartOptions<'doughnut'> = {
  plugins: {
    legend: {
      display: true, // 하단에 따로 범례를 만들 경우 false
      position: "bottom",
      align: "center",
      labels: {
        usePointStyle: true,
        pointStyle: "circle",
        // padding: 20,
        font: {
          size: 14,
        },
      },
    },
    tooltip: {
      enabled: true,
      callbacks: {
        label: function(context: any) {
          const label = context.label || '';
          const value = context.raw || 0;
          return `${label} : ${value}%`;
        }
      }
    }
  },
  cutout: '45%', // 도넛 두께 조절
};

export default function DonutChart() {
  return (
    <div className='donutChart-container'>
        <div>
            <h3 className='donutChart-title'>Token Distribution</h3>
        </div>
        <div style={{ width: 350, margin: '0 auto', marginBottom: '100px' }}>
            <Doughnut data={data} options={options} />
        </div>
    </div>
  );
}