import React from "react";
import { Redirect, NavLink } from "react-router-dom";
import classes from "./Login.module.css";
import axios from "axios";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      redirect: false
    };
    this.login = this.login.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  login = async event => {
    event.preventDefault();
    if (this.state.email && this.state.password) {
      await axios
        .post(`http://localhost:5000/api/user/login`, {
          email: this.state.email,
          password: this.state.password
        })
        .then(response => {
          if (response) {
            sessionStorage.setItem("userData", response.data);
            this.setState({ redirect: true });
          } else {
            console.log("Login error");
          }
        });
    }
  };

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={"/"} />;
    }

    if (sessionStorage.getItem("userData")) {
      return <Redirect to={"/"} />;
    }

    return (
      <div className={classes.window}>
        <form className={classes.container} onSubmit={this.login}>
          <h3>Login page</h3>
          <input
            type="email"
            name="email"
            value={this.state.email}
            placeholder="Email"
            onChange={this.onChange}
          />
          <input
            type="text"
            name="password"
            value={this.state.pass}
            placeholder="Пароль"
            minLength="6"
            onChange={this.onChange}
          />
          <input type="submit" value="Login" />
        </form>
        <NavLink to="/sign">Registration</NavLink>
      </div>
    );
  }
}
