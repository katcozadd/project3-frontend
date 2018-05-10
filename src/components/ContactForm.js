import React, { Component } from 'react';
import fire from "../fire";



class ContactForm extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    	contact: {
	    		data: []
	    	},
	    	newEmail: "",
	    	newSubject: "",
	    	newMessage: ""

	    }
	    this.onFormSubmit = this.onFormSubmit.bind(this)
		this.onEmailChange = this.onEmailChange.bind(this)
		this.onSubjectChange = this.onSubjectChange.bind(this)
		this.onMessageChange = this.onMessageChange.bind(this)
    };

    // componentWillMount() {
    // 	this.firebaseRef = new Firebase("https://acafeboise.firebaseio.com");
    // }

    componentDidMount() {
    	console.log(fire)
    }

	onFormSubmit(event) {
		event.preventDefault()
		this.firebaseRef.push({
			newEmail : this.state.newEmail,
			newSubject : this.state.newSubject,
			newMessage : this.state.newMessage
		});
		this.setState({
			newEmail: "",
			newSubject: "",
			newMessage: ""
		});

	}

	onEmailChange(event){
		this.setState({
			contact : this.state.contact,
			newEmail : event.target.value,
			newSubject : this.state.newSubject,
			newMessage : this.state.newMessage
		})
		console.log(event.target.value)

	}

	onSubjectChange(event) {
		this.setState({
			contact : this.state.contact,
			newEmail : this.state.newEmail,
			newSubject : event.target.value,
			newMessage : this.state.newMessage
		});
	}

	onMessageChange(event){
		this.setState({
			contact : this.state.contact,
			newEmail : this.state.newEmail,
			newSubject : this.state.newSubject,
			newMessage : event.target.value
		})
	}
  render() {
    return (
    	<div >
    		<h3 id="contact">CONTACT</h3>
    		<p>Drop us a line...</p>
	    	<section id="contact-form">
				<form onSubmit={this.onFormSubmit}>
				  <div className="row">
				    <div className="six columns">
				      <label htmlFor="emailInput">Your email
				      <input 
				      name = "email"
				      className="u-full-width" 
				      type="email" 
				      placeholder="ex. yourname@mailbox.com" 
				      id="emailInput" 
				      onChange={this.onEmailChange}  
				      value={this.state.newEmail} />
				      </label>
				    </div>
				    <div className="six columns">
				      <label htmlFor="recipientInput">Subject
				      <br />
				      <input 
				      name="subject"
				      className="u-full-width" 
				      type='text'
				      placeholder='ex. Admiration'
				      id="recipientInput"
				      value={this.state.newSubject} 
				      onChange={this.onSubjectChange} />
				      </label>
				    </div>
				  </div>
				  <label htmlFor="message">Message
				  <textarea 
				  name= "message"
				  className="u-full-width" 
				  placeholder="ex. Hi there, we visited your cafe..." 
				  id="exampleMessage" 
				  onChange={this.onMessageChange} 
				  value={this.state.newMessage}></textarea>
				  <input  type="submit" value="Submit"/>
				  </label>
				</form>
			</section>
		</div>
    );
  }
}

export default ContactForm;


    		