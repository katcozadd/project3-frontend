import React, {Component} from 'react'
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import firebase from 'firebase';

class ContactPageContainer extends Component {
	render() {
	    return (
	      <h2>
	        <ContactForm db={firebase}/>
	        <Footer />
	      </h2>
	    );
  }
}

export default ContactPageContainer