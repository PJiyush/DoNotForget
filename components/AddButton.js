import React from 'react'
import { Button, SafeAreaView, TouchableOpacity, View, Text, StyleSheet, Alert} from 'react-native'
import ToDo from './ToDo'


function AddButton() {
  return (
    <TouchableOpacity>
        <Text style={styles.appButtonText} > + </Text>
    </TouchableOpacity>
  )
}

export default AddButton

const styles = StyleSheet.create({
    
    appButtonText: {
      fontSize: 120,
      color: "#fff",
      borderRadius: 4,
      width: '20px',
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase",
        marginTop: -50,
    }
  });