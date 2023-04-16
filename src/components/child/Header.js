import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

function Header() {
  return (
    <div className="flex justify-between mx-7">
      <div className="relative py-5 text-slate-400">
        <input
          type="text"
          placeholder="Search..."
          className="w-64 py-2 placeholder:pl-3 rounded-xl bg-blue-100"
        />
        <AiOutlineSearch size={20} className="absolute right-5 top-8" />
      </div>
      <div className="flex py-5 gap-3">
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
