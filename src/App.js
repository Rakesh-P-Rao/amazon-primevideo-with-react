//this is the root component file and it holds global state for all sub-component
import React, { Component, Fragment } from 'react';
import HeaderComponent from './Components/Header/HeaderComponent';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
import HomeComponent from './Components/HomeComponent/HomeComponent';
import Login from './Components/Auth/LoginComponent';
import Register from './Components/Auth/RegisterComponent';
import PasswordReset from './Components/Auth/PasswordResetComponent';
import PageNotFoundComponent from './Components/PageNotFound/PageNotFoundComponent';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class App extends Component {
  constructor(props) {
    super(props);
  this.state = {};
  }
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <header>
            <HeaderComponent />
          </header>
          <ToastContainer/>
          <main className="container">
            <Switch>
              <Route path="/" exact component={HomeComponent} />
              <Route path="/login" exact component={Login} />
              <Route path="/register" exact component={Register} />
              <Route path="/password-reset" exact component={PasswordReset} />
              <Route path="**" component={PageNotFoundComponent} />
            </Switch>
          </main>
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default withRouter(App);
