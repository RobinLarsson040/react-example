import "./App.css";
import React from "react";
import AppRouter from "./routers/AppRouter";
import { Provider } from "react-redux";
import configureStore from "./store/ConfigureStore";
import { database } from "./firebase/firebase";
import {
  editOrderById,
  getOrders,
  removeOrderById
} from "./actions/Orders_action";

let store = configureStore();

store.subscribe(()=>{
  console.log(store.getState())
})

let jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

///ADD
database.ref('orders').on('value', snapshot => {
  let orders = [];
  snapshot.forEach(item => {
    console.log(item.val())
    orders.push({
      id: item.key,
      ...item.val()
    });
  });
  store.dispatch(getOrders(orders));
});
 
/*  //REMOVE
database.ref("orders").on("child_removed", snapshot => {
  store.dispatch(removeOrderById({ id: snapshot.key }));
});

//EDIT
database.ref("orders").on("child_changed", snapshot => {
  store.dispatch(editOrderById({ id: snapshot.key }, snapshot.val()));
});  */
 

export default jsx;
