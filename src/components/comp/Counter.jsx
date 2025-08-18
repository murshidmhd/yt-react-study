// import { Component } from "react";
// import { Prev } from "react-bootstrap/esm/PageItem";

// import { useState } from "react";
import App from "../App";

// class Counter extends Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0,
//     };
//   }

//   increment() {
//     // this.setState(
//     //   {
//     //     count: this.state.count + 1,
//     //   },
//     //   () => {
//     //     console.log("callback value", this.state.count);
//     //   }
//     // );

//     this.setState((prevState)=> ({
//         count:prevState.count +1
//     }))
//     console.log(this.state.count);
//   }
//   incrementFive() {
//     this.increment();
//     this.increment();
//     this.increment();
//     this.increment();
//     this.increment();
//   }
//   render() {
//     return (
//       <div>
//         count - {this.state.count}
//         <button onClick={() => this.incrementFive()}>inc </button>
//       </div>
//     );
//   }
// }

// export default Counter;

function Counter(pro) {
  // const [count, setCout] = useState(0);
  // function addOne() {
  //   setCout((pr) => pr + 1);
  // }

  // function addTwo() {
  //   setCout((pr) => pr + 2);
  // }
  return (
    <>
      {/* <h1> count {count}</h1> */}
      {/* <button onClick={addOne}>add 1 </button>
      <button onClick={addTwo}>add 2 </button> */}
      <button onClick={pro.add}>add </button>
    </>
  );
}

export default Counter;
