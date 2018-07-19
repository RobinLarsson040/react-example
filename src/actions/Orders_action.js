import { database } from "../firebase/firebase";

let defaultState = {
  description: "no description",
  amount: 0,
  createdAt: 0,
  customerName: "anonymous",
  state: "No State"
};

export let getOrders = orders => {
  return {
    type: "GET_ORDERS",
    orders
  };
};

export let startGetOrders = () => {
  let orders = [];
  return dispatch => {
   return database
      .ref("orders")
      .once("value", snapshot => {
        snapshot.forEach(item => {
          orders.push({
            id: item.key,
            ...item.val()
          });
        });
      })
      .then(() => {
        dispatch(getOrders(orders));
      });
  };
};

export let addOrder = order => {
  return {
    type: "ADD_ORDER",
    order
  };
};

export let startAddOrder = (orderData = defaultState) => {
  return dispatch => {
    database
      .ref("orders")
      .push(orderData)
      .then(ref => {
        dispatch(addOrder({ id: ref.key, ...orderData }));
      });
  };
};

export let startRemoveOrder = ({ id }) => {
  return dispatch => {
    database
      .ref("orders" + "/" + id)
      .remove()
      .then(() => {
        dispatch(removeOrderById({id}));
      });
  };
};

export let removeOrderById = ({ id }) => {
  return {
    type: "REMOVE_ORDER",
    id: id
  };
};

let startEditOrder = ()=>{
  return dispatch => {
    
  }
}


export let editOrderById = ({ id }, updates) => {
  return {
    type: "EDIT_ORDER",
    id,
    updates: updates
  };
};
