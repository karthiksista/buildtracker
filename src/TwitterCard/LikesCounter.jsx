import React from "react";

import { Button } from "@cwds/components";

export default class LikesCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0
    };
  }

  likesCount = () => {
    this.setState({ likes: this.state.likes + 1 });
  };
  render() {
    return (
      <div>
        <Button onClick={this.likesCount}>+{this.state.likes}</Button>
      </div>
    );
  }
}
