import { createStore, combineReducers, applyMiddleware } from "redux";
import orderReducer from "../reducers/Orders_reducer";
import filterReducer from "../reducers/Filters_reducer";
import navigationReducer from "../reducers/Navigation_reducer";
import thunk from "redux-thunk";

export default () => {
  let store = createStore(
    combineReducers({
      orders: orderReducer,
      filter: filterReducer,
      navigation: navigationReducer
    }),
    applyMiddleware(thunk)
  );

  return store;
};
