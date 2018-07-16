import React from "react";
import { connect } from "react-redux";
import { editFilter } from "../actions/Filters_action";
import { Input } from "antd";
import SortBy from "./SortBy";

let Filter = props => {
  return (
    <div className="filter">
      <Input
        placeholder="Customer Name"
        style={{ width: 200 }}
        size="default"
        value={props.filter.customerName}
        onChange={e => {
          props.dispatch(editFilter({ customerName: e.target.value }));
        }}
      />
      <SortBy />
    </div>
  );
};

let mapStateToProps = state => {
  return {
    filter: state.filter
  };
};

export default connect(mapStateToProps)(Filter);
