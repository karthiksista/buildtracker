import React from "react";
import { css } from "@emotion/core";
// First way to import
import { PacmanLoader } from "react-spinners";
// Another way to import
// import ClipLoader from "react-spinners/ClipLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
  render() {
    return (
      <div className="sweet-loading">
        <PacmanLoader
          css={override}
          sizeUnit={"px"}
          size={25}
          color={"#123abc"}
          loading={this.props.isLoading}
        />
      </div>
    );
  }
}

export default Loading;
