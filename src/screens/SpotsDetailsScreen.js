import React from 'react'
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
// watch auto imports

export default function SpotDetailsScreen() {
    return (
        <ScrollView>
            <View style={ styles.container }>
                <View style={ styles.heading }>
                    <Text style={ styles.title }>Hammock Spot!</Text>
                </View>
                <View style={ styles.group }>
                    {/* label */}
                    <Text style={ styles.label }>Name: </Text>
                    {/* value */}
                    <Text style={ styles.value }>Cool Name</Text>
                </View>
                <View style={ styles.group }>
                    {/* label */}
                    <Text style={ styles.label }>Location: </Text>
                    {/* value */}
                    <Text style={ styles.value }>Unsure</Text>
                </View>
                <View style={ styles.group }>
                    {/* label */}
                    <Text style={ styles.label }>Description: </Text>
                    {/* value */}
                    <Text style={ styles.value }>I'm not sure im having a good time.</Text>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        marginVertical: 20
    },

    heading: {
        marginHorizontal: 20,
        marginBottom: 10
    },

    title: {
        fontSize: 24
    },

    image: {
        width: '100%',
        height: 200
    },

    group: {
        marginHorizontal: 20,
        marginVertical: 10,
        flexDirection: 'row'
    },

    label: {
        fontSize: 18
    },

    value: {
        fontSize: 18,
        fontWeight: 'bold',
        flexShrink: 1
    }
    
})