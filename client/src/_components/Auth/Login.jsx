import React from "react";
import { Redirect, NavLink } from "react-router-dom";
import classes from "./Auth.module.css";
import { login } from "../../_services/AuthRequest";

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
      await login(this.state.email, this.state.password)
        .then(login_response => {
          this.setState({ redirect: true });
        })
        .catch(err => console.log(err));
    }
  };

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={"/"} />;
    }

    if (localStorage.getItem("userData")) {
      return <Redirect to={"/"} />;
    }

    return (
      <div className={classes.window}>
        <form className={classes.container} onSubmit={this.login}>
          <h3 className={classes.header}>Login page</h3>
          <input
            type="email"
            name="email"
            value={this.state.email}
            autoComplete="user-name"
            placeholder="Email"
            onChange={this.onChange}
            className={classes.input}
          />
          <input
            type="password"
            name="password"
            autoComplete="current-password"
            value={this.state.pass}
            placeholder="Пароль"
            minLength="6"
            onChange={this.onChange}
            className={classes.input}
          />
          <input type="submit" className={classes.btn_submit} value="Login" />
        </form>
        <NavLink className={classes.link} to="/sign">
          Registration
        </NavLink>
      </div>
    );
  }
}
