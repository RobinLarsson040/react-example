import uuid from "uuid";

export let addOrder = ({
    description = "no description",
    amount = 0,
    createdAt = 0,
    customerName = "anonymous",
    state = undefined
  }) => {
    return {
      type: "ADD_ORDER",
      order: {
        id: uuid(),
        description: description,
        amount: amount,
        createdAt: createdAt,
        customerName: customerName,
        state: state
      }
    };
  };
  
  export let removeOrderById = ({ id }) => {
    return {
      type: "REMOVE_ORDER",
      id: id
    };
  };
  
  export let editOrderById = ({ id }, updates) => {
    return {
      type: "EDIT_ORDER",
      id,
      updates: updates
    };
  };