import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider } from "emotion-theming";

import Landing from "./components/landing/Landing";
import Header from "./components/landing/Header";
import UploadThesis from "./components/upload-thesis/UploadThesis";

const theme = {
  primary: "#3ba18a",
  darkPrimary: "#35907c",
  red: " #BE0006",
  yellow: "#FFCC00",
  darkYellow: "#e5b700",
  green: "#3DAA00",
  black: "#333",
  white: "#eee"
};

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Router>
            <div className="App">
              <Header />
              <Route exact path="/" component={Landing} />
              <Route exact path="/upload-thesis" component={UploadThesis} />
            </div>
          </Router>
        </Provider>
      </ThemeProvider>
    );
  }
}

export default App;
