import React from "react";

export default function Header() {
  return (
    <header>
      {" "}
      <div className="container">
        <div className="flex space-x-4">
          <img src="/logo-64.png" className="w-12" alt="logo" />
          <span className="text-5xl font-bold text-primary">SHOPSY</span>
        </div>
        <div></div>
      </div>
    </header>
  );
}
