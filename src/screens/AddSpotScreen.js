import React from 'react'
import { View, Text, StyleSheet, ScrollView, TextInput, Button } from 'react-native'

export default function AddSpotScreen() {
    return (
        <ScrollView>
            <View style={ styles.form }>
                <View style={ styles.formGroup }>
                    <Text style={ styles.label }>Title</Text>
                    <TextInput
                        style={ styles.input }
                    />
                </View>
                <View style={ styles.formGroup }>
                    <Text style={ styles.label }>location</Text>
                    <TextInput
                        style={ styles.input }
                    />
                </View>
                <View style={ styles.formGroup }>
                    <Text style={ styles.label }>description</Text>
                    <TextInput
                        style={ styles.input }
                    />
                </View>

                <View style={ styles.buttonContainer }>
                    <Button 
                        title="Add Spot"
                    />
                </View>

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({

    form: {
        margin: 20,
        backgroundColor: '#ffffff',
        padding: 20,
        borderRadius: 10
    },

    formGroup: {
        width: '100%'
    },

    label: {
        marginVertical: 10
    },

    input: {
        paddingHorizontal: 2,
        paddingVertical: 8,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    },
    
    buttonContainer: {
        marginTop: 20
    }

})