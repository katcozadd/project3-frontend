import React, { Component } from 'react';


class ContactForm extends Component {
  render() {
    return (
    	<div >
    		<h3 id="contact">CONTACT</h3>
    		<p>Drop us a line...</p>
	    	<section id="contact-form">
				<form>
				  <div className="row">
				    <div className="six columns">
				      <label htmlFor="emailInput">Your email
				      <input className="u-full-width" type="email" placeholder="test@mailbox.com" id="exampleEmailInput"/>
				      </label>
				    </div>
				    <div className="six columns">
				      <label htmlFor="recipientInput">Reason for contacting
				      <select className="u-full-width" id="exampleRecipientInput">
				        <option value="Option 1">Questions</option>
				        <option value="Option 2">Admiration</option>
				        <option value="Option 3">Career Opporunities</option>
				        <option value="Option 3">Other</option>
				      </select>
				      </label>
				    </div>
				  </div>
				  <label htmlFor="message">Message
				  <textarea className="u-full-width" placeholder="ex. Hi there, we visited your cafe..." id="exampleMessage"></textarea>
				  <input  type="submit" value="Submit"/>
				  </label>
				</form>
			</section>
		</div>
    );
  }
}

export default ContactForm;