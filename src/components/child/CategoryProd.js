import React from "react";
import Category from "./partials/Category";
import Products from "./partials/Products";

function CategoryProd() {
  return (
    <div className="flex justify-between mx-7">
      <Category />
      <Products />
    </div>
  );
}

export default CategoryProd;
