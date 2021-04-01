import React from "react";
import { connect } from "react-redux";
import { deleteCard } from "../../actions/actions";

class DeleteButton extends React.Component {
  deleteCard = () => {
    const { dispatch, cardID } = this.props;
    this.setState();
    dispatch(deleteCard(cardID));
  };

  render() {
    return (
      <div>
        <button onClick={this.deleteCard}>delete</button>
      </div>
    );
  }
}

export default connect()(DeleteButton);
