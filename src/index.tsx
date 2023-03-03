import React from "react";
import ReactDOM from "react-dom/client";
import { Root } from "./components";
import "./styles/global.scss";
import "antd/dist/reset.css";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(<Root />);
