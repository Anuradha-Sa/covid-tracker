import logo from "./logo.svg";
import "./App.scss";
import Country from "./components/Country";
import CountryList from "./components/CountryList";
import Header from "./components/Header";
import CountryDropDown from "./components/CountryDropDown";

import { HashRouter, Route, BrowserRouter as Router } from "react-router-dom";
import Content from "./components/Content";
import PageBody from "./components/PageBody";
import Footer from "./components/Footer";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
import AllCountryPage from "./components/AllCountryPage";
import ChartContent from "./components/ChartContent";
import Home from "./components/Home";
import PageBodyContent from "./components/PageBodyContent";
import ContactUS from "./components/ContactUS";
import ContentDetailsPage from "./components/ContentDetailsPage";

library.add(faCheckSquare, faCoffee);

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Router>
        <Route path="/covid-tracker" exact>
          {/* <PageBodyContent></PageBodyContent> */}
          <ContentDetailsPage></ContentDetailsPage>
        </Route>
        <Route path="/single" exact>
          {/* <PageBody></PageBody> */}
          <Country></Country>
        </Route>
        <Route path="/all" exact>
          <AllCountryPage></AllCountryPage>
          {/* <CountryList></CountryList> */}
        </Route>
        <Route path="/charts" exact>
          {/* <AllCountryPage></AllCountryPage> */}
          <div className="chart-container">
            <ChartContent></ChartContent>
          </div>
        </Route>
        <Route path="/contact-us" exact>
          {/* <Home></Home> */}
          <ContactUS></ContactUS>
        </Route>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
