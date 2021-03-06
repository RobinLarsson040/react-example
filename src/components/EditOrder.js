import React, { Component } from "react";
import OrderForm from "./OrderForm";
import connect from "react-redux/lib/connect/connect";
import { Button } from "antd";
import { startRemoveOrder, startEditOrder } from "../actions/Orders_action";
import {editPage} from '../actions/Navigation_action'

class EditOrder extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <div>
        <OrderForm
          defaultState={this.props.order}
          onSubmit={order => {
            this.props.dispatch(startEditOrder({ id: order.id }, order));
            this.props.history.push("/orders");
            this.props.dispatch(editPage('orders'))
          }}
        />
        <Button
          onClick={() => {
            this.props.dispatch(startRemoveOrder({ id: this.props.order.id }));
            this.props.history.push('/orders');
            this.props.dispatch(editPage('orders'))
          }}
          type="danger"
        >
          Delete
        </Button>
      </div>
    );
  }
}

let mapStateToProps = (state, props) => {
  return {
    order: state.orders.find(item => {
      return item.id === props.match.params.id;
    })
  };
};

export default connect(mapStateToProps)(EditOrder);
