import React from "react";
import ReactDOM from "react-dom/client";

import ClassDemo from "./components/ClassDemo";
import FunctionDemo from "./components/FunctionDemo";
import { Test } from "./components/Test";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <ClassDemo />
    <FunctionDemo />
    <Test />
  </div>
);
