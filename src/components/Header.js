import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component{
  render(){
    return (
      <header>
      	<h1><Link to ={'/'}>ā café</Link></h1>
        <Link to={'/about'}>Our Roots</Link>
        <Link to={'/menu'}>Menu</Link>
        <Link to={'/contact'}>Contact</Link>
        <Link to={'/'}>Follow</Link>
      </header>
    )
  }
}

export default Header