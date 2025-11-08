import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../pages/login'
import Cadastro from '../pages/Cadastro'

export default function Routes() {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login'
            screenOptions={{
                headerShown:false
            }}>
                <Stack.Screen
                name="Login"
                component={Login}
                />

                <Stack.Screen
                name="Cadastro"
                component={Cadastro}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}