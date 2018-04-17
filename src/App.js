import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";

import Header from "./components/header/Header";
import LoginPage from "./pages/loginPage/LoginPage"
import ContactPage from "./pages/contactPage/ContactPage";
import ContactDetailsPage from "./pages/contactDetailsPage/ContactDetailsPage";
import ContactEditPage from "./pages/contactEditPage/ContactEditPage";

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { logoutUser, autoLogin } from './actions/auth'

import "./App.scss";

class App extends Component {
    constructor(props) {
        super(props)
        props.autoLogin()
    }
    renderFullApp = () => {
        return(
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/edit">Add Contact</Link>
                    </li>
                    <li>
                        <button onClick={this.props.logoutUser}>Logout</button>
                    </li>
                </ul>
                <Switch>
                    <Route exact path="/" component={ContactPage} />
                    <Route path="/detail/:id" component={ContactDetailsPage} />
                    <Route path="/edit/:id?" component={ContactEditPage} />
                    <Redirect to="/" /> 
                </Switch>    
            </div>
        )
    }
    redirectToLogin = () => {
        return(
            <div>
                <Switch>
                    <Route path="/login" component={LoginPage} />
                    <Redirect to="/login"/>                
                </Switch>
                {/* we must the one root element (<div></div>) but if we use the <switch></switch>
                we have one root element and don't nessesery <div></div> */}
            </div>
        )
    }
  render() {
    return (
      <div className="app">
        <Header title="Contacts" />
            <Router>
                {this.props.user ? 
                    this.renderFullApp() : 
                    this.redirectToLogin() }
            </Router>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
      user: state.user
    };
  }

function mapDispatchToProps(dispatch) {
    return bindActionCreators( {
      logoutUser: logoutUser,
      autoLogin: autoLogin
  
    }, dispatch)
  }  
    
  export default connect(mapStateToProps, mapDispatchToProps)(App);
  
