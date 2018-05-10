import React, {Component} from 'react'
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

class ContactPageContainer extends Component {
  render() {
    return (
      <h2>
        <ContactForm />
        <Footer />
      </h2>
    );
  }
}

export default ContactPageContainer