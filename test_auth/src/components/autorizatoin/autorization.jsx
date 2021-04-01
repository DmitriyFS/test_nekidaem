//statusText: "OK"
//2
//Авторизация test
//логин zxcvzxcvzxcv
//пароль zxcvzxcvzxcv
import axios from "axios";
import React from "react";
import { Redirect } from "react-router-dom";
import Registration from "../registration/regisration";

class Autorization extends React.Component {
  state = {
    username: "",
    password: "",
    token: "",
    btnClickReg: false,
    redirectMain: false,
  };

  buttonClickAuth = () => {
    this.setState({ redirectMain: true });
    axios
      .post("https://trello.backend.tests.nekidaem.ru/api/v1/users/login/", {
        username: this.state.username,
        password: this.state.password,
      })
      .then(function (response) {
        localStorage.setItem("token", response.data.token);
        console.log("авторизация", response);
        console.log("локал стораж", localStorage);
      });
  };
  buttonClickReg = () => {
    this.setState({
      btnClickReg: true,
    });
  };

  render() {
    const { username, password, btnClickReg, redirectMain } = this.state;
    if (btnClickReg === true) {
      return <Registration />;
    } else if (redirectMain === true) {
      return <Redirect to={"/"} />;
    }
    return (
      <div>
        <div>
          <h1>Авторизация</h1>
        </div>
        <div>
          <input
            placeholder="UserName"
            value={username}
            onChange={(e) => {
              this.setState({
                username: e.target.value,
              });
            }}
          />
        </div>
        <div>
          <input
            placeholder="Password"
            value={password}
            onChange={(e) => {
              this.setState({
                password: e.target.value,
              });
            }}
          />
        </div>
        <div>
          <button onClick={this.buttonClickAuth}>Авторизация</button>
        </div>
        <div>
          <button onClick={this.buttonClickReg}>На регистрацию</button>
        </div>
      </div>
    );
  }
}

export default Autorization;
