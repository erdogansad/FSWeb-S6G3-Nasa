import React from "react";
import logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-stone-900">
      <div className="container flex flex-col gap-y-10 lg:gap-y-0 lg:flex-row items-center justify-between py-8">
        <Link to="/" className="h-full flex flex-col gap-y-4 items-center lg:flex-row lg:gap-y-0 lg:gap-x-2 cursor-pointer">
          <img className="h-12" src={logo} alt="logo" />
          <span className="text-stone-300 font-semibold font-rubik">APOD</span>
        </Link>
        <nav className="flex flex-col lg:flex-row gap-y-5 lg:gap-y-0 lg:gap-x-10 text-stone-300 font-semibold font-rubik lg:text-xl">
          <Link to="/" className="hover:text-punch hover:underline hover:underline-offset-4 hover:decoration-punch hover:decoration-2">
            Bugün
          </Link>
          <button className="hover:text-punch hover:underline hover:underline-offset-4 hover:decoration-punch hover:decoration-2">Tarih Seç</button>
          <button className="hover:text-punch hover:underline hover:underline-offset-4 hover:decoration-punch hover:decoration-2">Tarih Aralığı Seç</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
