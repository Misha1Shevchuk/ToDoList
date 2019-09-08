import React from "react";
import classes from "./Login.module.css";
import axios from "axios";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.login = this.login.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  login = async () => {
    console.log(JSON.stringify(this.state));
    await axios
      .post(`http://localhost:5000/api/user/login`, {
        email: this.state.email,
        password: this.state.password
      })
      .then(response => {
        console.log(response);
      });
  };

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className={classes.window}>
        {/* <form className={classes.container} onSubmit={this.handleSubmit}> */}
        <div className="container">
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
          <input type="submit" value="Login" onClick={this.login} />
        </div>
        {/* </form> */}
      </div>
    );
  }
}
