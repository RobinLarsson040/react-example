import React, { Component } from "react";
import OrderForm from "./OrderForm";
import { addOrder, editOrderById } from "../actions/Orders_action";
import connect from "react-redux/lib/connect/connect";
import { Button } from "antd";
import { startRemoveOrder } from "../actions/Orders_action";

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
            this.props.dispatch(editOrderById({ id: order.id }, order));
            this.props.history.push("/orders");
          }}
        />
        <Button
          onClick={() => {
            this.props.dispatch(startRemoveOrder({ id: this.props.order.id }));
            this.props.history.push('/orders');
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
