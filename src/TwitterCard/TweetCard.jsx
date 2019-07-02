import React from "react";
import { Avatar, Card, CardBody } from "@cwds/components";
import "./TwiiterStyles.css";
import LikesCounter from "./LikesCounter";

class TweetCard extends React.Component {
  render() {
    return (
      <div>
        <Card>
          <CardBody>
            <div className="container logos">
              <div className="row">
                <div className="col-sm logo">
                  <Avatar
                    imgUrl="https://pbs.twimg.com/profile_images/1008726624320118784/rKY9KsBd_normal.jpg"
                    alt="Beardy McBeardFace"
                    size="lg"
                  />
                </div>
                <div
                  className="col-sm"
                  style={{ position: "absolute", left: "71px" }}
                >
                  Karthik Sista
                </div>
                <div className="col-sm" style={{ left: "50px" }}>
                  <img
                    src="https://pbs.twimg.com/profile_images/1008726624320118784/rKY9KsBd_normal.jpg"
                    alt="Beardy McBeardFace"
                    style={{ width: "1.25em" }}
                  />
                </div>
              </div>
              <div className="col-sm" style={{ left: "42px", top: "-22px" }}>
                @karthiksista{" "}
              </div>
            </div>
            <div className="container content">
              <div className="row">
                <div className="col-sm ">
                  Connect & discover: The Twitter story in 1:40
                  http://youtu.be/15u2G-L07x8
                </div>
              </div>
            </div>
            <div className="container likes">
              <div className="row">
                <div className="col-sm ">
                  <LikesCounter />
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default TweetCard;
