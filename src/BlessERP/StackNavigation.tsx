import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import Home from '../screens/Home';
import PreCadastro from '../screens/PreCadastro';
import Clientes from '../screens/Clientes';


const StackNavigator = createStackNavigator();

const StackNavigation = () => {
    // const horizontalOptions = {
    //     cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    //     gestureDirection: 'horizontal' as any,
    // };

    // const invertedHorizontalOptions = {
    //     cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    //     gestureDirection: 'horizontal' as any,
    // };

    // const verticalOption = {
    //     cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
    //     gestureDirection: 'vertical-inverted' as any,
    // };

    return (
        <StackNavigator.Navigator
            initialRouteName="Login"
            screenOptions={{ headerShown: false }}>
            <StackNavigator.Screen
                name="Login"
                children={() => <Login />}
            />
            <StackNavigator.Screen
                name="Home"
                children={(props) => <Home props={props} />}
            />
            <StackNavigator.Screen
                name="PreCadastro"
                children={() => <PreCadastro />}
            />
            <StackNavigator.Screen
                name="Clientes"
                children={() => <Clientes />}
            />
        </StackNavigator.Navigator>
    );
};

export default StackNavigation;
