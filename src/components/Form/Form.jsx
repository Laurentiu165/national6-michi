import { Component } from "react";
import { FormField } from "../FormField/FormField";
import { FormTextField } from "../FormTextField/FormTextField";
import { SendButton } from "../SendButton/SendButton";
import "./Form.css"

export class Form extends Component{
  state = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    invalidFirstName: false,
    invalidLastName: false,
    invalidEmail: false,
    invalidMessage: false,
  }

  handleFirstNameChange = (event) => {
    this.setState({ firstName: event.target.value, isInvalidFN: false });
  };

  handleLastNameChange = (event) => {
    this.setState({ lastName: event.target.value, isInvalidLN: false });
  };

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value, isInvalidEmail: false });
  };

  handleMessageChange = (event) => {
    this.setState({ message: event.target.value, isInvalidMessage: false });
  };

  handleAllInputs = () =>{
    if (this.state.firstName === "") {
      this.setState({ invalidFirstName: true });
    } else {
      this.setState({ invalidFirstName: false });
    }

    if (this.state.lastName === "") {
      this.setState({ invalidLastName: true });
    } else {
      this.setState({ invalidLastName: false });
    }

    if (this.state.email === "") {
      this.setState({ invalidEmail: true });
    } else {
      this.setState({ invalidEmail: false });
    }

    if (this.state.message === "") {
      this.setState({ invalidMessage: true });
    } else {
      this.setState({ invalidMessage: false });
    }

  }

  render(){
    return(
      <div className="contact-form">
        <FormField 
          label = "FIRST NAME"
          style = {{border: this.state.invalidFirstName ? "1px solid red": undefined}}
          onChange={this.handleFirstNameChange} />
        <FormField 
         label = "LAST NAME"
         style = {{border: this.state.invalidLastName ? "1px solid red": undefined}}
          onChange={this.handleLastNameChange}/>
        <FormField 
          label = "EMAIL"
          style = {{border: this.state.invalidEmail ? "1px solid red": undefined}}
          onChange={this.handleEmailChange}/>
        <FormTextField 
          label = "MESSAGE"
          style = {{border: this.state.invalidMessage ? "1px solid red": undefined}}
          onChange={this.handleMessageChange}/>
        <SendButton onClick={this.handleAllInputs} />
      </div>
    )
  }
}