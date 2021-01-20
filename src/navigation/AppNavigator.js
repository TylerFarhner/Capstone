import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import SpotsListScreen from '../screens/SpotsListScreen'
import SpotsDetailsScreen from '../screens/SpotsDetailsScreen'

const Stack = createStackNavigator();

function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="SpotsList" component={ SpotsListScreen } />
                <Stack.Screen name="SpotsDetails" component={ SpotsDetailsScreen } />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;