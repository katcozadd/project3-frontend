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
    			<h3 className="info">OUR ROOTS</h3>
    			<p className="info"> Founded on the belief that nothing brings people together like good
                food does. Ā café was established in the summer of 2018 by Ashley Syms, a 
                Boise local. After 12+ years of living in Colorado, Ashley decided it was time to pack up,
                 head home and chase her dreams of opening a café... </p>
				<Link to={'/about'} id="contactbtn">LEARN MORE</Link>
			</div>
    		<div id='gallery-container' className=''> 
    		    <Link to ="/gallery"><img className="img-responsive" id='about-image' src={galleryImage} alt='image of cafe'/></Link>
    			<br />
    			<h3 className="info">GALLERY</h3>
    			<p className="info"> Pictures often times speak louder than words. Check out our gallery of
                photos. From the countless amounts of "cafe taste test" meals made at home for friends and family, to the opening day of
                Ā Café, we have the moments captured for you...  </p>
				<Link to={'/gallery'} id="gallerybtn">LEARN MORE</Link>
    		</div>
    	</section>
    );
  }
}

export default CafeInfo;