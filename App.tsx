import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen'
import AddDetailsScreens from './screens/AddDetailsScreens'

const Stack=createNativeStackNavigator();
// const Stack = createStackNavigator();
const App = () => {
  return (
    <>
    <StatusBar barStyle={'light-content'}/>
   <NavigationContainer>
    <Stack.Navigator>
    {/* <Stack.Screen name='home' component={HomeScreen} options={{
        title:'Home'
      }}/> */}
      <Stack.Screen name='propertyDetails' component={AddDetailsScreens} options={{
        title:'Property Details',
        headerTitleAlign: 'center',
        }}/>
      
    </Stack.Navigator>
   </NavigationContainer>
    </>
  )
}

export default App

const styles = StyleSheet.create({})