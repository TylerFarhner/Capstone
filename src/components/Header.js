import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Header() {
    return (
        <View style={ styles.header }>
            <Text style={ styles.title }>HangLoose</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#486b00',
        padding: 15,
        borderBottomColor: '#2e4600',
        borderBottomWidth: 1
    },
    title: {
        marginTop: 40,
        textAlign: 'center',
        fontSize: 20,
        color: '#ffffff' 
    }
})