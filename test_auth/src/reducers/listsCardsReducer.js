import { CONSTANTS } from "../actions/actions";

// let cardID = 6;

let initialState = {
  cards: [
    { id: 1762, row: "0", seq_num: 0, text: "cards 1" },
    { id: 1763, row: "0", seq_num: 1, text: "cards 1" },
    { id: 1768, row: "0", seq_num: 2, text: "cards 7" },
    { id: 1764, row: "1", seq_num: 0, text: "cards 3" },
    { id: 1765, row: "1", seq_num: 1, text: "cards 4" },
    { id: 1766, row: "2", seq_num: 0, text: "cards 5" },
    { id: 1767, row: "3", seq_num: 0, text: "cards 6" },
  ],
};

const listsCardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.LOADING_CARD: {
      return { ...state, cards: [...state.cards, ...action.payload.cards] };
    }
    // case CONSTANTS.ADD_CARD: {
    //   const newCard = {
    //     text: action.payload.text,
    //     id: `card-${cardID}`,
    //   };
    //   cardID += 1;

    //   const newState = state.map((list) => {
    //     if (list.id === action.payload.listID) {
    //       return {
    //         ...list,
    //         cards: [...list.cards, newCard],
    //       };
    //     } else {
    //       return list;
    //     }
    //   });

    //   return newState;
    // }

    // case CONSTANTS.DELETE_CARD: {
    //   const newState = state.filter(
    //     (list) => list.cards.id !== action.payload.cardID
    //   );

    //   return newState;
    // }

    default:
      return state;
  }
};

export default listsCardsReducer;
