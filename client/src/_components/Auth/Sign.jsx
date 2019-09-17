import React from "react";
import { Redirect, NavLink } from "react-router-dom";
import classes from "./Auth.module.css";
import axios from "axios";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      redirect: false
    };
    this.sign = this.sign.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  sign = async event => {
    event.preventDefault();
    console.log(this.state);
    if (this.state.email && this.state.password) {
      await axios
        .post(`/api/user/register`, {
          name: this.state.name,
          email: this.state.email,
          password: this.state.password
        })
        .then(response => {
          if (response) {
            this.setState({ redirect: true });
          } else {
            console.log("Login error");
          }
        });
    }
  };

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state);
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={"/login"} />;
    }

    return (
      <div className={classes.window}>
        <form className={classes.container} onSubmit={this.sign}>
          <h3 className={classes.header}>Register page</h3>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={this.onChange}
            value={this.state.name}
            minLength="5"
            className={classes.input}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={this.onChange}
            value={this.state.email}
            className={classes.input}
          />
          <input
            type="password"
            name="password"
            placeholder="Пароль"
            minLength="6"
            onChange={this.onChange}
            value={this.state.password}
            className={classes.input}
          />
          <input type="submit" className={classes.btn_submit} value="Sign" />
        </form>
        <NavLink className={classes.link} to="/login">
          Login
        </NavLink>
      </div>
    );
  }
}
