import React from "react";
import Cards from "./cards/cards";

const ListsCards = () => {
  return (
    <div>
      <div>
        <h4 className="title">title</h4>
      </div>
      <div>
        <Cards />
      </div>
      <div>
        <button>CreateCards</button>
      </div>
    </div>
  );
};

export default ListsCards;
