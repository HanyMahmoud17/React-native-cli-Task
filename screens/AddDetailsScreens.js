import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Colors} from '../constants/colors';
import Input from '../components/Input';
import AddMinus from '../components/Addminus';
import SwitchButton from '../components/SwitchButton';
import ManySwitchButtons from '../components/ManySwitchButtons';
import ImagePickerComponent from '../components/ImagePickerComponent';
import Button from '../components/ui/Button';

const AddDetailsScreens = () => {
  return (
    <ScrollView>
      <View style={styles.screen}>
        <View>
          <Text style={styles.headText}>Step 1 - Unit Details</Text>
          <Text style={styles.subHeaderText}>
            please enter the unit information below
          </Text>
        </View>
        <View>
          <Input
            label="Unit Size"
            textInputConfig={{
              keyboardType: 'decimal-pad',
              onChangeText: () => {},
              placeholder: 'Enter Size',
              placeholderTextColor: Colors.borderColor,
              // value: inputs.amount.value,
            }}
            style={styles.inputStyle}
          />
        </View>
        <View>
          <View style={styles.addNumberOfItems}>
            <AddMinus label="Bedrooms" />
            <AddMinus label="Bathrooms" />
          </View>
          <View style={styles.addNumberOfItems}>
            <AddMinus label="Bedrooms" />
            <AddMinus label="Bathrooms" />
          </View>
        </View>
        {/*  */}
        <View style={styles.selectItems}>
          <SwitchButton label="Furnish" leftText="Yes" rightText="No" />
          <SwitchButton label="Kitchen" leftText="Close" rightText="Open" />
        </View>
        <View style={styles.selectItems}>
          <SwitchButton label="Parking" leftText="Split" rightText="Central" />
        </View>
        {/*  */}
        <View>
          <Input
            label="Electrical Meter No."
            textInputConfig={{
              keyboardType: 'decimal-pad',
              onChangeText: () => {},
              placeholder: 'Enter meter no.',
              placeholderTextColor: Colors.borderColor,
              // value: inputs.amount.value,
            }}
            style={styles.inputStyle}
          />
          <Input
            label="Water Meter No."
            textInputConfig={{
              keyboardType: 'decimal-pad',
              onChangeText: () => {},
              placeholder: 'Enter meter no.',
              placeholderTextColor: Colors.borderColor,
              // value: inputs.amount.value,
            }}
            style={styles.inputStyle}
          />
        </View>
        {/*  */}
        <View>
          <ManySwitchButtons
            label="Select AC Type"
            firstText="split"
            secondText="second"
            thirdText="center"
            fourText="Not installed"
          />
        </View>
        {/*  */}
        <View style={styles.image}>
         <Text style={styles.label}>Upload Image</Text>
          <ImagePickerComponent/>
        </View>
        {/*  */}
        <View style={styles.btnsStyles}>
        <Button btnStyle={styles.backBtnStyle} textStyle={styles.textBack}>Back</Button>
        <Button btnStyle={styles.nextBtnStyle} textStyle={styles.textNextStyle}>Next</Button>
        </View>
      </View>
    </ScrollView>
  );
};

export default AddDetailsScreens;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  headText: {
    marginTop: 10,
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.primary100,
  },
  subHeaderText: {
    marginTop: 8,
    opacity: 0.7,
    color: Colors.primary100,
  },
  addNumberOfItems: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  selectItems: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  label: {
    fontSize: 12,
    color: Colors.primary200,
    marginBottom: 6,
    marginTop:6,
  },
  image:{
    marginVertical:8
  },
  // 
  btnsStyles:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  nextBtnStyle:{
    backgroundColor:'white'
  },
  textBack:{
    color:Colors.greenColor,
    textAlign: 'center',
    fontSize:18,
    fontWeight:'bold'
  },
  nextBtnStyle:{
    backgroundColor:Colors.greenColor,
  },
  textNextStyle:{
    textAlign: 'center',
    fontSize:18,
    fontWeight:'bold'
  }
});
