import { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      messsage: " Welcome visiter",
    };
  }
  changeMessages() {
    this.setState({
      messsage: "thankyou for subscribe",
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.messsage} </h1>
        <button
          onClick={() => {
            this.changeMessages();
          }}
        >
          {" "}
          Subscribe
        </button>
      </div>
    );
  }
}

export default Message;
