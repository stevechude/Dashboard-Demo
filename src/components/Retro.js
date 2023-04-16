import React from "react";
import { VscGraphLine } from "react-icons/vsc";
import { BsGift } from "react-icons/bs";
import { BsCart } from "react-icons/bs";
import { TbWallet } from "react-icons/tb";
import { TbUsers } from "react-icons/tb";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { TbFlag } from "react-icons/tb";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { BsBriefcase } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";

function Retro() {
  return (
    <div className="flex flex-col gap-3 mx-5 my-5 p-1 w-60 h-screen border-l">
      <h1 className="text-5xl font-bold mb-4 ml-3 text-blue-900">RETRO</h1>
      <div className="flex flex-col gap-1 rounded-md">
        <a href="/" className="links">
          <VscGraphLine size={15} className="my-auto" />
          <p>Dashboard</p>
        </a>
        <a href="/" className="links">
          <BsGift className="my-auto" />
          <p>Products</p>
        </a>
        <a href="/" className="links">
          <BsCart className="my-auto" />
          <p>Blog</p>
        </a>
        <a href="/" className="links">
          <TbWallet className="my-auto" />
          <p>Transactions</p>
        </a>
        <a href="/" className="links">
          <TbUsers className="my-auto" />

          <p>Users</p>
        </a>
        <a href="/" className="links">
          <TbBrandGoogleAnalytics className="my-auto" />

          <p>Analysis</p>
        </a>
        <a href="/" className="links relative">
          <TbFlag className="my-auto" />

          <p>Reports</p>
          <MdOutlineKeyboardArrowDown className="my-auto absolute right-5 top-3" />
        </a>
        <a href="/" className="links">
          <BsBriefcase className="my-auto" />
          <p>Investments</p>
        </a>
        <a href="/" className="links">
          <IoSettingsOutline className="my-auto" />
          <p>Settings</p>
        </a>
      </div>
    </div>
  );
}

export default Retro;
