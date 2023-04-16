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

  //   plugins: {
  //     legend: {
  //       position: 'top' as const,
  //     },
  //     title: {
  //       display: true,
  //       text: 'Chart.js Line Chart',
  //     },
  //   },
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

    return {
      month,
      expenses: Math.round(income / 5),
      income,
    };
  });
};

const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(createData());
    }, 1000);
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
      },
      {
        label: "Income",
        data: data.map(({ income }) => income),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        fill: true,
      },
    ],
  };

  if (loading) return "Loading...";

  return <Line data={chartData} options={options} height={50} />;
}

export default Chart;
