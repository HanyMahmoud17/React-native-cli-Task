import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomeScreen = ({navigation}) => {
function addDetailsHandler(){
  navigation.navigate('propertyDetails')
}
  return (
    <Button title='Add Details' onPress={addDetailsHandler}/>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})