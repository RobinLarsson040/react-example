let defaultNavigationState = {
  page: 'orders'
};

let navigationReducer = (state = defaultNavigationState, action) => {
  switch (action.type) {
    case "CHANGE_PAGE":
      return { page: action.page };
      default:
      return state;
  }
};

export default navigationReducer
