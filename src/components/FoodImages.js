import React, { Component } from 'react';
import muffin from '../images/muffin.jpg';
import soup from '../images/soup.jpg';
import pastries from '../images/pastries.jpg';
import tomatoes from '../images/tomatoes.jpg';

class FoodImages extends Component {
  render() {
    return (
	    <section id='food-wrapper'>
	        <div id='food1-img' > 
    		    <img className="img-responsive" id='tomatoes' src={tomatoes} alt="tomatoes"/>
    		</div>
    		<div id='food2-img' > 
    		    <img className="img-responsive" id='muffin' src={muffin} alt="muffin"/>
    		</div>
    		<div id='food3-img' > 
    		    <img className="img-responsive" id='soup' src={soup} alt="soup"/>
    		</div>
            <div id='food4-img' > 
                <img className="img-responsive" id='pastries' src={pastries} alt="pastries"/>
            </div>
    	</section>
    );
  }
}

export default FoodImages;