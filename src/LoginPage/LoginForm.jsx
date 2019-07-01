import React from "react";
import { Button, Card, Form, FormGroup, Label, Input } from "reactstrap";

import "./LoginForm.css";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      email: "",
      password: "",
      persons: [],
      isLoading: false
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
    // this.setState({ isLoading: true });
    // axios.get("https://jsonplaceholder.typicode.com/users").then(response => {
    //   const persons = response.data;
    this.setState({
      // persons,
      isLoading: false
      // email: this.myRef.current.value
    });
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
          {this.state.isLoading ? this.state.persons : ""}
        </Card>
      </div>
    );
  }
}

export default LoginForm;
