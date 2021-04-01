import React from "react";
const Cards = ({ text, id, index }) => {
  return (
    <div>
      <div>
        <button>deleteCards</button>
      </div>
      <div>
        <h5>id</h5>
      </div>
      <div>
        <h5>text card</h5>
      </div>
    </div>
  );
};

export default Cards;
