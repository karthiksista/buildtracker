import React from "react";
import { Button, Card, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";

import "./LoginForm.css";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      persons: [],
      isLoading: false
    };
    // this.emailInputRef = React.createRef();
  }

  // x = () => {
  //   <div>
  //     {this.state.persons.map(person => (
  //       <div key={person.id}>{person.name} </div>
  //     ))}
  //     ;
  //   </div>;
  // };
  onEmailChange = e => {
    this.setState({ email: e.target.value });
  };

  onPasswordChange = e => {
    this.setState({ password: e.target.value });
  };

  onSubmit = () => {
    this.setState({ isLoading: true });
    axios.get("https://jsonplaceholder.typicode.com/users").then(response => {
      const persons = response.data;
      this.setState({
        persons,
        isLoading: false
      });
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
