import React from 'react';
import logo from "../../assets/logo.png";
import "./Header.css";

const Header = () => {
    return (
      <header>
        <div className="logo-section">
        <img className="logo" src={logo} alt="logo"/><span className="logo-text">APOD</span>
        </div>
        <nav>
          <button>Bugün</button>
          <button>Tarih Seç</button>
          <button>Tarih Aralığı Seç</button>
        </nav>
      </header>
    );
  }

export default Header;