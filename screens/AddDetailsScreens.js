import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../constants/colors';
import Input from '../components/Input';
import AddMinus from '../components/Addminus';
import SwitchButton from '../components/SwitchButton';
import ManySwitchButtons from '../components/ManySwitchButtons';
import ImagePickerComponent from '../components/ImagePickerComponent';
import Button from '../components/ui/Button';
import {useDispatch, useSelector} from 'react-redux';
import {addUnitSize} from '../store/redux/unitSizeSlice';
import {addBedR, minusBedR} from '../store/redux/bedRoomSlice';

const AddDetailsScreens = () => {
  const state = useSelector(state => state.unitSize);
  console.log(state);
  const {
    unitSize,
    bedRooms,
    bathRooms,
    guestRoom,
    lounges,
    furnished,
    kitchen,
    parking,
    electrialMeter,
    waterMeters,
    selectAcType,
    image,
  } = state;
  const dispatch = useDispatch();
  const [unitSizeState, setUnitSizeState] = useState(unitSize || '');
  // console.log(unitSize);
  //handle
  const [bedrooms, setBedrooms] = useState(0);
  const [bathrooms, setBathrooms] = useState(0);

  const handleAddBedrooms = () => {
    setBedrooms(bedrooms + 1);
    dispatch(addBedR());
  };

  const handleMinusBedrooms = () => {
    setBedrooms(bedrooms > 0 ? bedrooms - 1 : 0);
    dispatch(minusBedR());
  };

  const handleAddBathrooms = () => {
    setBathrooms(bathrooms + 1);
  };

  const handleMinusBathrooms = () => {
    setBathrooms(bathrooms > 0 ? bathrooms - 1 : 0);
  };

  function handleUnitSize(text) {
    setUnitSizeState(text);
    dispatch(addUnitSize(text));
  }
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
              keyboardType: 'default',
              placeholder: 'Enter Size',
              placeholderTextColor: Colors.borderColor,
              onChangeText: text => handleUnitSize(text),
              value: unitSizeState,
            }}
            style={styles.inputStyle}
          />
        </View>
        <View>
          <View style={styles.items}>
            <AddMinus
              label="Bedrooms"
              amountValue={bedrooms}
              onAdd={handleAddBedrooms}
              onMinus={handleMinusBedrooms}
            />
            <AddMinus
              label="Bathrooms"
              amountValue={bathrooms}
              onAdd={handleAddBathrooms}
              onMinus={handleMinusBathrooms}
            />
          </View>
          <View style={styles.items}>
            <AddMinus label="Bedrooms" />
            <AddMinus label="Bathrooms" />
          </View>
        </View>
        {/*  */}
        <View style={styles.items}>
          <SwitchButton label="Furnish" leftText="Yes" rightText="No" />
          <SwitchButton label="Kitchen" leftText="Close" rightText="Open" />
        </View>
        <View style={styles.items}>
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
          <ImagePickerComponent />
        </View>
        {/*  */}
      </View>
      <View style={styles.btnsStyles}>
        <Button btnStyle={styles.backBtnStyle} textStyle={styles.textBack}>
          Back
        </Button>
        <Button btnStyle={styles.nextBtnStyle} textStyle={styles.textNextStyle}>
          Next
        </Button>
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
  items: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  label: {
    fontSize: 12,
    color: Colors.primary200,
    marginBottom: 6,
    marginTop: 6,
  },
  image: {
    marginVertical: 8,
  },
  //
  btnsStyles: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 16,
    backgroundColor: 'white',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: {width: 0, height: -2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 4,
  },
  nextBtnStyle: {
    backgroundColor: 'white',
  },
  textBack: {
    color: Colors.greenColor,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  nextBtnStyle: {
    backgroundColor: Colors.greenColor,
  },
  textNextStyle: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
