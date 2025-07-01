import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import StackNavigation from './StackNavigation';

export default () => (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFCC03" }}>
        <Provider store={store}>
            <NavigationContainer>
                <StackNavigation />
            </NavigationContainer>
        </Provider>
    </SafeAreaView>
);
