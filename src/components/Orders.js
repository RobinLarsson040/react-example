import React from "react";
import OrdersList from "./OrdersList";
import Filter from "./Filter";
import TotalAmount from "./TotalAmount"

let Orders = () => (

  <div>
    <Filter />
    <TotalAmount/>
    < OrdersList />
  </div>
);

export default Orders;
