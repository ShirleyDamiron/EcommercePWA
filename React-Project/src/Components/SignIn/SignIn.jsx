import React from "react";
import { appendFile } from "fs";

class SignIn extends React.Component {
  state = {
    email: "",
    password: ""
  };

  onInputChange = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  };

  onFormSubmit = evt => {
    evt.preventDefault();
    const { email, password } = this.state;
    fetch("/api/authenticateUser", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => {
      if (response.status === 200) {
        this.props.history.push("/");
        window.location.reload()
      }
    });
  };

  render() {
    return (
      <>
        <h1>Sign In!</h1>
        <form onSubmit={this.onFormSubmit} className="sign-in-form">
          <div className="sign-in-form__input-container">
            <label htmlFor="sign_in_email" className="label">
              Email:
            </label>
            <input
              type="email"
              id="sign_in_email"
              name="email"
              onChange={this.onInputChange}
              required
            />
          </div>

          <div className="sign-in-form__input-container">
            <label htmlFor="sign_in_password" className="label">
              Password:
            </label>
            <input
              type="password"
              id="sign_in_password"
              name="password"
              onChange={this.onInputChange}
              required
            />
          </div>

          <input type="submit" value="Submit" className="submitButton-signIn" />
        </form>
      </>
    );
  }
}

export default SignIn;
