import { CONSTANTS } from "./actions";

export const getCards = (cards) => {
  return {
    type: CONSTANTS.LOADING_CARD,
    payload: { cards },
  };
};

// export const addCard = (listID, text) => {
//     return {
//       type: CONSTANTS.ADD_CARD,
//       payload: { text, listID },
//     };
//   }
