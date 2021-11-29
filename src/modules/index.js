import { combineReducers } from "redux";
import counter from "./counter";
import todos from "./todos";
import counter2 from "./counter2";
import posts from "./posts";

const rootReducer = combineReducers({
  counter2,
  counter,
  todos,
  posts,
});

export default rootReducer;
