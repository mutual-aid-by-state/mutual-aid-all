import React from "react";
// import logo from './logo.svg';
import { Route, Switch } from "react-router-dom";
// import Header from "./components/common/Header";
import HomePage from "./components/home/HomePage";
// import BLMPage from "./components/BLMPage";
import Arizona from "./components/AZ";
import California from "./components/CA";
// import Connecticut from "./components/CT";
// import Georgia from "./components/GA";
// import Indiana from "./components/IN";
// import Massachusetts from "./components/MA";
// import Maryland from "./components/MD";
// import Montana from "./components/MT";
// import NewYork from "./components/NY";
import Texas from "./components/TX";
// import Washington from "./components/WA";
// import Wisconsin from "./components/WI";

// import AboutPage from "./components/about/AboutPage";
// import Footer from "./components/common/Footer";
import "./App.css";

function App() {
  return (
    <div>
      {/* <Header /> */}
      <Switch>
        <Route exact path="/" component={HomePage} />
        {/* <Route exact path="/BLM" component={BLMPage} /> */}
        <Route exact path="/AZ" component={Arizona} />
        <Route exact path="/CA" component={California} />
        {/* <Route exact path="/CT" component={Connecticut} /> */}
        {/* <Route exact path="/GA" component={Georgia} /> */}
        {/* <Route exact path="/IN" component={Indiana} /> */}
        {/* <Route exact path="/MA" component={Massachusetts} /> */}
        {/* <Route exact path="/MD" component={Maryland} /> */}
        {/* <Route exact path="/MT" component={Montana} /> */}
        {/* <Route exact path="/NY" component={NewYork} /> */}
        <Route exact path="/TX" component={Texas} />
        {/* <Route exact path="/WA" component={Washington} /> */}
        {/* <Route exact path="/WI" component={Wisconsin} /> */}

        {/* <Route path="/about" component={AboutPage} /> */}
        {/* <Route component={PageNotFound} /> */}
      </Switch>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
