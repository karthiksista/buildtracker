import React from "react";
import { Button, Card, Form, FormGroup, Label, Input } from "reactstrap";

import "./LoginForm.css";
import Layout from "../News/Layout";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      email: "",
      password: "",
      persons: [],
      show: false
    };
    // this.emailInputRef = React.createRef();
  }

  onEmailChange = e => {
    this.setState({ email: e.target.value });
  };

  onPasswordChange = e => {
    this.setState({ password: e.target.value });
  };
  focusTextInput = () => {
    // Explicitly focus the text input using the raw DOM API
    // Note: we're accessing "current" to get the DOM node
    this.myRef.current.focus();
  };

  componentDidMount = () => {
    console.log(this.myRef);
    this.myRef.current.focus();
  };

  onSubmit = () => {
    this.setState({ show: true });
  };

  render() {
    return (
      <div className="loginBox">
        <Card>
          <Form>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                value={this.state.email}
                onChange={this.onEmailChange}
                innerRef={this.myRef}
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                value={this.state.password}
                onChange={this.onPasswordChange}
              />
            </FormGroup>
            <Button color="primary" onClick={this.onSubmit}>
              Submit
            </Button>
          </Form>
        </Card>
        {<div>{this.state.show ? <Layout /> : "Meh!!! Fix me :/"}</div>}
      </div>
    );
  }
}

export default LoginForm;
