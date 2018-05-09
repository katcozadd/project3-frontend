import React, { Component } from 'react';
import tea from '../images/tea.jpg';
import avocado from '../images/avo.jpg';
import salad from '../images/salad.jpg';
import sandwich from '../images/sandio.jpg';


class HomepageMenu extends Component {
  render() {
    return (
	    <section id='menu-wrapper'>
	        <div id='img3-container' className='column'> 
    		    <img className="img-responsive" id='about-image' src={tea} alt='image of coffee'/>
    		</div>
    		<div id='img1-container' className='column'> 
    		    <img className="img-responsive" id='about-image' src={salad} alt='image of coffee'/>
    		</div>
    		<div id='img2-container' className='column'> 
    		    <img className="img-responsive" id='about-image' src={avocado} alt='image of coffee'/>
    		</div>
    		<div id='img4-container' className='column'> 
    		    <img className="img-responsive" id='about-image' src={sandwich} alt='image of coffee'/>
    		</div>
    	</section>

    );
  }
}

export default HomepageMenu

