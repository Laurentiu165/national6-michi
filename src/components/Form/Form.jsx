import { Component } from "react";
import { FormField } from "../FormField/FormField";
import { FormTextField } from "../FormTextField/FormTextField";
import { SendButton } from "../SendButton/SendButton";
import "./Form.css"

export class Form extends Component{
  render(){
    let className = "contact-form-field"
    if(this.props.isActive) className += "contact-form-field--empty"
    return(
      <div className="contact-form">
        <FormField label = "FIRST NAME" className={className}/>
        <FormField label = "LAST NAME"/>
        <FormField label = "EMAIL"/>
        <FormTextField label = "MESSAGE"/>
        <SendButton />
      </div>
    )
  }
}