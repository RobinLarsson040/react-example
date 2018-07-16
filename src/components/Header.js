import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Menu, Icon } from 'antd';
import 'antd/dist/antd.css';


class Header extends Component {
  state = {
    current: 'mail',
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  render() {
    return (
      <div>
        <h1 className="App-title">Order Tracking</h1>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          <Menu.Item key="mail">
            <Link to="/orders"><Icon type="appstore" />Orders</Link>
          </Menu.Item>
          <Menu.Item key="app" >
            <Link to="/orderlines"><Icon type="appstore" />Order-Lines</Link>
          </Menu.Item>
          <Menu.Item key="alipay">
            <Link to="/invoices"><Icon type="appstore" />Invoices</Link>
          </Menu.Item>
          <Menu.Item key="new">
            <Link to="/addorder"><Icon type="appstore" />New Order</Link>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default Header;