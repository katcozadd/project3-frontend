import React, {Component} from 'react'
import ContactForm from '../components/ContactForm';
import ContactPageFooter from '../components/ContactPageFooter';
import firebase from 'firebase';

class ContactPageContainer extends Component {
	render() {
	    return (
	      <h2>
	        <ContactForm db={firebase}/>
	        <ContactPageFooter />
	      </h2>
	    );
  }
}

export default ContactPageContainer