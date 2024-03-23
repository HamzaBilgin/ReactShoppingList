import { combineReducers } from "redux";
import shoppingListReducer from "./reducers/shoppingListReducer";

const rootReducer = combineReducers({
  shoppingList: shoppingListReducer,
});

export default rootReducer;
