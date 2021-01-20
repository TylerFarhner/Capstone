import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

export default function Card() {
    return (
        <View style={ styles.card }>
            <View style={ styles.titleWrapper }>
                <Text style={ styles.title }>Spot Name</Text>
                <MaterialIcons 
                    name="favorite-border" 
                    color="#A2c523"
                    size={24}
                />
            </View>
            <View style={ styles.locationWrapper }>
                <Text style={ styles.location }>location</Text>
            </View>
            <View style={ styles.descriptionWrapper }>
                <Text style={ styles.description }>description</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    
    card: {
        backgroundColor: '#ffffff',
        height: 300,
        marginTop: 20,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5
    },

    titleWrapper: {
        height: '10%',
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10
    },

    locationWrapper: {
        height: '10%',
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10
    },

    descriptionWrapper: {
        paddingHorizontal: 15
    },

    title: {
        fontSize: 20
    },

    location: {
        fontSize: 15,
        marginTop: 10
    },

    description: {
        marginTop: 10
    }

})