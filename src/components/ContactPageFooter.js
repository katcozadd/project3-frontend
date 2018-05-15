import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../images/logo-white.png';

class ContactPageFooter extends Component{
  render(){
    return (
      <div>
        <footer className="section group">
          <div className="col span_1_of_3">
            <h6 className="contact-title">HOURS</h6>
              <ul className="contact-ul">
                <li>MONDAY-FRIDAY
                <br />
                7am-8pm</li>
                <li>SATURDAY & SUNDAY 
                <br />
                7am-6pm</li>
              </ul>
          </div>
          <div className="col span_1_of_3">
            <h6 className="contact-title">LOCATION</h6>
              <ul className="contact-ul">
                <li>1001 W MAIN ST.</li>
                <li>BOISE, IDAHO</li>
                <li>83702</li>
              </ul>
          </div>
          <div className="col span_1_of_3">
            <img className="img-responsive" id='contfooterlogo' src={logo} alt="logo"/>
          </div>
        </footer>
        <div id="footer-links">
            <Link to={'/about'}>OUR ROOTS</Link>
            <Link to={'/menu'}>MENU</Link>
            <Link to={'/contact'}>CONTACT</Link>
            <Link to={'/gallery'}>GALLERY</Link>
        </div>
      </div>
    )
  }
}



export default ContactPageFooter