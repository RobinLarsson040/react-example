import { createStore, combineReducers } from "redux";
import orderReducer from "../reducers/Orders_reducer";
import filterReducer from "../reducers/Filters_reducer";

export default () => {
  let store = createStore(
    combineReducers({
      orders: orderReducer,
      filter: filterReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
