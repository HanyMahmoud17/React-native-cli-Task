import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import AddDetailsScreens from './screens/AddDetailsScreens';
// redux persist
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';
// Redux
import {Provider} from 'react-redux';
import store from './store/redux/store';
import Ionicons from 'react-native-vector-icons/Ionicons';

// let persistor = persistStore(Store);

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <Provider store={store}>
        {/* <PersistGate loading={null} persistor={persistor}> */}
          <NavigationContainer>
            <Stack.Navigator>
              {/* <Stack.Screen name='home' component={HomeScreen} options={{
        title:'Home'
      }}/>  */}
              <Stack.Screen
                name="propertyDetails"
                component={AddDetailsScreens}
                options={{
                  title: 'Property Details',
                  headerTitleAlign: 'center',
                  headerLeft: () => (
                    <Ionicons
                      name="arrow-back" 
                      size={30}
                      color="black"
                      style={{ marginLeft: 10 }}
                      onPress={() => {
                      }}
                    />
                  ),
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        {/* </PersistGate> */}
      </Provider>
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
