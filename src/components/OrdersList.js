import React from "react";
import { List, Avatar } from "antd";
import { connect } from "react-redux";
import getVisibleOrders from "../selectors/Orders_selector";
import { Button } from "antd";
import { Link } from "react-router-dom";
import '../styles/orderlist.css'



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
        <List
          itemLayout="horizontal"
          dataSource={this.props.orders}
          renderItem={item => (
            <List.Item  key={item.id}>
              <p className="list_item">Amount: {item.amount}</p>
              <p className="list_item">State: {item.state}</p>
              <Link to={`/edit/${item.id}`}>
                <Button style={{marginLeft: 20}} type="primary">Edit</Button>
              </Link>

              <List.Item.Meta
                avatar={
                  <Avatar src="data:image/png;base64,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" />
                }
                key={item.id}
                title={item.customerName}
                description={item.description}
              />
            </List.Item>
          )}
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

export default connect(mapStateToProps)(OrdersList);
