import React from "react";
import CategoryProd from "./child/CategoryProd";
import DailyIncome from "./child/DailyIncome";
import Header from "./child/Header";
import SalesOverview from "./child/SalesOverview";

function Menu() {
  return (
    <div className="container rounded-l-2xl m-5 bg-gray-100">
      <Header />
      <SalesOverview />
      <DailyIncome />
      <CategoryProd />
    </div>
  );
}

export default Menu;
