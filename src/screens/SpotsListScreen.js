import React, { useState } from 'react'
import { StyleSheet, View, ScrollView, Button, Text, TextInput } from 'react-native'
import { FloatingAction } from 'react-native-floating-action'

import Card from '../components/Card'

export default function SpotsListScreen(props) {

    const [ hammockSpot, setHammockSpot ] = useState('');
    const [ spotList, setSpotlist ] = useState([]);

    const addSpotList = () => {
        setSpotlist([ ...spotList, hammockSpot ])
        console.log(spotList)
    }

    return (
            <View style={ styles.container }>
                <ScrollView>
                    <Card navigation={ props.navigation } />
                    <View >
                        <View style={ styles.form }>
                        <TextInput 
                            placeholder="Enter Hammock Spot"
                            style={styles.textInput}
                            onChangeText={text => setHammockSpot(text)}
                            value={hammockSpot}
                        />
                        <Button 
                            title="Add Todo"
                            onPress={addSpotList}
                        />
                        </View>
                        <ScrollView>
                        {spotList.map(spot => <View key={spot} style={styles.hammockSpot}>
                            <Text>{spot}</Text>
                        </View>)}
                        </ScrollView>
                    </View>
                </ScrollView>
                <FloatingAction 
                    position="right"
                    animated={ false }
                    showBackground={ false }
                    onPressMain={() => props.navigation.navigate('AddSpot')}
                />
            </View>
            
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1
    },
    textInput: {
        padding: 10,
        borderColor: '#000000',
        marginBottom: 10,
        borderWidth: 1
    },
    todoItem: {
        marginTop: 10,
        padding: 20,
        backgroundColor: '#f2f2f2',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'gray'
    },
    form: {marginTop: 10}

})