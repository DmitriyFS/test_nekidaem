import React from "react";
import "./card.css";
import { Draggable } from "react-beautiful-dnd";
import DeleteButton from "../actionButton/deleteButton";
const Card = ({ text, id, index }) => {
  return (
    <Draggable draggableId={String(id)} index={index}>
      {(provided) => (
        <div>
          <div>
            <DeleteButton cardID={id} />
          </div>
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className="cards"
          >
            <h5>{text}</h5>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Card;
