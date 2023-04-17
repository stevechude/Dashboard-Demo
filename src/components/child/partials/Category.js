import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    subject: "Shoes",
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: "Jeans",
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "Accessories",
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "",
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: "T-Shirts",
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: "Outwear",
    A: 65,
    B: 85,
    fullMark: 150,
  },
];

function Category() {
  return (
    <div className="container w-auto md:w-2/6 h-80 border bg-white rounded-md text-xs">
      <p className="text-slate-500 text-xs md:text-sm mt-3 ml-4">
        Top Selling Categories
      </p>

      <ResponsiveContainer width="95%" height="95%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 150]} />
          <Radar
            name="Mike"
            dataKey="B"
            stroke="#377fe1"
            fill="#377fe1"
            fillOpacity={0.6}
          />
          <Radar
            name="Lily"
            dataKey="A"
            stroke="#f3acbf"
            fill="#f3acbf"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Category;
