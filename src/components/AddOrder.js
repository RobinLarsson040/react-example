import React, { Component } from "react";
import OrderForm from "./OrderForm";
import { addOrder } from "../actions/Orders_action";
import connect from "react-redux/lib/connect/connect";

class AddOrder extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <OrderForm defaultState = {{customerName: '', amount: 0}} onSubmit = {(order)=>{
            this.props.dispatch(addOrder(order))
            this.props.history.push('/orders');
        }} />
      </div>
    );
  }
}

export default connect()(AddOrder);