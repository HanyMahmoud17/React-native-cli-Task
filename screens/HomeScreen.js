import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomeScreen = ({navigation}) => {
function addDetailsHandler(){
  navigation.navigate('propertyDetails')
}
  return (
    <View styles={styles.screen}>

    <Button title='Add Details' onPress={addDetailsHandler}/>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  screen:{
marginHorizontal:30,
marginVertical:30
  }
})