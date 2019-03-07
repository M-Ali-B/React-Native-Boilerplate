import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      
      
      
      <View style={styles.container}>
        <Text style={styles.heading}>Boiler Plate</Text>
      <Text>Hello World!</Text>
        <Text>I am learning React Native .</Text>
        <Text>It has soo much bugs </Text>
        <Text>But I accept the challenge </Text>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading:{
    fontSize: 20,
    fontWeight:'bold',
    color:'blue'
  },
});
