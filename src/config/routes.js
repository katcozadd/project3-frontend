import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomepageContainer from '../containers/HomepageContainer';
import AboutPageContainer from '../containers/AboutPageContainer';
import MenuPageContainer from '../containers/MenuPageContainer';
import ContactPageContainer from '../containers/ContactPageContainer';
import GalleryContainer from '../containers/GalleryContainer';
import BlogContainer from '../containers/BlogContainer';



export default (
  <Switch>
    <Route exact path='/' component={ HomepageContainer }/>
    <Route path='/about' component={ AboutPageContainer }/>
    <Route path='/menu' component={ MenuPageContainer }/>
    <Route path='/contact' component={ ContactPageContainer }/>
    <Route path='/gallery' component={ GalleryContainer} />
    <Route path='/blog' component={ BlogContainer } />
    <Route path='/instagram' component={() => window.location = 'https://www.instagram.com/katcozadd'} />
    <Route path='/facebook' component={() => window.location = 'https://www.facebook.com/katcozaddphotos'} />
  </Switch>
)

