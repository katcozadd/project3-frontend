import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import aboutImage from '../images/coffee.jpg';
import galleryImage from '../images/seating.jpg';

class CafeInfo extends Component {
  render() {
    return (
    	<section id='column-wrapper'>
    		<div id='about-container' className=''>
    			<Link to ="/about"><img className="img-responsive" id='about-image' src={aboutImage} alt='image of coffee'/></Link>
    			<br />
    			<h3 className="info-text">OUR ROOTS</h3>
    			<p className="info-text"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
				Ad eum pariatur nisi error tempore, exercitationem ratione expedita assumenda, 
				temporibus similique animi. Deserunt praesentium repellat labore quidem! </p>
				<Link to={'/about'} id="contactbtn">LEARN MORE</Link>
			</div>
    		<div id='gallery-container' className=''> 
    		    <Link to ="/gallery"><img className="img-responsive" id='about-image' src={galleryImage} alt='image of cafe'/></Link>
    			<br />
    			<h3 className="info-text">GALLERY</h3>
    			<p className="info-text"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
				Ad eum pariatur nisi error tempore, exercitationem ratione expedita assumenda, 
				temporibus similique animi. Deserunt praesentium repellat labore quidem! </p>
				<Link to={'/gallery'} id="gallerybtn">LEARN MORE</Link>
    		</div>
    	</section>
    );
  }
}

export default CafeInfo;