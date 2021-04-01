import { CONSTANTS } from "../../actions/actions";

let cardID = 6;

let initialState = [
  {
    title: "ON HOLD",
    id: `list-${0}`,
    cards: [
      {
        id: `card-${0}`,
        text: "dfgkfhk;hkhlkj;klhj",
      },
      {
        id: `card-${1}`,
        text: "dfgkfhksasdasd;hkhlkj;klhj",
      },
    ],
  },
  {
    title: "123123123123",
    id: `list-${1}`,
    cards: [
      {
        id: `card-${2}`,
        text: "dfsgfsdfgdfh",
      },
      {
        id: `card-${3}`,
        text: "sdfgsdfgsdfg",
      },
      {
        id: `card-${4}`,
        text: "sdfgsdfasdasdasdasdgsdfg",
      },
      {
        id: `card-${5}`,
        text: "sdfgsdfasdasdasdasdgsdfg",
      },
    ],
  },
];

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.LOADING_CARD: {
      return { ...state, cards: [...state.cards, ...action.payload.cards] };
    }
    case CONSTANTS.ADD_CARD: {
      const newCard = {
        text: action.payload.text,
        id: `card-${cardID}`,
      };
      cardID += 1;

      const newState = state.map((list) => {
        if (list.id === action.payload.listID) {
          return {
            ...list,
            cards: [...list.cards, newCard],
          };
        } else {
          return list;
        }
      });

      return newState;
    }

    case CONSTANTS.DELETE_CARD: {
      const newState = state.filter(
        (list) => list.cards.id !== action.payload.cardID
      );

      return newState;
    }
    case CONSTANTS.DRAG_HAPPENED:
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
      } = action.payload;
      const newState = [...state];
      // в одном листе
      if (droppableIdStart === droppableIdEnd) {
        const list = state.find((list) => droppableIdStart === list.id);
        const card = list.cards.splice(droppableIndexStart, 1);
        list.cards.splice(droppableIndexEnd, 0, ...card);
      }

      // в другой лист
      if (droppableIdStart !== droppableIdEnd) {
        const listStart = state.find((list) => droppableIdStart === list.id);
        const card = listStart.cards.splice(droppableIndexStart, 1);
        const listEnd = state.find((list) => droppableIdEnd === list.id);
        listEnd.cards.splice(droppableIndexEnd, 0, ...card);
      }

      return newState;

    default:
      return state;
  }
};

export default listsReducer;
