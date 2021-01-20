import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialIcons } from '@expo/vector-icons'

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

function FavoritesNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Favorites" component={ FavoritesScreen } />
        </Stack.Navigator>
    )
}

function AppNavigator() {
    return (
        <NavigationContainer>
            <Tabs.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: () => {
                        let iconName;
                        if(route.name==="Home") {
                            iconName="home"
                        } else if (route.name==="Favorites") {
                            iconName="favorite"
                        }

                        return <MaterialIcons name={ iconName } size={ 24 } />

                    }
                })}
            >
                <Tabs.Screen name="Home" component={ HomeNavigator } />
                <Tabs.Screen name="Favorites" component={ FavoritesNavigator } />
            </Tabs.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;