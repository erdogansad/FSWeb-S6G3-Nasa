import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Home from "./pages/view/Home";
import SelectDate from "./pages/view/SelectDate";
// import SelectDateRange from "./pages/view/SelectDateRange";
import NotFound from "./pages/error/NotFound";
import SelectDateRange from "./pages/view/SelectDateRange";

const App = () => {
  return (
    <div className="min-h-screen h-1 flex flex-col">
      <Header />
      <div className="grow">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/tarih-sec" element={<SelectDate />} />
          <Route exact path="/tarih-araligi-sec" element={<SelectDateRange />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replaced={true} />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
