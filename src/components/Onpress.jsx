import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import JSX from './JSX'

const Onpress = () => {
    const getName = () => {
        console.warn('Hamza')
    }
  return (
    <View>
          <Text>Onpress</Text>
          <Button title='press me' onPress={getName} />
        
    </View>
  )
}

export default Onpress

const styles = StyleSheet.create({})