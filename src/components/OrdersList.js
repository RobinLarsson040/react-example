import React from "react";
import connect from "react-redux/lib/connect/connect";
import getVisibleOrders from "../selectors/Orders_selector";
import "../styles/orderlist.css";
import { Table, Icon, Divider } from "antd";
import { withRouter } from "react-router";

const columns = [
  {
    className: "customerName",
    title: "Customer Name",
    dataIndex: "customerName",
    key: "customerName"
  },
  {
    className: "description",
    title: "Description",
    dataIndex: "description",
    key: "description"
  },
  {
    className: "amount",
    title: "Amount",
    dataIndex: "amount",
    key: "amount"
  },
  {
    className: "state",
    title: "State",
    dataIndex: "state",
    key: "state"
  }
];

class OrdersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  render() {
    return (
      <div>
        <Table
        bordered = {true}
          dataSource={this.props.orders}
          columns={columns}
          rowKey={item => item.id}
          onRow={item => {
            return {
              onClick: () => {
                this.props.history.push("/edit/" + item.id);
              },
              onMouseEnter: () => {}
            };
          }}
        />
      </div>
    );
  }
}

let mapStateToProps = state => {
  return {
    orders: getVisibleOrders(state.orders, state.filter)
  };
};

export default withRouter(connect(mapStateToProps)(OrdersList));
