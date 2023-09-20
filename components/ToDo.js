import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

function ToDo() {
  return (
    <View style={styles.container}>
        <Text>This is Piyush</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text:{
        color: '#101010',
    }
})

export default ToDo