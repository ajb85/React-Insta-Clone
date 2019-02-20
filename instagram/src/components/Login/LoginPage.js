import React from "react";
import "./login.css";
// updateState={this.props.updateState}

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { accounts: {} };
  }
  componentDidMount() {
    if (localStorage.accounts) {
      this.setState({ accounts: JSON.parse(localStorage.getItem("accounts")) });
    }
    window.addEventListener("beforeunload", this.saveStateToStorage);
  }
  componentWillUnmount() {
    window.removeEventListener("beforeunload", this.saveStateToStorage);
    this.saveStateToStorage();
  }
  saveStateToStorage = () => {
    let { accounts } = this.state;
    if (Object.keys(accounts).length) {
      localStorage.setItem("accounts", JSON.stringify(accounts));
    }
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(e.target);
  };

  onCreateAccount = e => {
    console.log(e.target);
  };
  render() {
    return (
      <div className="loginContainer">
        <h1>Instagram Login</h1>
        <form onSubmit={this.onSubmit}>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
          <button onClick={this.onCreateAccount}>Create Account</button>
        </form>
      </div>
    );
  }
}
