import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../images/logo-black.png';

class Header extends Component{
  render(){
    return (
      <header>
      	<Link to ="/"><img className="img-responsive" id='logo' src={logo} alt="logo"/></Link>
      	<br />
        <Link to={'/about'}>OUR ROOTS</Link>
        <Link to={'/menu'}>MENU</Link>
        <Link to={'/contact'}>CONTACT</Link>
        <div class="dropdown">
          <a class="dropbtn">FOLLOW</a>
            <div class="dropdown-content">
              <Link to={'/https://www.instagram.com/katcozadd'}>INSTAGRAM</Link>
              <Link to={'/https://www.facebook.com/katcozaddphotos'}>FACEBOOK</Link>
              <Link to={'/blog'}>BLOG</Link>
          </div>
        </div>
      </header>
    )
  }
}

export default Header