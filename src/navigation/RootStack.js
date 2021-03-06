// @flow
import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from '../screens/Home/HomeScreen';
import AboutScreen from '../screens/About/AboutScreen';
import ProjectScreen from '../screens/Projects/ProjectScreen';
import Drawer from '../components/Drawer';

const RootStack = createDrawerNavigator(
  {
    Home: { screen: HomeScreen },
    About: { screen: AboutScreen },
    Projects: { screen: ProjectScreen }
  },
  {
    drawerWidth: 300,
    drawerBackgroundColor: 'yellow',
    drawerType: 'front',
    contentComponent: Drawer,
    contentOptions: {
      activeTintColor: 'orange',
      activeBackgroundColor: 'transparent',
      itemsContainerStyle: {
        marginLeft: 30,
        marginTop: 50
      },
      labelStyle: {
        fontSize: 30
      }
    }
  }
);

export default createAppContainer(RootStack);
