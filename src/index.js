import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js";
import "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js";
import "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();