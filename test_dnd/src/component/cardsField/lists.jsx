import React from "react";
import Card from "../cards/card";
import "./lists.css";
import ActionButton from "../actionButton/actionButton";
import { Droppable } from "react-beautiful-dnd";

const Lists = ({ title, cards, listID }) => {
  return (
    <Droppable droppableId={String(listID)}>
      {(provided) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className="cardsField"
        >
          <div>
            <h4 className="title">{title}</h4>
          </div>
          {cards.map((card, index) => (
            <Card key={card.id} index={index} text={card.text} id={card.id} />
          ))}
          <ActionButton listID={listID} />
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default Lists;
