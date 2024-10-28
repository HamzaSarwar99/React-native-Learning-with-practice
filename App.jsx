import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import First from './src/components/First'

const App = () => {
  return (
    <View>
      <Text style={{ fontSize: 24 }}>Hello am a mobile app developer</Text>
      <Button title='press me' />
      <First />
    </View>
    
  )
}

export default App

const styles = StyleSheet.create({})