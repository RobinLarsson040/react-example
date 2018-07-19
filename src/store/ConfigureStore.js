import { createStore, combineReducers, applyMiddleware } from "redux";
import orderReducer from "../reducers/Orders_reducer";
import filterReducer from "../reducers/Filters_reducer";
import thunk from 'redux-thunk';

export default () => {
  let store = createStore(
    combineReducers({
      orders: orderReducer,
      filter: filterReducer
    }),
    applyMiddleware(thunk)
  );

  return store;
};
