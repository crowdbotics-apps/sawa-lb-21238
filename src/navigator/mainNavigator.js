import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial132351Navigator from '../features/Tutorial132351/navigator';
import NotificationList132323Navigator from '../features/NotificationList132323/navigator';
import Settings132322Navigator from '../features/Settings132322/navigator';
import Settings132314Navigator from '../features/Settings132314/navigator';
import UserProfile132312Navigator from '../features/UserProfile132312/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Tutorial132351: { screen: Tutorial132351Navigator },
NotificationList132323: { screen: NotificationList132323Navigator },
Settings132322: { screen: Settings132322Navigator },
Settings132314: { screen: Settings132314Navigator },
UserProfile132312: { screen: UserProfile132312Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
