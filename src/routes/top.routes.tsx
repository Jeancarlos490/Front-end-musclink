import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Treino from "../pages/Timer";
import TrainingSelection from "../pages/TrainingSelection";
import Historico from "../pages/Historico";
import SavedWorkouts from "../pages/SavedWorkouts";

const TopTab = createMaterialTopTabNavigator();

export default function TopTabs() {
    return (
        <TopTab.Navigator
        screenOptions={{tabBarStyle:{marginTop:50, height:50}}}>
            
            <TopTab.Screen
                name="TrainingSelection"
                component={TrainingSelection} />

            <TopTab.Screen
                name="SavedWorkouts"
                component={SavedWorkouts} />

            <TopTab.Screen
                name="Historico"
                component={Historico} />
        </TopTab.Navigator>
    );
}
