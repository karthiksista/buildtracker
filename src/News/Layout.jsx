import React, { Component } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  CaresProvider,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Page,
  JumpNav
} from "@cwds/components";
import "@cwds/core/scss/styles.scss";
import News from "./News";
import TweetCard from "../TwitterCard/TweetCard";

const routes = [
  { title: "World Headlines", path: "#world-headlines" },
  { title: "Tweeet", path: "#Tweet" }
];
const breadcrumb = (
  <Breadcrumb>
    <BreadcrumbItem>
      <a href="/">CheeseHeads</a>
    </BreadcrumbItem>
    <BreadcrumbItem>
      <a href="/">Concepts</a>
    </BreadcrumbItem>
  </Breadcrumb>
);

export default class Layout extends Component {
  render() {
    return (
      <CaresProvider>
        <Page
          Breadcrumb={breadcrumb}
          title="News Dashboard"
          layout="jumpnav"
          sidenav={<JumpNav routes={routes} />}
          main={
            <div>
              <Card>
                <CardHeader>
                  <CardTitle id="world-headlines">
                    World Top Headlines
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <News />
                </CardBody>
              </Card>
              <Card id="Tweet">
                <TweetCard />
              </Card>
            </div>
          }
        />
      </CaresProvider>
    );
  }
}
