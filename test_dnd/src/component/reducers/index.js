import { combineReducers } from "redux";
import listsReducer from "./listsReduser";

export default combineReducers({
  lists: listsReducer,
});
