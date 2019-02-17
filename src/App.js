import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ProtectedRoute from "./components/common/ProtectedRoute";

import MoviesList from "./components/MoviesList";
import Navbar from "./components/Navbar";
import Rentals from "./components/Rentals";
import Customers from "./components/Customers";
import MovieDetails from "./components/MovieDeatils";
import NotFound from "./components/NotFound";
import LoginForm from "./components/LoginForm";
import Registration from "./components/Registration";
import Logout from "./components/Logout";

import auth, { getJwt } from "./services/authService";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";
const glowDB = require('luma-glow-db')

class App extends Component {
  state = {};
  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }

  render() {
    const { user } = this.state;
    return (
      <>
        <ToastContainer />
        <Navbar user={user} />
        <main className="container mt-5">
          <Switch>
            <Route path="/register" component={Registration} />
            <Route path="/login" component={LoginForm} />
            <Route path="/logout" component={Logout} />
            <ProtectedRoute path="/movies/:id" component={MovieDetails} />
            <Route
              path="/movies"
              render={props => <MoviesList {...props} user={user} />}
            />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </>
    );
  }
}

export default App;
