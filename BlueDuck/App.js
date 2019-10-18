import React from 'react';
import { StyleSheet, Button, TouchableOpacity, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to Blue Duck</Text>
      <TouchableOpacity style={styles.button}>
          <Text style={styles.buttontext}>Button2</Text>  
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#143952',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 20, 
    color: 'white',
  },
  button: {
    backgroundColor: '#2c8c99',
    borderRadius: 10,
    borderColor: '#FFFFFF',
    padding: 8
  },
  buttontext: {
    fontSize: 20,
    color:'#FFF',
    fontFamily: 'notoserif'
  }
});
