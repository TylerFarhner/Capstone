import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function FavoritesScreen() {
    return (
        <View>
            <Text style={styles.text}>
                Welcome to your favorites! It looks like the devs 
                fell asleep at the wheel and forgot to wire this up
                - please check back soon.
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20
    }
})