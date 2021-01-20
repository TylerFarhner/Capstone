import React from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { MaterialIcons } from '@expo/vector-icons'

import SpotsListScreen from '../screens/SpotsListScreen'
import SpotsDetailsScreen from '../screens/SpotsDetailsScreen'
import FavoritesScreen from '../screens/FavoritesScreen'
import AboutScreen from '../screens/AboutScreen'
import ContactScreen from '../screens/ContactScreen'
import AddSpotScreen from '../screens/AddSpotScreen'

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const HeaderLeft = () => {
    // now have access to all props from react navigation
    const navigation = useNavigation();

    return (
        <MaterialIcons name="menu" size={24} onPress={() => { navigation.openDrawer() }} />
    );
}

function HomeNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerLeft: () => <HeaderLeft />
            }}
        >
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
            <Stack.Screen 
                name="AddSpot"
                component={ AddSpotScreen }
            />
        </Stack.Navigator>
    )
}

function FavoritesNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerLeft: () => <HeaderLeft />
            }}
        >
            <Stack.Screen name="Favorites" component={ FavoritesScreen } />
        </Stack.Navigator>
    )
}

function AboutNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerLeft: () => <HeaderLeft />
            }}
        >
            <Stack.Screen name="About" component={ AboutScreen } />
        </Stack.Navigator>
    )
}

function ContactNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerLeft: () => <HeaderLeft />
            }}
        >
            <Stack.Screen name="Contact" component={ ContactScreen } />
        </Stack.Navigator>
    )
}

function TabsNavigator() {
    return (
        <Tabs.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: () => {
                        let iconName;
                        if(route.name==="Home") {
                            iconName="home"
                        } else if (route.name==="Favorites") {
                            iconName='favorite'
                        }

                        return <MaterialIcons name={ iconName } size={24} />

                    }
                })}
            >
                {/* Passing in HomeNavigator (above) as a screen to this Home Tab (below) */}
                <Tabs.Screen name="Home" component={ HomeNavigator } />
                <Tabs.Screen name="Favorites" component={ FavoritesNavigator } />
            </Tabs.Navigator>
    )
}

function AppNavigator() {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Home" component={ TabsNavigator } />
                <Drawer.Screen name="About" component={ AboutNavigator } />
                <Drawer.Screen name="Contact" component={ ContactNavigator } />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;