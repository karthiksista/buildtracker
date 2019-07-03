import React from "react";
import { Input, Progress } from "reactstrap";
import "./ProgressExample.css";

export default class ProgressExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      checked: false
    };
  }

  oncheck = () => {
    this.setState({ checked: true, value: this.state.value + 25 });
  };
  render() {
    return (
      <div>
        <Progress value={this.state.value}>{this.state.value}%</Progress>
        <div className="d-flex flex-column boxes">
          <div className="p-2">
            <Input type="checkbox" onClick={this.oncheck} /> 25
          </div>
          <div className="p-2">
            <Input type="checkbox" onClick={this.oncheck} /> 50
          </div>
          <div className="p-2">
            <Input type="checkbox" onClick={this.oncheck} /> 75
          </div>
          <div className="p-2">
            <Input type="checkbox" onClick={this.oncheck} /> 100 Yay!!!
          </div>
        </div>
      </div>
    );
  }
}
