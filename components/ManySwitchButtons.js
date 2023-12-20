import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../constants/colors';

const ManySwitchButtons = ({label,firstText,secondText,thirdText,fourText}) => {
  const [selectedTap, setSelectedTap] = useState(0);
  return (
    <View style={{flex:1}}>
        <Text style={styles.label}>{label}</Text>
        <View
          style={{
            // width: '100%',
            height: 60,
            borderRadius: 15,
            borderWidth: 0.5,
            backgroundColor: 'white',
            flexDirection: 'row',
            alignItems: 'center',
            overflow:'hidden'
          }}>
          <TouchableOpacity
            style={{
              width: '25%',
              height: 60,
              backgroundColor: selectedTap === 0 ? '#21aa6e' : 'white',
              borderTopLeftRadius: 15,
              borderBottomLeftRadius:15,
            borderRightColor:'#FFFFFF',
            borderRightWidth: 1,
              justifyContent:'center',
              overflow: 'hidden',

            }}
            onPress={() => setSelectedTap(0)}>
            <Text
              style={{
                color: selectedTap === 0 ? '#fff' : '#000',
                fontSize: 14,
                fontWeight: '300',
                textAlign: 'center',
                alignItems:'center',
              }}>
              {firstText}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: '25%',
              height: 60,
              backgroundColor: selectedTap === 1 ? '#21aa6e' : 'white',
              borderWidth:0.5,
              borderColor:'#eee',
              justifyContent:'center',
              overflow: 'hidden',
            }}
            onPress={() => setSelectedTap(1)}>
            <Text
              style={{
                color: selectedTap === 1 ? '#fff' : '#000',
                fontSize: 14,
                fontWeight: '300',
                textAlign: 'center',
                alignItems:'center'
              }}>
             {secondText}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: '25%',
              height: 60,
              backgroundColor: selectedTap === 2 ? '#21aa6e' : 'white',
              borderWidth:0.5,
              borderColor:'#eee',
              justifyContent:'center',
              overflow: 'hidden',
            }}
            onPress={() => setSelectedTap(2)}>
            <Text
              style={{
                color: selectedTap === 2 ? '#fff' : '#000',
                fontSize: 14,
                fontWeight: '300',
                textAlign: 'center',
                alignItems:'center'
              }}>
             {thirdText}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: '25%',
              height: 60,
              backgroundColor: selectedTap === 3 ? '#21aa6e' : 'white',
              borderTopRightRadius: 15,
              borderBottomRightRadius:15,
              justifyContent:'center',
              overflow: 'hidden',
            }}
            onPress={() => setSelectedTap(3)}>
            <Text
              style={{
                color: selectedTap === 3 ? '#fff' : '#000',
                fontSize: 14,
                fontWeight: '300',
                textAlign: 'center',
                alignItems:'center'
              }}>
             {fourText}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
  )
}

export default ManySwitchButtons

const styles = StyleSheet.create({
  label: {
    fontSize: 12,
    color: Colors.primary200,
    marginBottom: 4,
  },
})