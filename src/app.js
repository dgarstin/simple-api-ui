import React from "react";
import ReactDom from "react-dom";
import App from "./components/app/app.jsx";

main();

function main() {
  ReactDom.render(<App />, document.getElementById("app"))
}
