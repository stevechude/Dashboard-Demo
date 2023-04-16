import React from "react";

const productData = [
  {
    image: "/images/bluejersey.jpeg",
    stadium: "PSG Stadium 20/21",
    variants: "3 variants",
    sku: "SKU:",
    number: "8600844",
    type: "Jerseys",
    date: "12.11.2020",
    state: "Published",
  },
  {
    image: "/images/lakersjersey.jpeg",
    stadium: "Los Angeles Lakers City",
    variants: "5 variants",
    sku: "SKU:",
    number: "8608647",
    type: "Jerseys",
    date: "10.11.2020",
    state: "Pending",
  },
  {
    image: "/images/blackhoodie.jpeg",
    stadium: "Miami Heat Courtside",
    variants: "4 variants",
    sku: "SKU:",
    number: "8609824",
    type: "Outwear",
    date: "12.11.2020",
    state: "Published",
  },
  {
    image: "/images/redjersey.jpeg",
    stadium: "Liverpool FC Stadium 20/21",
    variants: "2 variants",
    sku: "SKU:",
    number: "8609474",
    type: "Jerseys",
    date: "07.11.2020",
    state: "Published",
  },
];

function Products() {
  return (
    <div className="container w-3/5 h-80 border bg-white rounded-md">
      <div className="flex justify-between px-6 py-4 text-slate-500">
        <p className="text-sm my-auto">Latest Added Products</p>
        <p className="text-2xl">...</p>
      </div>
      {/* list products section */}
      <div className="flex flex-col justify-around gap-7">
        {productData.map((prod, index) => (
          <div key={index} className="flex justify-around">
            <img src={prod.image} alt="" className="w-10 h-10 rounded-md" />
            <div className="flex flex-col w-48 text-start">
              <p className="font-semibold text-sm text-black">{prod.stadium}</p>
              <p className="text-xs text-slate-500">{prod.variants}</p>
            </div>
            <div className="">
              <p className="text-sm text-slate-700">
                <span className="font-semibold text-slate-400 mr-1">
                  {prod.sku}
                </span>
                {prod.number}
              </p>
            </div>
            <p className="text-slate-500 text-sm">{prod.type}</p>
            <p className="text-slate-500 text-sm">{prod.date}</p>
            <div
              className={`border rounded-full w-16 h-6 flex justify-center align-middle ${
                prod.state === "Published"
                  ? "bg-green-200 text-green-500"
                  : "bg-red-200 text-red-400"
              }`}
            >
              <p className="text-xs text-center my-auto p-1">{prod.state}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
