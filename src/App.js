import "./App.css";
import React from "react";
import AppRouter from "./routers/AppRouter";
import { Provider } from "react-redux";
import configureStore from "./store/ConfigureStore";
import getVisibleOrders from "./selectors/Orders_selector";
import {
  addOrder,
  removeOrderById,
  editOrderById
} from "./actions/Orders_action";

let store = configureStore();

store.subscribe(() => {
  let state = store.getState();
  let visisbleOrders = getVisibleOrders(state.orders, state.filter);
  console.log(visisbleOrders);
});

store.dispatch(
  addOrder({
    description: "Jonas useless order",
    amount: 200,
    createdAt: 0,
    customerName: "Jonas Karlsson",
    state: "PAYMENT FAILED"
  })
);
store.dispatch(
  addOrder({
    description: "Huge order by Carl Nilsson",
    amount: 90000,
    createdAt: 0,
    customerName: "Carl Nilsson",
    state: "PAYMENT ACCEPTED"
  })
);
store.dispatch(
  addOrder({
    description: "Some Monster Drinks",
    amount: 1000,
    createdAt: 0,
    customerName: "Robin Larsson",
    state: "DELIVERED"
  })
);
store.dispatch(
  addOrder({
    description: "Whatever",
    amount: 3000,
    createdAt: 0,
    customerName: "Robin Larsson",
    state: "DELIVERED"
  })
);

store.dispatch(
    addOrder({
      description: "Whatever",
      amount: 7600,
      createdAt: 0,
      customerName: "Jonas Karlsson",
      state: "PAYMENT ACCEPTED"
    })
  );

  store.dispatch(
    addOrder({
      description: "Whatever",
      amount: 2800,
      createdAt: 0,
      customerName: "Robin Larsson",
      state: "DELIVERED"
    })
  );

let jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);





export default jsx;
