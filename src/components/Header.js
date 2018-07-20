import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu, Icon } from "antd";
import "antd/dist/antd.css";
import "../styles/header.css";
import connect from "react-redux/lib/connect/connect";
import { editPage } from "../actions/Navigation_action";

class Header extends Component {
  handleClick = e => {
    this.props.dispatch(editPage(e.key));
  };

  render() {
    return (
      <div>
        <h1 className="title">Order Tracking</h1>
        <Menu
          className="menu"
          onClick={this.handleClick}
          selectedKeys={[this.props.page]}
          mode="horizontal"
        >
          <Menu.Item key="orders">
            <Link to="/orders">
              <Icon type="table" />Orders
            </Link>
          </Menu.Item>
          <Menu.Item key="addorder">
            <Link to="/addorder">
              <Icon type="plus" />New Order
            </Link>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

let mapStateToProps = (state, props) => {
  return {
    page: state.navigation.page
  };
};

export default connect(mapStateToProps)(Header);
