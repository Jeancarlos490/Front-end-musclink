import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homescreen from '../pages/Homescreen';
import Perfil from '../pages/Perfil';
import Ionicons from '@expo/vector-icons/Ionicons';
import { temas } from '../global/temas';
import TopTabs from './top.routes';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export default function Bottomtab() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false, tabBarStyle:{backgroundColor:temas.colors.cinza} }}
    >
      <Tab.Screen
        name="Home"
        component={Homescreen}
        options={{
          tabBarIcon: ({ }) => <Ionicons name="home"
            size={24}
            color={temas.colors.laranja} />
        }}
      />
      <Tab.Screen
        name="TopTabs"
        component={TopTabs}
        options={{
          tabBarIcon: ({ }) => <MaterialCommunityIcons name="arm-flex"
            size={24}
            color={temas.colors.laranja} />
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          tabBarIcon: ({ }) => <Ionicons name="person"
            size={24}
            color={temas.colors.laranja} />
        }}
      />
    </Tab.Navigator>
  );
}