import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Home from './src/pages/Home';
import Contact from './src/pages/Contact';
import CustomDrawer from './src/components/CustomDrawer';


const Routes = createAppContainer(
  createDrawerNavigator({
    Home,
    Contact
  }, {
    initialRouteName: "Home",
    contentComponent: CustomDrawer
  })
);

export default Routes;