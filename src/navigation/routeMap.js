// @flow
import HomeScreen from '../screens/Home/HomeScreen';
import AboutScreen from '../screens/About/AboutScreen';
import ProjectScreen from '../screens/Projects/ProjectScreen';

const routeMap = {
  Home: {
    component: HomeScreen,
    path: '/',
    exact: true
  },
  About: {
    component: AboutScreen,
    path: '/about'
  },
  Projects: {
    component: ProjectScreen,
    path: '/projects/:name?',
    exact: true
  }
};

export default routeMap;
