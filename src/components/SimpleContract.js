import React, { Component } from "react";
import Web3 from "web3";
import { Form, Icon, Input, Button, Card } from "antd";
import { Link } from "react-router-dom";

class SimpleContract extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contractAddress: "0x1cE946B3f26E27DF21984bc1A4EF6011BEDFb170",
      balance : 0,
      mycontract: null
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
    this._getBalance();
  }


  _getBalance() {
    // เอามาจากตัวอย่างที่คุณเนยทำ
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
    
    var myContract = new this.web3.eth.Contract(abi, this.state.contractAddress);
    myContract.methods.getBalance().call().then(_balance => {
      this.setState({ balance : _balance});
    });
    this.setState({mycontract: myContract});
  }

  // function setBalance() {
  //  
  //   newBalance = parseInt(document.getElementById("newBalance").value);
  //   SimpleContract.setBalance(newBalance, function(error, result) {
  //       if (error)
  //       return;
  //       addStatusLine("");
  //       addStatusLine("calling setBalance(" + newBalance + ")");
  //       txHash = result;
  //       addStatusLine("TxHash = <a href='https://kovan.etherscan.io/tx/" + result + "' target='_blank'>" + result + "</a>");
  //   });
  // }
  _setBalance() {
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

    //const _amount = new Big
    //var _value = this.web3.utils.toBN('200000000000000000000001');

    // var myContract = new this.web3.eth.Contract(abi, this.state.contractAddress);
    // ต้องแบบนี้นะ SET ได้แล้ว
    this.state.mycontract.methods.setBalance(9999).send({from: this.props.location.state})
    //this.state.mycontract.setBalance(1234000000000000000000).send({from: this.state.contractAddress})
    // .on("receipt", (res) => {
    //   console.log(res);
    // }).catch(err => {
    //   console.log(err);
    // })
  }

  render() {
    return (
      <div className="App">
        <p>SimpleContract</p>
        <p>ทดสอบการส่งค่าผ่าน props เฉยๆ ไม่เกี่ยวแมวอะไรเลย</p>
        <p>{this.props.location.state}</p>
        <Card title={"SimpleContract"} style={{ width: 350, margin: "auto" }}>
          <Form className="login-form">
            <Form.Item>
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Current Balance ="
                value={this.state.balance}
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
                onClick={() => this._setBalance()}
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
