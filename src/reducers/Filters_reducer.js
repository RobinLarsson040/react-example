let defaultFilterState = {
    customerName: undefined,
    sortBy: "date",
    state: undefined
  };
  
  
  
  let filterReducer = (state = defaultFilterState, action) => {
    switch (action.type) {
      case "EDIT_FILTER":
        return { ...state, ...action.updates };
      default:
        return state;
    }
  };

  export default filterReducer;