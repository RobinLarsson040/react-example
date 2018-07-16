
let defaultOrderState = [];

let orderReducer = (state = defaultOrderState, action) => {
    switch (action.type) {
      case "ADD_ORDER":
        return [...state, action.order];
      case "REMOVE_ORDER":
        return state.filter(item => item.id !== action.id);
      case "EDIT_ORDER":
        return state.map(item => {
          if (item.id === action.id) {
            return {
              ...item,
              ...action.updates
            };
          } else {
            return item;
          }
        });
      default:
        return state;
    }
  };


  export default orderReducer;