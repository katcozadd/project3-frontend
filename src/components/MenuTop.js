import React, { Component } from 'react';
import latte from '../images/latte.jpg';
import drink from '../images/drink.jpg';
import cuppa from '../images/cuppa.jpg';

class MenuTop extends Component {
  render() {
    return (
	    <section id='photo-wrapper'>
	        <div id='menu1-img' > 
    		    <img className="img-responsive" id='latte' src={latte} alt="latte"/>
    		</div>
    		<div id='menu2-img' > 
    		    <img className="img-responsive" id='drink' src={drink} alt="tea"/>
    		</div>
    		<div id='menu3-img' > 
    		    <img className="img-responsive" id='cuppa' src={cuppa} alt="coffee"/>
    		</div>
    	</section>
    );
  }
}

export default MenuTop;

