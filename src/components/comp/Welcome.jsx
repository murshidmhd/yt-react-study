import { Component } from "react";

class welcome extends Component {
  render() {
    const { name, heroName } = this.props;
    return (
      <h1>
        {" "}
        welcome {name} sdfdf {heroName}
      </h1>
    );
  }
}

export default welcome;
