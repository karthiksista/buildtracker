import React from "react";

import { Card, CardText, CardBody, CardTitle } from "reactstrap";

class NewsCards extends React.Component {
  render() {
    return (
      <div style={{ paddingTop: "10px", paddingBottom: "10px" }}>
        <Card>
          <CardBody>
            <CardTitle> NEWS </CardTitle>
            <CardText> {this.props.value}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default NewsCards;
