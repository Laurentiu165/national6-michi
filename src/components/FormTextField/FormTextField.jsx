export function FormTextField(props){
  return(
    <div className="contact-form-field">
      <p>{props.label}</p>
      <textarea name="" id="" cols="30" rows="10"></textarea>
    </div>
  )
}