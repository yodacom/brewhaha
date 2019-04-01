import React, { Component } from "react";
import { Container, Box, Heading, Button, Text, TextField } from "gestalt";
import ToastMessage from "./ToastMessage";

class Signup extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    toast: false,
    toastMessage: ""
  };

  handleChange = ({ event, value }) => {
    event.persist();
    this.setState({ [event.target.name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.isFormEmpty(this.state)) {
      this.showToast("Fill in all fields");
      return;
    }
    console.log("submitted");
  };

  isFormEmpty = ({ username, password, email }) => {
    return !username || !email || !password;
  };

  showToast = toastMessage => {
    this.setState({ toast: true, toastMessage });
    setTimeout(() => this.setState({ toast: false, toastMessage: "" }), 5000);
  };

  render() {
    const { toastMessage, toast } = this.state;

    return (
      <Container>
        <Box
          dangerouslySetInlineStyle={{
            __style: {
              backgroundColor: "#ebe2da"
            }
          }}
          margin={4}
          padding={4}
          shape="rounded"
          display="flex"
          justifyContent="center"
        >
          {/* Sign up form */}
          <form
            style={{
              display: "inlineBlock",
              textAlign: "center",
              maxWidth: "450"
            }}
            onSubmit={this.handleSubmit}
          >
            {/* Signup form header */}

            <Box
              marginBottom={2}
              display="flex"
              direction="column"
              alignItems="center"
            >
              <Heading color="midnight">Let's get Started</Heading>
              <Text italic color="orchid">
                Sign up to order Brews!
              </Text>
            </Box>

            {/* User name input */}
            <TextField
              id="username"
              type="text"
              name="username"
              placeholder="Username"
              onChange={this.handleChange}
            />

            {/* User Email input  */}
            <TextField
              id="email"
              type="text"
              name="email"
              placeholder="Email Address"
              onChange={this.handleChange}
            />

            {/* Password input */}
            <TextField
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              onChange={this.handleChange}
            />
            <Button inline color="blue" type="submit" text="Submit" />
          </form>
        </Box>
        <ToastMessage show={toast} message={toastMessage} />
      </Container>
    );
  }
}
export default Signup;
