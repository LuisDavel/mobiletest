import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import Home from '../screens/home';

// import * as S from './styles'
import { tabBarStyles } from './style-tabBar';
import theme from '../theme';
import { createStackNavigator } from '@react-navigation/stack';
import { handleGoBack } from './handle-goback';
import PartsEquipament from '../screens/partsEquipament';
import Login from '../screens/login';

export function AppRoutes() {
  const Tab = createBottomTabNavigator();
  const LogoutComponent = () => {
    return null;
  }

  const { Navigator, Screen } = createStackNavigator();

  function MainTab() {
    return (
      <Tab.Navigator
        sceneContainerStyle={{
          backgroundColor: 'white',
          padding: 15,
        }}
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          headerShadowVisible: false,
          tabBarStyle: {
            ...tabBarStyles}
        }}
      >
        <Tab.Screen
          name="home"
          component={Home}
          options={{
            tabBarIcon: ({focused}) => <FontAwesome name='home'  size={focused ? 30 : 25} color={ focused ? 'white' : theme.colors.white['700']}  /> 
          }}
        />
         <Tab.Screen name="backHistory" component={LogoutComponent} options={({navigation}) => ({
          tabBarIcon: ({focused}) => <FontAwesome name='history' onPress={() => handleGoBack(navigation)  } size={focused ? 30 : 25} color={ focused ? 'white' : theme.colors.white['700']}  /> 
        })} />
      </Tab.Navigator>
    );
  }
  
  return (
      <Navigator 
        initialRouteName="login" 
        screenOptions={{
          headerShown: false,
          headerShadowVisible: false,
        }}
      >
        <Screen
          name="main"
          component={MainTab}
        />
        <Screen
          name="login"
          component={Login}
        />
        <Screen
          name="appointment"
          component={PartsEquipament}
          options={{
            headerTitle: 'Peça adiantada',
            headerShown: true,
          }}
        />
      
      </Navigator>
  );
}