import React from "react";
import SearchIcon from "./Icons/SearchIcon";
import { Link } from "react-router-dom";
import UserIcon from "./Icons/UserIcon";
import ShoppingBagIcon from "./Icons/ShoppingBagIcon";
import classNames from "classnames";

const MENU_ITEMS = [
  { name: "HOME", link: "/", active: true },
  { name: "SHOP", link: "/", active: false },
  { name: "FEATURES", link: "/", active: false },
  { name: "ELECTRONICS", link: "/", active: false },
  { name: "ABOUT US", link: "/", active: false },
  { name: "CONTACT", link: "/", active: false },
];
export default function Header() {
  return (
    <header>
      {" "}
      <div className="container">
        <div className="items-center justify-between sm:flex">
          <Link
            to={"/"}
            className="flex items-center justify-center my-5 space-x-4 sm:my-7"
          >
            <img src="/logo-512.svg" className="w-9" alt="logo" />
            <span className="text-3xl font-bold text-primary">SHOPSY</span>
          </Link>
          <div className="flex items-center space-x-4">
            <div className="relative grow">
              <input
                type="text"
                className="w-full h-8 p-2 pr-8 text-xs border rounded-full sm:w-80 sm:text-sm focus-visible:outline-none border-gray"
                placeholder="Search here"
              />
              <button className="absolute -translate-y-1/2 right-3 top-1/2">
                <SearchIcon />
              </button>
            </div>
            <ul className="flex items-center space-x-4 shrink">
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
      <div className="bg-black">
        <div className="container">
          <div className="flex items-center justify-between">
            <ul className="flex space-x-4">
              {MENU_ITEMS.map((menu) => (
                <li key={menu.name}>
                  <Link
                    to={"/"}
                    className={classNames(
                      "py-5 text-sm font-medium",
                      menu.active ? "text-primary" : "text-white"
                    )}
                  >
                    {menu.name}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="flex space-x-4">
              <li>
                <Link
                  className="leading-[50px] relative before:block before:bg-[url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAXCAYAAACBMvbiAAABDUlEQVR42mIQ2pL3f7Dgoe2YUccUXlrxHwQSz85DEQcBo32NA+OY+1/f/FfaWTHwjjnw+gYYT7izG6tjGq9v+g8DFz48Ajt6w7PzcPWOh7tRQhcoDpIn2zFgi9//+goyGMUxgSemgkMNQBq9pQAAglAQ3f+u4wADlz5LCPOFowYWhMbAaq42OH4DPMO0AY0Xhu8W+bZDaDXyALGr/YLZqQZm471yg2DT7Db2D9P990yEFjd5/85ztuDhUfTooopjYIbiSsDIDgOlG1jCReePlsDUdcyoY3ABHBqmMdAFEHbMRiBmHgyOuQTE/CDxgXbMEyCWBokNtGO+AbEBiD/QjvkDxH4Q3sA7JofedgIAhc+BFWAZYZ0AAAAASUVORK5CYII=)] before:absolute before:right-3 before:-top-7  before:w-10 before:h-[23px] text-white"
                  to={"/new-arrivals"}
                >
                  NEW ARRIVALS
                </Link>
              </li>
              <li>
                <Link
                  className="leading-[50px] relative before:block before:bg-[url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAXCAYAAACBMvbiAAAA9UlEQVR42mL47+T0f7DgYeCYUcdER///f/PmfyiAsP39cavv6/v//+xZGjnmwAEQRvBnzQLRA+iYzZsBrJOBBUAxDERH7BodoAtk2QzQBfI9HIfwkR7k08i93k//E1OPYLoezkYwe1dlYmDDLCWZorUchkqP5qhnAGPG3FI7w3C+XUA5TKtzHr6mTAwB0a8BrofpzQcwillR31sVAYzOqD0M1Zc5YgjD7V0CwFTCEEiH6Rb4G1B8tASmumNGHYML4NAwjYEugLBjNgIx82BwzCUg5geJD7RjngCxNEhsoB3zDYgNQPyBdswfIPaD8AbeMTn0thMA35YZi12hSVcAAAAASUVORK5CYII=)] before:absolute before:right-3 before:-top-7  before:w-10 before:h-[23px] text-white"
                  to={"/new-arrivals"}
                >
                  HOT SALE
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
