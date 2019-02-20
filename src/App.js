import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Landing from "./components/landing/Landing";
import Header from "./components/landing/Header";
import UploadThesis from "./components/upload-thesis/UploadThesis";
import uploadyourthesis from "./components/upload-thesis/uploadyourthesis";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/upload-thesis" component={UploadThesis} />
            <Route exact path="/upload-thesis" component={uploadyourthesis} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
