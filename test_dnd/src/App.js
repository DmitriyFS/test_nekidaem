import React from "react";
import "./App.css";
import Lists from "./component/cardsField/lists";
import { connect } from "react-redux";
import { DragDropContext } from "react-beautiful-dnd";
import { sort } from "./actions/listsActions";

class App extends React.Component {
  onDragEnd = (result) => {
    const { destination, source } = result;
    if (!destination) {
      return;
    }
    this.props.dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index
      )
    );
  };

  render() {
    const { lists } = this.props;
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div className="AppWrapper">
          {lists.map((list) => (
            <Lists
              listID={list.id}
              key={list.id}
              title={list.title}
              cards={list.cards}
            />
          ))}
        </div>
      </DragDropContext>
    );
  }
}

const mapStateToProps = (state) => ({
  lists: state.lists,
});

export default connect(mapStateToProps)(App);
