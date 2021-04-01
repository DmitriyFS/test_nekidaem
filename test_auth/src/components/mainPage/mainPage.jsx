import axios from "axios";
import React from "react";
// import { connect } from "react-redux";
import { Redirect } from "react-router";
// import { getCards } from "../../actions/cardsActions";
import ListsCards from "./listsCards/listsCards";

class MainPage extends React.Component {
  state = {
    btnClick: false,
  };

  button = () => {
    const currentToken = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `JWT ${currentToken}` },
    };
    if (currentToken) console.log("current", currentToken);
    axios
      .get("https://trello.backend.tests.nekidaem.ru/api/v1/cards/", config)
      .then(function (response) {
        console.log("get cards", response);
      });
  };

  // getCards = () => {
  //   const { dispatch, cards } = this.props;
  //   this.setState();
  //   dispatch(getCards(cards));
  // };

  buttonClick = () => {
    this.setState({
      btnClick: true,
    });
  };

  render() {
    const { btnClick } = this.state;

    if (btnClick === true) {
      localStorage.clear();
      return <Redirect to={"/auth"} />;
    }
    return (
      <div>
        <button onClick={this.button}>Дай карточки</button>
        <div>
          <button onClick={this.buttonClick}>Разлогинится</button>
        </div>
        <div className="MainPage">
          <ListsCards />
        </div>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({ cards: state.lists.cards });

// export default connect(mapStateToProps)(MainPage);
export default MainPage;
