import { combineReducers } from "redux";
import listsCardsReducer from "./listsCardsReducer";

export default combineReducers({
  lists: listsCardsReducer,
});
