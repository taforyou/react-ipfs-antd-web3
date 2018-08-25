import React, { Component } from "react";
import Web3 from "web3";
import { Form, Icon, Input, Button, Card } from "antd";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isConnected: false,
      account: "",
      eth: ""
    };
    this.web3 = new Web3(Web3.givenProvider);
  }

  getTodos() {
    this.web3.eth.getAccounts().then(acc => {
      // เมื่อ acc[0] มีค่า
      if (acc[0]) {
        this.web3.eth.getBalance(acc[0]).then(resEth => {
          const _resEth = this.web3.utils.fromWei(resEth, "ether");
          this.setState({ account: acc[0], isConnected: true, eth: _resEth });
          //console.log(this.web3.utils.fromWei(resEth ,'ether'));
          console.log(_resEth);
        });
      }
    });
  }

  // ไม่รู้ทำไมเหมือนกัน
  componentWillMount() {
    // console.log(this.web3);
    // if(this.web3 && this.web3.isConnected()) {
    //   this.setState({isConnected: true});
    // }
  }
  componentDidMount() {
    this.getTodos();
  }

  handleCheckAll() {
    // เอาไว้ถาม Panot อีกที
    //this.web3.eth.getBalance(this.state.account).then(console.log);
    this.web3.eth.getBalance(this.state.account).then(test => {
      console.log(this.web3.utils.fromWei(test, "ether"));
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome to Ether Barcarrat</h1>
        <Card
          title={
            this.state.isConnected
              ? "Connected to Ethereum Network"
              : "Not Connected"
          }
          style={{ width: 350, margin: "auto" }}
        >
          <Form className="login-form">
            <Form.Item>
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Ether Wallet"
                value={this.state.account}
                onChange={this.handleChange}
              />
            </Form.Item>
            <Form.Item>
              <Input
                prefix={
                  <Icon
                    type="credit-card"
                    style={{ color: "rgba(0,0,0,.25)" }}
                  />
                }
                placeholder="Amount (eth)"
                value={this.state.eth}
                onChange={this.handleChangePassword}
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                onClick={this.handleOnClick}
                style={{ width: 90, margin: "auto" }}
              >
                Host
              </Button>
            </Form.Item>
            <hr />
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                style={{
                  width: 90,
                  margin: "auto",
                  backgroundColor: "#eb2f96",
                  borderColor: "#eb2f96"
                }}
              >
                Client
              </Button>
            </Form.Item>
          </Form>
        </Card>
        {/* <br />
        {this.state.isConnected
          ? "Connected to Ethereum Network"
          : "Not Connected"}
        <p>
          {this.state.isConnected
            ? "Your account is " + this.state.account
            : "Please login though metamask"}{" "}
        </p> */}
        {/* ดักอีกทีว่่า Conditional Rendering */}
      </div>
    );
  }
}
export default Home;
