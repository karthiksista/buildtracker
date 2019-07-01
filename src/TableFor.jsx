import React from "react";

class TableFor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: 1
    };
    this.increaseCount = this.increaseCount.bind(this);
  }

  increaseCount = () => {
    this.setState({
      persons: this.state.persons + 1
    });
  };

  decreaseCount = () => {
    this.setState({
      persons: this.state.persons - 1
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.increaseCount}>click to increase</button>
        <button onClick={this.decreaseCount}>click to decrease</button>
        {this.state.persons}
      </div>
    );
  }
}

export default TableFor;
