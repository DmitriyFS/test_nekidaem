import { CONSTANTS } from "./actions";

export const addCard = (listID, text) => {
  return {
    type: CONSTANTS.ADD_CARD,
    payload: { text, listID },
  };
};

export const deleteCard = (cardID) => {
  return {
    type: CONSTANTS.DELETE_CARD,
    payload: cardID,
  };
};
export const getCards = (cards) => {
  return {
    type: CONSTANTS.LOADING_CARD,
    payload: { cards },
  };
};
