import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../images/logo-white.png';

class Footer extends Component{
  render(){
    return (
      <footer>
        <div id="column1">
          <h6>HOURS</h6>
          <ul>
            <li>MONDAY <span>7am-8pm</span></li>
            <li>TUESDAY <span>7am-8pm</span></li>
            <li>WEDNESDAY <span>7am-8pm</span></li>
            <li>THURSDAY <span>7am-8pm</span></li>
            <li>FRIDAY <span>7am-8pm</span></li>
            <li>SATURDAY <span>7am-6pm</span></li>
            <li>SUNDAY <span>7am-5pm</span></li>
          </ul>
        </div>
        <div id="column2">
          <h6>LOCATION</h6>
          <ul>
            <li>1001 W Main St.</li>
            <li>Boise, Idaho</li>
            <li>83702</li>
          </ul>
          
        </div>
        <div id="column3">
          <img className="img-responsive" id='logo' src={logo} alt="logo"/>
        </div>
        <div id="column4">
          <Link to={'/about'}>OUR ROOTS</Link>
          <Link to={'/menu'}>MENU</Link>
          <Link to={'/contact'}>CONTACT</Link>
          <Link to={'/'}>FOLLOW</Link>
        </div>
      </footer>
    )
  }
}

export default Footer