import React, { Component } from "react";
import "./App.css";
import LoginForm from "./LoginPage/LoginForm";
import MoreLogins from "./LoginPage/MoreLogins";
import News from "./News/News";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <News />
        </div>
        <div>
          <LoginForm />
        </div>
        <MoreLogins />
      </div>
    );
  }
}

export default App;
