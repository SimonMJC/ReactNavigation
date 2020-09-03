import { createAppContainer, createSwitchNavigator, } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// import { createDrawerNavigator} from 'react-navigation-drawer'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen'
// import DrawerBar from './DrawerBar'

const AuthStack = createStackNavigator(
    {
        LoginScreen: {screen: LoginScreen},
        HomeScreen: {screen: HomeScreen}
    },
    {
        initialRouteName: 'LoginScreen'
    }
);

// // 탭 네비게이터
// const TabNavigator = createBottomTabNavigator({
//     Home: HomeStack,
//     Info: InfoStack,
//     News: NewsStack,
//     Menu: MenuStack,
//   });
  
//   // 드로어 네비게이터
//   const AppDrawerNavigator = createDrawerNavigator(
//     {
//       TabNavigator,
//     },
//     {
//           //option
//       contentComponent: DrawerBar,
//       drawerBackgroundColor: 'transparent',
//       overlayColor: 'rgba(0,0,0,0.5)',
//     },
//   );

// 최상단 네비게이터
const AppNavigator = createSwitchNavigator(
    {
        Auth: AuthStack
    },
    {
        initialRouteName: 'Auth',
    }
);

export default createAppContainer(AppNavigator);