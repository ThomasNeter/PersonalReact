import React, { useState } from 'react';
import { Axios, db } from '../firebase/firebaseConfig'

const Contact = data => {

   if (data) {
      var phone = data.phone
      var email = data.email
      var message = data.contactmessage
   }

   const [formData, setFormData] = useState({})

   const updateInput = e => {
      setFormData({
         ...formData,
         [e.target.name]: e.target.value,
      })
   }

   const handleSubmit = event => {
      event.preventDefault()
      sendEmail()
      setFormData({
         name: '',
         email: '',
         subject: '',
         message: ''
      })
   }
   const sendEmail = () => {
      Axios.post(
         'https://us-central1-personal-website-67706.cloudfunctions.net/submit',
         formData
      )
         .then(res => {
            db.collection('Users').add({
               name: formData.name,
               email: formData.email,
               subject: formData.subject,
               message: formData.message,
               time: new Date(),
            })
         })
         .catch(error => {
            console.log(error)
         })
   }

   return (
      <section id="contact">
         <div className="row section-head">
            <div className="two columns header-col">
               <h1><span>Get In Touch.</span></h1>
            </div>
            <div className="ten columns">
               <p className="lead">{message}</p>
            </div>
         </div>

         <div className="row">
            <div className="eight columns">
               <form onSubmit={handleSubmit} id="contactForm" name="contactForm">
                  <fieldset>
                     <div>
                        <label htmlFor="contactName">Name <span className="required">*</span></label>
                        <input type="text" size="35" id="contactName" name="name" onChange={updateInput} value={formData.name || ''} />
                     </div>
                     <div>
                        <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                        <input type="text" size="35" id="contactEmail" name="email" onChange={updateInput} value={formData.email || ''} />
                     </div>
                     <div>
                        <label htmlFor="contactSubject">Subject</label>
                        <input type="text" size="35" id="contactSubject" name="subject" onChange={updateInput} value={formData.subject || ''} />
                     </div>
                     <div>
                        <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                        <textarea cols="50" rows="15" id="contactMessage" name="message" onChange={updateInput} value={formData.message || ''}></textarea>
                     </div>
                     <div>
                        <button type="submit" className="submit">Submit</button>
                        <span id="image-loader">
                           <img alt="" src="images/loader.gif" />
                        </span>
                     </div>
                  </fieldset>
               </form>

               <div id="message-warning"> Error </div>
               <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!<br />
               </div>
            </div>

            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">
                  <h4>Contact Info</h4>
                  <p className="address">
                     {phone} <br />
                     <span>{email}</span>
                  </p>
               </div>
            </aside>
         </div>
      </section>
   );

}

export default Contact
