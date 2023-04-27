import React from 'react';
import logo from "../../assets/logo.png";
import "./Header.css";

const Header = () => {
    return (
      <header>
        <img className="logo" src={logo} alt="logo"/><span>APOD</span>
        <nav>
          <button>Ana Sayfa</button>
          <button>Bugün</button>
          <button>Tarih Seç</button>
          <button>Tarih Aralığı Seç</button>
        </nav>
      </header>
    );
  }

export default Header;