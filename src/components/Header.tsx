import React from "react";
import SearchIcon from "./Icons/SearchIcon";

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
          <div>
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
          </div>
        </div>
      </div>
    </header>
  );
}
