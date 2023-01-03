import "./index.css";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
// import { Provider } from "react-redux";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  // <Provider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // </Provider>
);
