import "./Contact.css"

export function Contact(){
  return <section id="section-contact">
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
     <div className="column right">
      <form action="#">
        <div className="fields">
          <div className="field name">
            <input type="text" placeholder="Name" required/>
          </div>
          <div className="field email">
            <input type="email" placeholder="email" required/>
          </div>
        </div>
        <div className="field">
          <input type="text" placeholder="Subject" required/>
        </div>
        <div className="field textarea">
          <textarea  cols="30" rows="10" placeholder="Describe project.." required></textarea>
          <div className="button">
            <button type="submit">Send message</button>
          </div>
        </div>
                       
      </form>
    </div>
  </section>
   
  
}
    