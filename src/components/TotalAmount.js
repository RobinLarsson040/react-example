import React from "react";
import connect from "react-redux/lib/connect/connect";
import "../styles/total.css";

let totalAmount = orders => {
  let total = 0;
  orders.map(item => (total += parseInt(item.amount)));
  return total;
};

let TotalAmount = props => {
  return (
    <div className="total">
      <p className="total_black">Total:</p>
      <p className="total_green">{totalAmount(props.orders)}:-</p>
    </div>
  );
};

let mapStateToProps = (state, props) => {
  return {
    orders: state.orders
  };
};

export default connect(mapStateToProps)(TotalAmount);
