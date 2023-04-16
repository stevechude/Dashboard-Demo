import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

function Header() {
  return (
    <div className="flex flex-col md:flex-row md:justify-between md:mx-7">
      <div className="relative py-5 text-slate-400 flex justify-center">
        <input
          type="text"
          placeholder="Search..."
          className="w-64 py-2 placeholder:pl-3 rounded-xl bg-blue-100"
        />
        <AiOutlineSearch
          size={20}
          className="absolute top-9 right-16 md:right-5 md:top-8"
        />
      </div>
      <div className="flex justify-center py-1 md:py-5 gap-3">
        <div>
          <p className="text-sm">jamesbrown@example.com</p>
          <p className="text-xs">Admin</p>
        </div>
        <img src="/images/small6.svg" alt="" />
      </div>
    </div>
  );
}

export default Header;
