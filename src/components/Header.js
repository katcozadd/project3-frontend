import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../images/logo-black.png';

class Header extends Component{
  render(){
    return (
      <header>
      	<img className="img-responsive" id='logo' src={logo} alt="logo"/>
      	<br />
        <Link to={'/about'}>OUR ROOTS</Link>
        <Link to={'/menu'}>MENU</Link>
        <Link to={'/contact'}>CONTACT</Link>
        <Link to={'/'}>FOLLOW</Link>
      </header>
    )
  }
}

export default Header