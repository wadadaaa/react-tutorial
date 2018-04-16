import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Header from "./components/header/Header";
import ContactPage from "./pages/contactPage/ContactPage";
import ContactDetailsPage from "./pages/contactDetailsPage/ContactDetailsPage";
import ContactEditPage from "./pages/contactEditPage/ContactEditPage";

import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header title="Contacts" />
            <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/edit">Add Contact</Link>
                    </li>
                </ul>
                <Route exact path="/" component={ContactPage} />
                <Route path="/detail/:id" component={ContactDetailsPage} />
                <Route path="/edit/:id?" component={ContactEditPage} />
            </div>
            </Router>

        {/* <ContactPage />
        <ContactDetailsPage />
        <ContactEditPage /> */}
      </div>
    );
  }
}

export default App;
