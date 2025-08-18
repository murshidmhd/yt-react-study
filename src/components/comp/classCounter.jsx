import { Component } from "react";

class ClickCounter extends Component {
  constructor(pro) {
    super(pro);
    this.state = {
      count: 0,
    };
  }
  inc = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <>
        <button onClick={this.inc}> add {this.state.count}</button>
      </>
    );
  }
}

export default ClickCounter;
