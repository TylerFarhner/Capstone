import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import SpotsListScreen from '../screens/SpotsListScreen'
import SpotsDetailsScreen from '../screens/SpotsDetailsScreen'
import FavoritesScreen from '../screens/FavoritesScreen'

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

function HomeNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="SpotsList" 
                component={ SpotsListScreen }
                options={{ title: 'HangLoose' }}
            />
            <Stack.Screen 
                name="SpotsDetails"
                component={ SpotsDetailsScreen } 
                options={{ title: 'Spot Details' }}
            />
        </Stack.Navigator>
    )
}

function AppNavigator() {
    return (
        <NavigationContainer>
            <Tabs.Navigator>
                <Tabs.Screen name="Home" component={ HomeNavigator } />
                <Tabs.Screen name="Favorites" component={ FavoritesScreen } />
            </Tabs.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;