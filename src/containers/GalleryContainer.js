import React, {Component} from 'react'
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';

class GalleryContainer extends Component {
  render() {
    return (
    	<div>
    		<Gallery />
    		<Footer/>
    	</div>

    );
  }
}

export default GalleryContainer