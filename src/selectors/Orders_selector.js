let getVisibleOrders = (orders, { customerName, state, sortBy }) => {
  return orders
    .filter(item => {
      let customerNameMatch = customerName
        ? item.customerName.includes(customerName)
        : true;
      let stateMatch = state ? item.state.includes(state) : true;

      return customerNameMatch && stateMatch;
    })
    .sort((a, b) => {
      if (sortBy === "amount") {
        return a.amount < b.amount ? 1 : -1;
      }
      if (sortBy === "state") {
        return a.state.localeCompare(b.state) ? 1 : -1;
      }
    });
};

export default getVisibleOrders;
