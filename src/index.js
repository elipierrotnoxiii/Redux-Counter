import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

//redux
import { store } from "./app/store"; // Llamamos la Store
import { Provider } from "react-redux"; // Usamos el Provider para encerrar todos los componentes que queremos que sean afectadas por la store

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
