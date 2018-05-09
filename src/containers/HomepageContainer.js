import React, {Component} from 'react'
import Clearfix from 'react-clearfix';
import Welcome from '../components/Welcome';
import CafeInfo from '../components/CafeInfo'
import Quote from '../components/Quote';
import HomepageMenu from '../components/HomepageMenu';
import Footer from '../components/Footer';


class HomepageContainer extends Component {
	render() {
		return (
			<div>
				<Welcome />
				<CafeInfo />
				<Clearfix />
				<Quote />
				<HomepageMenu />
				<Footer />
			</div>
   
    	);
  	}
}

export default HomepageContainer 