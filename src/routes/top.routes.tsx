import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import TrainingSelection from "../pages/TrainingSelection";
import Historico from "../pages/Historico";
import SavedWorkouts from "../pages/SavedWorkouts";
import { temas } from "../global/temas";

const TopTab = createMaterialTopTabNavigator();

export default function TopTabs() {
    return (
        <TopTab.Navigator
            screenOptions={{ tabBarStyle: { marginTop: 50, height: 50, backgroundColor: temas.colors.cinza } }}>

            <TopTab.Screen
                name="Seleção de Treino"
                component={TrainingSelection}
                options={{
                    tabBarActiveTintColor: temas.colors.branco,
                }} />

            <TopTab.Screen
                name="Treinos Salvos"
                component={SavedWorkouts}
                options={{
                    tabBarActiveTintColor: temas.colors.branco,
                }} />

            <TopTab.Screen
                name="Historico"
                component={Historico}
                options={{
                    tabBarActiveTintColor: temas.colors.branco,
                }} />
        </TopTab.Navigator>
    );
}
