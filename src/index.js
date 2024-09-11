import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { setupStore } from "@redux/store";
import App from "./App";
import LoadingSpinner from "@components/LoadingSpinner";
import "@assets/css/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = setupStore();

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={<LoadingSpinner />}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Suspense>
    </Provider>
  </React.StrictMode>
);
