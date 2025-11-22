import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homescreen from '../pages/Homescreen';
import Perfil from '../pages/Perfil';
import Chat from '../pages/Chat';

const Tab = createBottomTabNavigator();

export default function Bottomtab() {
  return (
    <Tab.Navigator
    screenOptions={{headerShown:false}}
    >
      <Tab.Screen
        name="Home"
        component={Homescreen}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
      />
      <Tab.Screen
        name="Perfil"
        component={Perfil}
      />
    </Tab.Navigator>
  );
}