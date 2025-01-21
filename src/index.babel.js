import { createRoot } from "react-dom/client";
import React from "react.js";
import { ReactLandingPage } from "./Views/ReactLandingPage";
const root = createRoot(window.bodyTag);
root.render(/*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(ReactLandingPage, null)));
