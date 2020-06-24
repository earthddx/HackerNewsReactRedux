import { combineReducers } from "redux";
import saveSearchReducer from "./searchTerm";

const rootReducer = combineReducers({
  saveSearchReducer,
});

export default rootReducer;
