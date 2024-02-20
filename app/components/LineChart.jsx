"use client";
import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale, // x axis
  LinearScale, // y axis
  PointElement,
  Legend,
  Tooltip,
  Filler,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
  Filler
);

const PatientsData = [
  { month: "January", Patients: 100 },
  { month: "February", Patients: 150 },
  { month: "March", Patients: 200 },
  { month: "April", Patients: 120 },
  { month: "May", Patients: 180 },
  { month: "June", Patients: 250 },
];

function LineChart() {
  const data = {
    labels: PatientsData.map((data) => data.month),
    datasets: [
      {
        label: "Number of Patients",
        data: PatientsData.map((data) => data.Patients),
        borderColor: "#cb0c9f",
        borderWidth: 3,
        pointBorderColor: "#cb0c9f",
        pointBorderWidth: 3,
        tension: 0.5,
        fill: true,
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, "#f797e1");
          gradient.addColorStop(1, "white");
          return gradient;
        },
      },
    ],
  };

  const options = {
    plugins: {
      legend: true,
    },
    responsive: true,
    scales: {
      y: {
        ticks: {
          font: {
            size: 16,
            weight: "bold",
          },
        },
        title: {
          display: false,
          text: "Patients",
          padding: {
            bottom: 10,
          },
          font: {
            size: 30,
            style: "italic",
            family: "Arial",
          },
        },
        min: 50,
      },
      x: {
        ticks: {
          font: {
            size: 16,
            weight: "bold",
          },
        },
        title: {
          display: false,
          text: "Month",
          padding: {
            top: 10,
          },
          font: {
            size: 30,
            style: "italic",
            family: "Arial",
          },
        },
      },
    },
  };

  return (
    <div>
      <div
        style={{
          width: "466.98px",
          height: "326.8px",
          cursor: "pointer",
          marginTop: "24px"
        }}
      >
        <Line data={data} options={options}></Line>
      </div>
    </div>
  );
}

export default LineChart;