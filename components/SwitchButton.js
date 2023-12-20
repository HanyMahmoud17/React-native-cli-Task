import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import { Colors } from '../constants/colors';

const SwitchButton = ({label,leftText,rightText}) => {
  const [selectedTap, setSelectedTap] = useState(0);
  return (
    <View style={{flex:0.45}}>
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
              width: '50%',
              height: 60,
              backgroundColor: selectedTap === 0 ? '#21aa6e' : 'white',
              borderRadius: 15,
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
                alignItems:'center'
              }}>
              {leftText}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: '50%',
              height: 60,
              backgroundColor: selectedTap === 1 ? '#21aa6e' : 'white',
              borderRadius: 15,
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
             {rightText}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
  );
};

export default SwitchButton;

const styles = StyleSheet.create({
    label: {
        fontSize: 12,
        color: Colors.primary200,
        marginBottom: 4,
      },
});
