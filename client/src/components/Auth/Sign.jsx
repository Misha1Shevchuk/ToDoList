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
      name: "",
      redirect: false
    };
    this.sign = this.sign.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  sign = async () => {
    if (this.state.email && this.state.password) {
      await axios
        .post(`http://localhost:5000/api/user/register`, {
          name: this.state.name,
          email: this.state.email,
          password: this.state.password
        })
        .then(response => {
          console.log(response);
          if (response) {
            sessionStorage.setItem("userData", response);
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
        <div className={classes.container}>
          <h3>Login page</h3>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={this.onChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={this.onChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Пароль"
            minLength="6"
            onChange={this.onChange}
          />
          <input type="submit" value="Sign" onClick={this.sign} />
        </div>
        <NavLink to="/login">Login</NavLink>
      </div>
    );
  }
}
