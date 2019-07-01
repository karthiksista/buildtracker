import React from "react";

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

class NewsCards extends React.Component {
  render() {
    return (
      <div style={{ paddingTop: "10px" }}>
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
