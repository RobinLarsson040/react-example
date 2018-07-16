import React from "react";
import OrdersList from "./OrdersList";
import Filter from "./Filter";
import SortBy from "./SortBy";

let Orders = () => (
  <div>
    <Filter />
    <OrdersList />
  </div>
);

export default Orders;
