import React from "react";
import Category from "./partials/Category";
import Products from "./partials/Products";

function CategoryProd() {
  return (
    <div className="flex flex-col gap-2 md:gap-0 md:flex-row justify-between md:mx-7">
      <Category />
      <Products />
    </div>
  );
}

export default CategoryProd;
