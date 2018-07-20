import React, { Component } from "react";
import OrderForm from "./OrderForm";
import { startAddOrder } from "../actions/Orders_action";
import connect from "react-redux/lib/connect/connect";
import {editPage} from '../actions/Navigation_action'

class AddOrder extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <OrderForm defaultState = {{customerName: '', amount: 0, state: 'PENDING'}} onSubmit = {(order)=>{
            this.props.dispatch(startAddOrder(order))
            this.props.history.push('/orders');
            this.props.dispatch(editPage('orders'))
        }} />
      </div>
    );
  }
}

export default connect()(AddOrder);
