import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import Chart from "./partials/Chart";

function SalesOverview() {
  return (
    <div className="md:mx-7 rounded-md bg-white border h-80">
      <div className="flex justify-between py-3 px-4">
        <p className="font-semibold text-sm">Sales Overview</p>
        <button className="w-36 rounded-lg bg-blue-600 text-white font-light text-xs p-2">
          + Add Offer
        </button>
      </div>
      <hr />
      {/* div to house everything below */}
      {/* <div> */}
      <div className="flex flex-col md:flex-row justify-between px-4 py-2">
        <div className="flex gap-2">
          <p className="font-semibold text-2xl">$80,630</p>
          <div className="border rounded-full flex justify-center align-middle h-5 w-5 bg-green-200 m-auto">
            <AiOutlineArrowUp size={10} className="m-auto text-green-800" />
          </div>
          <p className="text-green-700 text-xs text-center m-auto">+6,7%</p>
        </div>
        <div className="flex align-middle gap-5">
          <div className="flex">
            <div className="border rounded-full h-2 w-2 m-auto mr-1 bg-blue-500"></div>
            <p className="m-auto text-xs">Incomes</p>
          </div>
          <div className="flex">
            <div className="border rounded-full h-2 w-2 m-auto mr-1 bg-red-500"></div>
            <p className="m-auto text-xs">Expenses</p>
          </div>
          <select name="year" id="year" className="border w-28 h-7 rounded-md">
            <option value="2023">
              <span className="text-sm px-4">Year</span>
            </option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
          </select>
        </div>
      </div>
      {/* </div> */}
      {/* chart */}
      <div className="">
        <Chart />
      </div>
    </div>
  );
}

export default SalesOverview;
