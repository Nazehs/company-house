import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/home/index";
import CompanyDetailsComponent from "./pages/companyDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route
            exact
            path="/company-details/:company_number"
            component={CompanyDetailsComponent}
          />
        </Switch>
      </BrowserRouter>
      {/* <HomePage /> */}
    </div>
  );
}

export default App;
