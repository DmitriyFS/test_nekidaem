//statusText: "Created"
//1
//Регистрация
//логин FedotovDmitriy
//почта poreglamentu@mail.ru
//пароль ProverkaTest
//2
//Регистрация test
//логин zxcvzxcvzxcv
//почта zxcvzxcvzxcv@mail.ru
//пароль zxcvzxcvzxcv

import axios from "axios";
import React from "react";
import Autorization from "../autorizatoin/autorization";

class Registration extends React.Component {
  state = {
    username: "",
    email: "",
    password: "",
    btnClick: false,
  };

  buttonClick = () => {
    this.setState({
      btnClick: true,
    });
    axios
      .post("https://trello.backend.tests.nekidaem.ru/api/v1/users/create/", {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
      })
      .then(function (response) {
        console.log("регистрация", response);
      });
  };

  render() {
    const { username, email, password, btnClick } = this.state;

    if (btnClick === true) {
      return <Autorization />;
    }
    return (
      <div>
        <div>
          <h1>Регистрация</h1>
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
            placeholder="Email"
            value={email}
            onChange={(e) => {
              this.setState({
                email: e.target.value,
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
          <button onClick={this.buttonClick}>Зарегистрироваться</button>
        </div>
      </div>
    );
  }
}

export default Registration;
