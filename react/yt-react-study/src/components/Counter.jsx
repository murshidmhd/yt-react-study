import { Component } from "react";
import { Prev } from "react-bootstrap/esm/PageItem";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  increment() {
    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   () => {
    //     console.log("callback value", this.state.count);
    //   }
    // );

    this.setState((prevState)=> ({
        count:prevState.count +1                             
    }))
    console.log(this.state.count);
  }
  incrementFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }
  render() {
    return (
      <div>
        count - {this.state.count}
        <button onClick={() => this.incrementFive()}>inc </button>
      </div>
    );
  }
}

export default Counter;
