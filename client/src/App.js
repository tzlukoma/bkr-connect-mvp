import React, { Fragment, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "./App.css";
import SignUp from "./components/auth/SignUp";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/routing/PrivateRoute";
import NavBar from "./components/layout/NavBar";
import Landing from "./components/layout/Landing";
import Dashboard from "./components/dashbord/Dashboard";
import Alert from "./components/layout/Alert";
import { loadUser } from "./actions/auth";

// Redux
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <NavBar />
          <Route exact path="/" component={Landing} />
          <section className="container">
            <Alert />
            <Switch>
              <Route exact path="/sign-up" component={SignUp} />
              <Route exact path="/login" component={Login} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
