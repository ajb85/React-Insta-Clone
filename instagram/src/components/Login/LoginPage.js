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
      const storage = JSON.parse(localStorage.getItem("accounts"));
      this.setState({ accounts: storage });
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
    const username = e.target.childNodes[0].value;
    // Normally would SHA the password, but going to be lazy here instead :P
    const password = e.target.childNodes[1].value;

    if (this.state.accounts.hasOwnProperty(username)) {
      if (this.state.accounts[username] === password) {
        this.logUserIn(username);
      } else {
        alert("Incorrect password");
      }
    } else {
      alert("Account not found");
    }
  };

  onCreateAccount = e => {
    const username = e.target.parentNode.childNodes[0].value;
    const password = e.target.parentNode.childNodes[1].value;

    if (this.state.accounts[username]) {
      alert("Account already exists!");
    } else {
      let accounts = Object.assign({}, this.state.accounts);
      accounts[username] = password;

      this.setState({ accounts }, () => this.logUserIn(username));
    }
  };

  logUserIn(username) {
    this.props.updateState("loggedIn", true);
    this.props.updateState("username", username);
  }
  render() {
    return (
      <div className="loginContainer">
        <h1>Instagram Login</h1>
        <form onSubmit={this.onSubmit}>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
          <button type="button" onClick={this.onCreateAccount}>
            Create Account
          </button>
        </form>
      </div>
    );
  }
}
