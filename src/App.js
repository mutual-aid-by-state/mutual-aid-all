import React from "react";
// import logo from './logo.svg';
import { Route, Switch } from "react-router-dom";
// import Header from "./components/common/Header";
import HomePage from "./components/home/HomePage";
// import AboutPage from "./components/about/AboutPage";
// import Footer from "./components/common/Footer";
import "./App.css";

function App() {
  return (
    <div>
      {/* <Header /> */}
      <Switch>
        <Route exact path="/" component={HomePage} />
        {/* <Route path="/about" component={AboutPage} /> */}
        {/* <Route component={PageNotFound} /> */}
      </Switch>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
