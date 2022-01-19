import "./Contact.css"

import address from "./photos/address.png"
import phone from "./photos/phone.png"
import email from "./photos/email.png"

export function Contact(){
  return <section id="section-contact">
      <div className="contact-title" data-heading="T">
        CONTACT
      </div>
      <div className="contentAll">
        <div className="firstRow">

          <div className="contentContact">
            <img src={address} alt="" />
            <p style={{color: '#ffcc00'}}>Address:</p>
            <p>Tudor Vladimirescu Street</p>
          </div>

          <div className="contentContact">
            <img src={phone} alt="" />
            <p style={{color: '#ffcc00'}}>Phone:</p>
            <p>0743041026</p>
          </div>

          <div className="contentContact">
            <img src={email} alt="" />
            <p style={{color: '#ffcc00'}}>Email:</p>
            <p>michi.laurentiu@yahoo.com</p>
          </div>

        </div>
        <div className="secondRow">
          <form action="#">
          <div className="form">

            <div className="form-group">
              <input type="text" className="formControl" placeholder="Name" required />
            </div>

            <div className="form-group">
              <input type="text"  className="formControl" placeholder="Email" required/>
            </div>

            <div className="form-group">
              <input type="text"  className="formControl" placeholder="Subject" required/>
            </div>

            <div className="form-group">
              <textarea name="" id="" cols="30" rows="8" className="textArea" className="formControl" placeholder="Message" required></textarea>
            </div>
            <div className="form-group">
              {/* <input type="submit" value={"Send Message"} className="button" /> */}
              <button type="submit" className="button">Send Message</button>
            </div>

          </div>
          </form>
        </div>

      </div>

  </section>
   
  
}
    