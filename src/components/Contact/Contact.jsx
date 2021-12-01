import "./Contact.css"

export function Contact(){
  return <section className="contact">
      <div className="contact-title" data-heading="T">
        CONTACT
      </div>
      <div className="contact-container">
        <div className="name-container">
          <div className="h1-p-container">
            <h1>Name</h1>
            <p>Michi Laurentiu</p>
          </div>
        </div>
        <div className="address-container">
          <div className="h1-p-container">
            <h1>Address</h1>
            <p>Sibiu, ROMANIA</p>
          </div>
        </div>
        <div className="email-container">
          <div className="h1-p-container">
            <h1>Email</h1>
            <p>michi.laurentiu@yahoo.com</p>
          </div>
        </div>
        <div className="phone-container">
          <div className="h1-p-container">
            <h1>Phone</h1>
           <p>+40 743041026</p>
          </div>
        </div>
     </div>
     <div className="column-right">
       <div className="name-input">
         <input type="text" placeholder="Name" required/>
       </div>

     </div>
     

   </section>
   
  
}
    