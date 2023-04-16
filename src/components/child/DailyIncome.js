import React from "react";
import { LineChart, Line, BarChart, Bar } from "recharts";

const data = [
  { name: "A", uv: 200 },
  { name: "B", uv: 300 },
  { name: "B", uv: 100 },
  { name: "B", uv: 400 },
  { name: "B", uv: 350 },
  { name: "B", uv: 250 },
  { name: "B", uv: 100 },
  { name: "B", uv: 500 },
];

const barData = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

function DailyIncome() {
  return (
    <div className="flex gap-12 justify-around mx-7 py-5">
      {/* daily income */}
      <div className="flex justify-between align-middle border h-24 w-64 px-4 rounded-lg bg-gradient-to-r bg-blue-500 text-white">
        <div className="flex flex-col justify-start align-middle gap-2 py-4">
          <p className="text-xs">Daily Income</p>
          <p className="text-2xl font-semibold">$ 345</p>
        </div>
        <div className="flex justify-center align-middle my-auto">
          <LineChart
            width={50}
            height={60}
            data={data}
            margin={{
              top: 50,
              right: 50,
              bottom: 50,
              left: 50,
            }}
          >
            <Line type={"monotone"} dataKey="uv" stroke="#fff" dot={false} />
          </LineChart>
        </div>
      </div>
      {/* daily expense */}
      <div className="flex justify-between align-middle border h-24 w-64 px-4 rounded-lg bg-white text-black">
        <div className="flex flex-col justify-start align-middle gap-2 py-4">
          <p className="text-xs">Daily Expense</p>
          <p className="text-2xl font-semibold">$ 380</p>
        </div>
        <div className="flex justify-center align-middle my-auto">
          <BarChart width={70} height={40} data={barData}>
            <Bar dataKey="uv" fill="#f3acbf" />
          </BarChart>
        </div>
      </div>
      {/* weekly income */}
      <div className="flex justify-between align-middle border h-24 w-64 px-4 rounded-lg bg-white text-black">
        <div className="flex flex-col justify-start align-middle gap-2 py-4">
          <p className="text-xs">Weekly Income</p>
          <p className="text-2xl font-semibold">$ 5380</p>
        </div>
        <div className="flex justify-center align-middle my-auto">
          <LineChart
            width={50}
            height={60}
            data={data}
            margin={{
              right: 50,
              left: 50,
            }}
          >
            <Line type={"monotone"} dataKey="uv" stroke="#000" dot={false} />
          </LineChart>
        </div>
      </div>
      {/* weeklly expense */}
      <div className="flex justify-between align-middle border h-24 w-64 px-4 rounded-lg bg-white text-black">
        <div className="flex flex-col justify-start align-middle gap-2 py-4">
          <p className="text-xs">Weekly Expense</p>
          <p className="text-2xl font-semibold">$ 4320</p>
        </div>
        <div className="flex justify-center align-middle my-auto">
          <BarChart width={70} height={40} data={barData}>
            <Bar dataKey="uv" fill="#f3acbf" />
          </BarChart>
        </div>
      </div>
    </div>
  );
}

export default DailyIncome;
