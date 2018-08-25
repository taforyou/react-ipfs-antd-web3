import React, { Component } from "react";
import Web3 from "web3";
import { Form, Icon, Input, Button, Card } from "antd";

class SimpleContract extends Component {
  constructor(props) {
    super(props);
    this.state = {
    
    };
    this.web3 = new Web3(Web3.givenProvider);
  }

  // ไม่รู้ทำไมเหมือนกัน
  componentWillMount() {
    
  }
  componentDidMount() {
    
  }

  render() {
    return (
      <div className="App">
        <p>SimpleContract</p>
      </div>
    );
  }
}
export default SimpleContract;
