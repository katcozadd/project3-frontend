import React, { Component } from 'react';
import aboutCover from '../images/counter.jpg';

class About extends Component {
  render() {
    return (
    	<section id="about-section">
	    	<div className='cover-image'>
		    	<img className="img-responsive" id='about-cover' src={aboutCover} alt="logo"/>
		    </div>
		    <div id='about-text'>
		    	<h1>Founded on the belief that...</h1>
				<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
				Ad eum pariatur nisi error tempore, exercitationem ratione expedita assumenda, 
				temporibus similique animi. Deserunt praesentium repellat labore quidem! 
				Voluptas eligendi commodi obcaecati. Lorem ipsum dolor sit amet, consectetur 
				adipisicing elit. Ad eum pariatur nisi error tempore, exercitationem ratione expedita assumenda, 
				temporibus similique animi. Deserunt praesentium repellat labore quidem! 
				Voluptas eligendi commodi obcaecati. </p>
				<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
				Ad eum pariatur nisi error tempore, exercitationem ratione expedita assumenda, 
				temporibus similique animi. Deserunt praesentium repellat labore quidem! </p>
				<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
				Ad eum pariatur nisi error tempore, exercitationem ratione expedita assumenda, 
				temporibus similique animi. Deserunt praesentium repellat labore quidem! 
				Voluptas eligendi commodi obcaecati. Lorem ipsum dolor sit amet, consectetur 
				adipisicing elit. Ad eum pariatur nisi error tempore, exercitationem ratione expedita assumenda, 
				temporibus similique animi. Deserunt praesentium repellat labore quidem! 
				Voluptas eligendi commodi obcaecati. </p>
				<p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
				Ad eum pariatur nisi error tempore, exercitationem ratione expedita assumenda, 
				temporibus similique animi. Deserunt praesentium repellat labore quidem! 
				Voluptas eligendi commodi obcaecati. Lorem ipsum dolor sit amet, consectetur 
				adipisicing elit. Ad eum pariatur nisi error tempore, exercitationem ratione expedita assumenda, 
				temporibus similique animi. Deserunt praesentium repellat labore quidem! 
				Voluptas eligendi commodi obcaecati. </p>
			</div>
		</section>
    );
  }
}

export default About;