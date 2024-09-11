import React, { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const Home = lazy(() => import("@pages/Home"));
const SelectDate = lazy(() => import("@pages/SelectDate"));
const SelectDateRange = lazy(() => import("@pages/SelectDateRange"));
const Error = lazy(() => import("@pages/Error"));
const Header = lazy(() => import("@layouts/Header"));
const Footer = lazy(() => import("@layouts/Footer"));

const App = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/date-single" element={<SelectDate />} />
          <Route path="/date-range" element={<SelectDateRange />} />
          <Route path="/404" element={<Error />} />
          <Route path="*" element={<Navigate to="/404" replaced />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
