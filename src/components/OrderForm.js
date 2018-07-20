import React from "react";
import connect from "react-redux/lib/connect/connect";
import { Form, Input, Button, Alert } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { Menu, Dropdown, Icon } from "antd";



class OrderForm extends React.Component {
  constructor(props) {
    let errorMessage = false;
    super(props);
    this.state = props.defaultState;
  }

   menu = (
    <Menu>
            <Menu.Item>
        <a
          onClick={() => {
            this.setState(() => {
              return {
                state: 'PENDING'
              };
            });
          }}
        >
          PENDING
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          onClick={() => {
            this.setState(() => {
              return {
                state: 'PAYMENT ACCEPTED'
              };
            });
          }}
        >
          PAYMENT ACCEPTED
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          onClick={() => {
            this.setState(() => {
              return {
                state: 'PAYMENT REJECTED'
              };
            });
          }}
        >
          PAYMENT REJECTED
        </a>
      </Menu.Item>
    </Menu>
  );

  resetDefaults = () => {
    document.getElementById("order_form").reset();
  };

  onCustomerNameChange = () => {};

  onAmountChange = () => {};

  onDescriptionChange = () => {};

  onOrderStateChange = () => {};

  render() {
    return (
      <div className="order_form">
        <h2>Order details:</h2>
        <Form id="order_form">
          <Input
            style={{ width: 300 }}
            value={this.state.customerName}
            placeholder="Customer Name"
            type="text"
            autoFocus
            onChange={e => {
              let value = e.target.value;
              this.setState(() => {
                return {
                  customerName: value
                };
              });
            }}
          />
          <br />
          <br />
          <Input
            style={{ width: 300 }}
            value={this.state.amount}
            placeholder="Amount"
            type="number"
            onChange={e => {
              let value = e.target.value;
              this.setState(() => {
                return {
                  amount: value
                };
              });
            }}
          />
          <br />
          <br />
          <TextArea
            style={{ width: 300 }}
            value={this.state.description}
            placeholder="Description"
            type="text"
            onChange={e => {
              let value = e.target.value.toLowerCase();
              this.setState(() => {
                return {
                  description: value
                };
              });
            }}
          />
          <br />
          <br />
          <Dropdown overlay={this.menu}>
            <Button style={{ marginLeft: 8 }}>
              {this.state.state} <Icon type="down" />
            </Button>
          </Dropdown>
          <br />
          <br />
          <Button
            type="primary"
            onClick={e => {
              e.preventDefault();
              if (!this.state.customerName || this.state.amount < 1) {
                this.errorMessage = true;
              } else {
                this.errorMessage = false;
                this.props.onSubmit(this.state);
              }
              this.forceUpdate();
            }}
          >
            Save
          </Button>
        </Form>
        {this.errorMessage ? (
          <Alert
            style={{ width: 250, marginTop: 50 }}
            message="You must provide customer name and amount must be greater than 0!"
            type="info"
          />
        ) : (
          <p />
        )}
      </div>
    );
  }
}

export default connect()(OrderForm);
