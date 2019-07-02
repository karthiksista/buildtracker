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
  Placeholder,
  JumpNav
} from "@cwds/components";
import "@cwds/core/scss/styles.scss";
import News from "./News";
import TweetCard from "../TwitterCard/TweetCard";

const routes = [
  { title: "World Headlines", path: "#world-headlines" },
  { title: "Information", path: "#information" },
  { title: "Status", path: "#status" }
];
const breadcrumb = (
  <Breadcrumb>
    <BreadcrumbItem>
      <a href="/">Dashboard</a>
    </BreadcrumbItem>
    <BreadcrumbItem>
      <a href="/">News</a>
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
              <Card>
                <TweetCard />
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle id="status">Status</CardTitle>
                </CardHeader>
                <CardBody>
                  <Placeholder grid cols={2} rows={5} />
                </CardBody>
              </Card>
            </div>
          }
        />
      </CaresProvider>
    );
  }
}
