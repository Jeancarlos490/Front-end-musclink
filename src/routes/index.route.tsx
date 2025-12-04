import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../pages/login'
import Cadastro from '../pages/Cadastro'
import Recuperacao from '../pages/Recuperação';
import Bottomtab from './bottom.routes';
import Esqueleto from '../pages/Homescreen/Perfisextras/Esqueleto';
import EvilLyn from '../pages/Homescreen/Perfisextras/EvilLyn';
import Escamoso from '../pages/Homescreen/Perfisextras/Escamoso';
import Simiano from '../pages/Homescreen/Perfisextras/Simiano';
import TopTabs from './top.routes';
import WorkoutRunner from '../pages/WorkoutRunner';

export default function Routes() {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login'
                screenOptions={{
                    headerShown: false
                }}>
                <Stack.Screen
                    name="Login"
                    component={Login}
                />
                <Stack.Screen
                    name="Cadastro"
                    component={Cadastro}
                />
                <Stack.Screen
                    name="Recuperacao"
                    component={Recuperacao}
                />
                <Stack.Screen
                    name="Homescreen"
                    component={Bottomtab}
                />

                <Stack.Screen
                    name="Escamoso"
                    component={Escamoso}
                />

                <Stack.Screen
                    name="Esqueleto"
                    component={Esqueleto}
                />

                <Stack.Screen
                    name="EvilLyn"
                    component={EvilLyn}
                />

                <Stack.Screen
                    name="Simiano"
                    component={Simiano}
                />

                <Stack.Screen
                    name="TopTabs"
                    component={TopTabs}
                />

                <Stack.Screen
                    name="WorkoutRunner"
                    component={WorkoutRunner}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
}
