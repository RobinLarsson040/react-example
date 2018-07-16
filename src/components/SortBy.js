import React from "react";
import { Menu, Dropdown, Icon, Button } from "antd";
import connect from "react-redux/lib/connect/connect";
import { editFilter } from "../actions/Filters_action";

let SortBy = props => {
  const menu = (
    <Menu>
      <Menu.Item>
        <a
          onClick={() => {
            props.dispatch(editFilter({ sortBy: "amount" }));
          }}
        >
          Amount
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          onClick={() => {
            props.dispatch(editFilter({ sortBy: "state" }));
          }}
        >
          State
        </a>
      </Menu.Item>
    </Menu>
  );
  return (
    <Dropdown overlay={menu}>
    <Button style={{ marginLeft: 8 }}>
      Sort By <Icon type="down" />
    </Button>
  </Dropdown>
  );
};



export default connect()(SortBy);;
