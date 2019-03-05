import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';
import ProjectScreen from '../screens/ProjectScreen';

const HomeStack = createStackNavigator(
  {
    Home: { screen: HomeScreen, navigationOptions: { title: 'Home' } }
  },
  { headerMode: 'none' }
);

const AboutStack = createStackNavigator(
  {
    About: { screen: AboutScreen, navigationOptions: { title: 'About' } }
  },
  { headerMode: 'none' }
);

const ProjectStack = createStackNavigator(
  {
    Projects: { screen: ProjectScreen, navigationOptions: { title: 'Project' } }
  },
  { headerMode: 'none' }
);

const TabNav = createBottomTabNavigator({
  Home: HomeStack,
  About: AboutStack,
  Projects: ProjectStack
});

const RootStack = createStackNavigator(
  {
    Main: TabNav
  },
  {
    headerMode: 'none'
  }
);

export default RootStack;
