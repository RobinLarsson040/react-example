import "./App.css";
import React from "react";
import AppRouter from "./routers/AppRouter";
import { Provider } from "react-redux";
import configureStore from "./store/ConfigureStore";
import getVisibleOrders from "./selectors/Orders_selector";
import { database } from "./firebase/firebase";
import {
  startGetOrders,
  addOrder,
  removeOrderById,
  editOrderById
} from "./actions/Orders_action";


let store = configureStore();

store.subscribe(()=>{
  console.log(store.getState())
})

store.dispatch(startGetOrders()).then(()=>{

})

let jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

 ///CHANGE
database.ref("orders").on("value", snapshot => {
  let orders = [];
  snapshot.forEach(item => {
    orders.push({
      id: item.key,
      ...item.val()
    });
  });
})


//REMOVE
database.ref("orders").on("child_removed", snapshot => {
  console.log(snapshot.key, snapshot.val);
});

//EDIT
database.ref("orders").on("child_changed", snapshot => {
  console.log(snapshot.key, snapshot.val);
});

//ADDED
database.ref("orders").on("child_added", snapshot => {
  console.log(snapshot.key, snapshot.val);
}); 





export default jsx;
