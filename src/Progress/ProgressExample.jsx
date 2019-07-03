import React from "react";
import { Label, Input, Progress } from "reactstrap";

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
        <Label check>
          <Progress value={this.state.value}>{this.state.value}%</Progress>
          <Input type="checkbox" onClick={this.oncheck} /> Check me out
          <Input type="checkbox" onClick={this.oncheck} /> Check me out
          <Input type="checkbox" onClick={this.oncheck} /> Check me out
          <Input type="checkbox" onClick={this.oncheck} /> Check me out
        </Label>
      </div>
    );
  }
}
