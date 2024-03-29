import React, { useCallback, useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const options = {
  responsive: true,
  // maintainAspectRatio: true,
  scales: {
    x: {
      display: true,
    },
    y: {
      display: false, // Set display property to false to hide the y-axis
    },
  },
};

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Oct",
  "Nov",
  "Dec",
];

const createData = () => {
  return labels.map((month) => {
    const income = Math.round(Math.random() * 800) + 500;
    // const modifier = Math.sin((index / labels.length) * Math.PI) * 2;

    return {
      month,
      expenses: Math.round(income / 5),
      // expenses: Math.round(income / 5) * modifier,
      income,
      // income: income * modifier,
    };
  });
};

const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(createData());
    }, 2000);
  });
};

function Chart() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = useCallback(async () => {
    const results = await fetchData();

    setData(results);
    setLoading(false);
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  const chartData = {
    labels: data.map(({ month }) => month),
    datasets: [
      {
        label: "Expenses",
        data: data.map(({ expenses }) => expenses * 3),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        fill: true,
        lineTension: 0.4,
        pointRadius: 0,
      },
      {
        label: "Income",
        data: data.map(({ income }) => income),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        fill: true,
        lineTension: 0.4,
        pointRadius: 0,
      },
    ],
  };

  if (loading)
    return (
      <div className="flex justify-center align-middle">
        <p className="text-3xl">Loading...</p>
      </div>
    );

  return <Line data={chartData} options={options} height={50} />;
}

export default Chart;
