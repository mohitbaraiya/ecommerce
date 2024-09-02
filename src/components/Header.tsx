import React from "react";
import SearchIcon from "./Icons/SearchIcon";
import { Link } from "react-router-dom";
import UserIcon from "./Icons/UserIcon";
import ShoppingBagIcon from "./Icons/ShoppingBagIcon";

export default function Header() {
  return (
    <header>
      {" "}
      <div className="container ">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 my-7">
            <img src="/logo-64.png" className="w-9" alt="logo" />
            <span className="text-3xl font-bold text-primary">SHOPSY</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                className="h-8 p-2 pr-8 text-sm border rounded-full focus-visible:outline-none border-gray w-80"
                placeholder="Search here"
              />
              <button className="absolute -translate-y-1/2 right-3 top-1/2">
                {" "}
                <SearchIcon />
              </button>
            </div>
            <ul className="flex items-center space-x-4">
              <li>
                <Link to="/account">
                  <UserIcon className="size-6" />{" "}
                </Link>
              </li>
              <li className="relative">
                <Link to="/checkout">
                  <ShoppingBagIcon className="size-6" />{" "}
                  <span className="absolute inline-block text-xs leading-4 text-center text-white align-middle rounded-full bottom-3 left-4 size-4 bg-primary">
                    9
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
