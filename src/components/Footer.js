import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../images/logo-white.png';

class Footer extends Component{
  render(){
    return (
      <footer className="section group">
        <div className="col span_1_of_3">
          <h6>HOURS</h6>
            <ul>
              <li>MONDAY-FRIDAY
              <br />
              7am-8pm</li>
              <li>SATURDAY & SUNDAY 
              <br />
              7am-6pm</li>
            </ul>
        </div>
        <div className="col span_1_of_3">
          <h6>LOCATION</h6>
            <ul>
              <li>1001 W MAIN ST.</li>
              <li>BOISE, IDAHO</li>
              <li>83702</li>
            </ul>
        </div>
        <div className="col span_1_of_3">
          <img className="img-responsive" id='footerlogo' src={logo} alt="logo"/>
        </div>
      </footer>
    )
  }
}



export default Footer