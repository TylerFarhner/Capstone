import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

export default function Card(props) {
    return (
        <TouchableOpacity onPress={() => props.navigation.navigate('SpotsDetails')}>
            <View style={ styles.card }>
                <View style={ styles.titleWrapper }>
                    <Text style={ styles.title }>Sweet Hammock Spot</Text>
                    <MaterialIcons 
                        name="favorite-border" 
                        color="#A2c523"
                        size={24}
                    />
                </View>
                <View style={ styles.locationWrapper }>
                    <Text style={ styles.location }>Somewhere cool</Text>
                </View>
                <View style={ styles.descriptionWrapper }>
                    <Text style={ styles.description }>
                        Oh my goodness we have so much to share with you about this cool spot we found.
                        heres all this random filler text while I scramble to get this done and deployed
                        before it's my turn to present!
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    
    card: {
        backgroundColor: '#39998E',
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