import React, { Component } from 'react';
import tea from '../images/tea.jpg';
import avocado from '../images/avo.jpg';
import salad from '../images/salad.jpg';
import sandwich from '../images/sandio.jpg';


class HomepageMenu extends Component {
  render() {
    return (
	    <section id='menu-wrapper'>
	        <div id='gal1' className='column'> 
    		    <img className="img-responsive" id='tea' src={tea} alt='image of coffee'/>
    		</div>
    		<div id='gal2' className='column'> 
    		    <img className="img-responsive" id='salad' src={salad} alt='image of coffee'/>
    		</div>
    		<div id='gal3' className='column'> 
    		    <img className="img-responsive" id='avocado' src={avocado} alt='image of coffee'/>
    		</div>
            <div id='gal4' > 
                <img className="img-responsive" id='about-image' src={sandwich} alt='image of coffee'/>
            </div>
            <div id='gal5' className='column'> 
                <img className="img-responsive" id='tea' src={tea} alt='image of coffee'/>
            </div>
            <div id='gal6' className='column'> 
                <img className="img-responsive" id='salad' src={salad} alt='image of coffee'/>
            </div>
            <div id='gal7' className='column'> 
                <img className="img-responsive" id='avocado' src={avocado} alt='image of coffee'/>
            </div>
            <div id='gal8' > 
                <img className="img-responsive" id='about-image' src={sandwich} alt='image of coffee'/>
            </div>
            <div id='gal9' className='column'> 
                <img className="img-responsive" id='tea' src={tea} alt='image of coffee'/>
            </div>
            <div id='gal10' className='column'> 
                <img className="img-responsive" id='salad' src={salad} alt='image of coffee'/>
            </div>
            <div id='gal11' className='column'> 
                <img className="img-responsive" id='avocado' src={avocado} alt='image of coffee'/>
            </div>
            <div id='gal12' > 
                <img className="img-responsive" id='about-image' src={sandwich} alt='image of coffee'/>
            </div>
    	</section>

    );
  }
}

export default HomepageMenu