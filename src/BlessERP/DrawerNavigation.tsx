import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/Home";

const DrawerNavigation = () => {

    const Drawer = createDrawerNavigator();
    return (
        <Drawer.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false, // Hide the header for all screens in the drawer
            }}
        >
            {/* You can add other screens like Settings, Profile, etc. */}
            <Drawer.Screen name="Home" component={Home} />

        </Drawer.Navigator>
    )
}

export default DrawerNavigation