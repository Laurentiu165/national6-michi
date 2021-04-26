import { Component } from "react";
import { FormField } from "../FormField/FormField";
import { FormTextField } from "../FormTextField/FormTextField";
import { SendButton } from "../SendButton/SendButton";
import "./Form.css"

export class Form extends Component{
  render(){
    return(
      <div className="contact-form">
        <FormField label = "FIRST NAME"/>
        <FormField label = "LAST NAME"/>
        <FormField label = "EMAIL"/>
        <FormTextField label = "MESSAGE"/>
        <SendButton/>
      </div>
    )
  }
}