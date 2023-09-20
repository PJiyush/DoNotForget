import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, TextComponent, View } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import AddButton from './AddButton';
import ToDo from './ToDo';

function HomePage() {
  const [show, setShow] = useState(true);
  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: 'column',
        },
      ]}>
    <LinearGradient colors={['#10002b','#240046','#3c096c']} style={styles.container}>
      {/* <Text>Hello</Text> */}
      {console.log(show)}
      <View style={styles.prompt}>
        {show ? <ToDo/> : null}
      </View >
      <View style={styles.btn}>
        <AddButton/>
      </View>
    </LinearGradient>
    </View>
  );
}



export default HomePage



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btn:{
    marginTop:630,
    borderColor: '#fff',
    borderWidth: 1,
    height: 80,
  },
  prompt:{
    marginTop: 20,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#fff',
    height:20
  }
});
