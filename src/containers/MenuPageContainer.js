import React, {Component} from 'react'
import Clearfix from 'react-clearfix';
import MenuTop from '../components/MenuTop';
import DrinkMenu from '../components/DrinkMenu'
import FoodImages from '../components/FoodImages'

class MenuPageContainer extends Component {
  render() {
    return (
    	<div>
    		<MenuTop />
            <DrinkMenu />
            <Clearfix />
            <FoodImages />
    		
    	</div>

    );
  }
}

export default MenuPageContainer