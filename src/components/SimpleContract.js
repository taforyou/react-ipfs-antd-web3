import React, { Component } from "react";
import Web3 from "web3";
import { Form, Icon, Input, Button, Card } from "antd";
import { Link } from "react-router-dom";
import { callbackify } from "util";

class SimpleContract extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contractAddress: "0x1cE946B3f26E27DF21984bc1A4EF6011BEDFb170"
    };
    this.web3 = new Web3(Web3.givenProvider);
  }

  // ไม่รู้ทำไมเหมือนกัน
  componentWillMount() {}
  componentDidMount() {
    //console.log(this.props);
    //this.tempTestSetContractAddress();
    //this.web3 = new web3.eth.Contract();
    //console.log(this.web3.eth.Contract());
    //console.log(this.web3);
    this.tempTest2();
  }

  tempTestSetContractAddress() {
    //var _contractAddress = 'aabbcc';
    //this.setState({ contractAddress: _contractAddress});
  }

  tempTest2() {
    // var myContract = new web3.eth.Contract([...], '0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe', {
    //   from: '0x1234567890123456789012345678901234567891', // default from address
    //   gasPrice: '20000000000' // default gas price in wei, 20 gwei in this case
    // });
    var abi = [
      {
        constant: false,
        inputs: [
          {
            name: "newBalance",
            type: "uint256"
          }
        ],
        name: "setBalance",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        inputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "constructor"
      },
      {
        constant: true,
        inputs: [],
        name: "getBalance",
        outputs: [
          {
            name: "",
            type: "uint256"
          }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
      }
    ];
    //var myContract = new web3.eth.contract(abi);
    //var MyContract = web3.eth.contract(abiArray);
    //var MyContract = this.web3.eth.contract(abi);
    var contract = new this.web3.eth.Contract(abi, this.state.contractAddress);
    contract.methods.getBalance().call().then(console.log);
    // using the promise
    //contract.methods.getBalance()
  }

  render() {
    return (
      <div className="App">
        <p>SimpleContract</p>
        <p>{this.props.location.state}</p>
        <Card title={"SimpleContract"} style={{ width: 350, margin: "auto" }}>
          <Form className="login-form">
            <Form.Item>
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Current Balance ="
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
                onClick={() => this.handleCheckAll()}
                style={{ width: 180, margin: "auto" }}
              >
                Set New Balance
              </Button>
            </Form.Item>
            <hr />
            <Link to="/">Back to home</Link>
          </Form>
        </Card>
      </div>
    );
  }
}
export default SimpleContract;
