import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function ContactScreen() {
    return (
        <View>
            <Text style={styles.text}>Concerned about this project? Send me an email at no@thankyou.com</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {fontSize: 25}
})