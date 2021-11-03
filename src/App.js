import Header from "./components/Header";
import "./styles/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import About from "./views/About";
import Contacts from "./views/Contacts";
import Landings from "./views/Landings";
import Services from "./views/Services";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="sidebar">
          <Header />
        </div>
        <div className="views">
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/about" component={About} />
            <Route path="/contacts" component={Contacts} />
            <Route path="/landing" component={Landings} />
            <Route path="/services" component={Services} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
