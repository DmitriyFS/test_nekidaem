import React from "react";
import { connect } from "react-redux";
import { addCard } from "../../actions/actions";

class ActionButton extends React.Component {
  state = {
    formOpen: false,
    text: "",
  };

  openForm = () => {
    this.setState({
      formOpen: true,
    });
  };
  closeForm = (e) => {
    this.setState({
      formOpen: false,
    });
  };

  handleInputChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  handleAddCard = () => {
    const { dispatch, listID } = this.props;
    const { text } = this.state;

    if (text) {
      this.setState({ text: "" });
      dispatch(addCard(listID, text));
    }
  };

  renderButton = () => {
    return (
      <div>
        <button onClick={this.openForm}>Добавить</button>
      </div>
    );
  };

  renderForm = () => {
    return (
      <div>
        <div>
          <textarea
            value={this.state.text}
            onChange={this.handleInputChange}
            autoFocus
            onBlur={this.closeForm}
            placeholder="введите"
          />
        </div>
        <div>
          <button onMouseDown={this.handleAddCard}>Добавить</button>
        </div>
        <div>
          <button onClick={this.closeForm}>x</button>
        </div>
      </div>
    );
  };

  render() {
    return this.state.formOpen ? this.renderForm() : this.renderButton();
  }
}

export default connect()(ActionButton);
