import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homescreen from '../pages/Homescreen';
import Perfil from '../pages/Perfil';
import Chat from '../pages/Chat';
import Ionicons from '@expo/vector-icons/Ionicons';
import { temas } from '../global/temas';
import Treino from '../pages/Timer';

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
        name="Treino"
        component={Treino}
        options={{
          tabBarIcon: ({ }) => <Ionicons name="chatbubble-ellipses"
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