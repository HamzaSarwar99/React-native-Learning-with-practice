import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import First from './src/components/First'
import JSX from './src/components/JSX'
import Onpress from './src/components/Onpress'

const App = () => {
  const name = 'hamza'
  return (
    <View>
      {/* <Text style={{ fontSize: 24 }}>Hello am a mobile app developer</Text>
      <Button title='press me' />
      <First /> */}
      {/* <Text>My name is {name}</Text> */}
      {/* <JSX/> */}
      <Onpress />
    </View>
    
  )
}

export default App

const styles = StyleSheet.create({})