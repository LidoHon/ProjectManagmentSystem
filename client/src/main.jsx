import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
// import 'antd/dist/antd.css';
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
