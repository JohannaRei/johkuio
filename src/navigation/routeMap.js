import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';
import ProjectScreen from '../screens/ProjectScreen';

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
