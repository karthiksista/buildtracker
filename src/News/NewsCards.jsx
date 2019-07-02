import React from "react";

class NewsCards extends React.Component {
  render() {
    return <div style={{ padding: "20px" }}>{this.props.value}</div>;
  }
}

export default NewsCards;
