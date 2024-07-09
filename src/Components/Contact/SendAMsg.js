// import bgVideo from "./bgVideo.mp4";
// import "animate.css";
import "./SendAMsg.css";
import React ,{ useRef }from 'react';
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
// import {useForm} from 'react-hook-form';

export const SendAMsg = () => {
  const form = useRef();

	const sendEmail = (e) => {
	  e.preventDefault();
  
	  emailjs
		.sendForm('service_rgnoocv', 'template_deuoujx', form.current, {
		  publicKey: 'mzx4wsWnJQ18NbxVl',
		})
		.then(
		  () => {
			// console.log('SUCCESS!');
      toast.success("sucessfully sent to IOT SOlutions!");
		  },
		  (error) => {
			console.log('FAILED...', error);
      toast.error("not sent. try again!");
		  },
		);
	};


  return (
    <>

    
      <div className='contact'>
      <div id="contact-container">
  <h1 className="contact-h1">&bull; Send Us A Message &bull;</h1>
  <div class="underline">
  </div>

  <form ref={form} onSubmit={sendEmail} id="contact_form">
    <div class="name">
      
      <input type="text" placeholder="Name" name="name" id="name_input" className="input-text-contact" required/>
    </div>
    <div class="email">
      
      <input type="email" placeholder="Email" name="email" id="email_input" className="input-email-contact" required/>
    </div>
    <div class="telephone">
      
      <input type="text" placeholder="Mobile number" name="telephone" id="telephone_input" className="input-text-contact" required/>
    </div>
    <div class="subject">
      
      <input type="text" placeholder="Subject" name="subject" id="subject" className="input-text-contact" required/>
    </div>
    <div class="message">
     
      <textarea name="message" placeholder="I'd like to chat about" id="message_input" cols="30" rows="5" required></textarea>
    </div>
    <div class="submit">
      <input type="submit" value="Send Message" id="form_button" />
    </div>
  </form>
</div>
      </div>
    </>
  );
};
export default SendAMsg;
