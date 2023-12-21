import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Colors} from '../constants/colors';
import Input from '../components/Input';
import AddMinus from '../components/Addminus';
import SwitchButton from '../components/SwitchButton';
import ManySwitchButtons from '../components/ManySwitchButtons';
import ImagePickerComponent from '../components/ImagePickerComponent';
import Button from '../components/ui/Button';
import {useDispatch, useSelector} from 'react-redux';
import {
  addUnitSize,
  addBedR,
  minusBedR,
  loadStateFromAsyncStorage,
  addBathRoom,
  minusBathRoom,
  addGuestRoom,
  minusGuestRoom,
  addLounge,
  minusLounges,
  setFurnished,
  setKitchen,
  setParking,
  addElectricalMeter,
  addWaterMeter,
} from '../store/redux/homeSlice';

const AddDetailsScreens = () => {
  const state = useSelector(state => state.unitSize);
  const [localState, setLocalState] = useState({});
  //unitSize
  const [unitSizeState, setUnitSizeState] = useState();
  //Add and Minus Buttons
  const [bedrooms, setBedrooms] = useState(0);
  const [bathrooms, setBathrooms] = useState(0);
  const [guestrooms, setGuestRoom] = useState(0);
  const [lounge, setLounges] = useState(0);

  // switch buttons
  const [furnish, setFurnish] = useState();
  // electriacl and water
  const [electricalMeter, setElectriaclMeter] = useState();
  const [waterMeter, setWaterMeter] = useState();

  // console.log(state);
  const dispatch = useDispatch();
  useEffect(() => {
    const loadInitialState = async () => {
      const initialState = await loadStateFromAsyncStorage();
      setLocalState(initialState);
      if (initialState) {
        setUnitSizeState(initialState.unitSize);
        setBedrooms(initialState.bedRooms);
        setBathrooms(initialState.bathRooms);
        setGuestRoom(initialState.guestRoom);
        setLounges(initialState.lounges);
        setFurnish(initialState.furnished);
        setElectriaclMeter(initialState.electrialMeter);
        setWaterMeter(initialState.waterMeters);
        dispatch({type: 'HYDRATE', payload: initialState});
      }
    };

    loadInitialState();
  }, [dispatch]);
  useEffect(() => {
    setLocalState(state);
  }, [state]);

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
  } = localState;

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
    dispatch(addBathRoom());
  };

  const handleMinusBathrooms = () => {
    setBathrooms(bathrooms > 0 ? bathrooms - 1 : 0);
    dispatch(minusBathRoom());
  };

  const handleAddGuestRooms = () => {
    setGuestRoom(guestRoom + 1);
    dispatch(addGuestRoom());
  };

  const handleMinusGuestRooms = () => {
    setGuestRoom(guestRoom > 0 ? guestRoom - 1 : 0);
    dispatch(minusGuestRoom());
  };

  const handleAddLounges = () => {
    setLounges(lounge + 1);
    dispatch(addLounge());
  };

  const handleMinusLounges = () => {
    setLounges(lounge > 0 ? lounge - 1 : 0);
    dispatch(minusLounges());
  };

  function handleUnitSize(text) {
    setUnitSizeState(text);
    dispatch(addUnitSize(text));
  }
  function handleElectriaclMeter(text) {
    setElectriaclMeter(text);
    dispatch(addElectricalMeter(text));
  }
  function handleWaterMeter(text) {
    setWaterMeter(text);
    dispatch(addWaterMeter(text));
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
              keyboardType: 'decimal-pad',
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
            <AddMinus
              label="guestRoom"
              amountValue={guestrooms}
              onAdd={handleAddGuestRooms}
              onMinus={handleMinusGuestRooms}
            />
            <AddMinus
              label="Lounges"
              amountValue={lounge}
              onAdd={handleAddLounges}
              onMinus={handleMinusLounges}
            />
          </View>
        </View>
        {/*  */}
        <View style={styles.items}>
          <SwitchButton
            label="Furnish"
            leftText="Yes"
            rightText="No"
            onSelectionChange={selectedOption => {
              dispatch(setFurnished(selectedOption));
            }}
          />
          <SwitchButton
            label="Kitchen"
            leftText="Close"
            rightText="Open"
            onSelectionChange={selectedOption => {
              dispatch(setKitchen(selectedOption));
            }}
          />
        </View>
        <View style={styles.items}>
          <SwitchButton
            label="Parking"
            leftText="Split"
            rightText="Central"
            onSelectionChange={selectedOption => {
              dispatch(setParking(selectedOption));
            }}
          />
        </View>
        {/*  */}
        <View>
          <Input
            label="Electrical Meter No."
            textInputConfig={{
              keyboardType: 'decimal-pad',
              placeholder: 'Enter meter no.',
              placeholderTextColor: Colors.borderColor,
              onChangeText: text => handleElectriaclMeter(text),
              value: electrialMeter,
            }}
            style={styles.inputStyle}
          />
          <Input
            label="Water Meter No."
            textInputConfig={{
              keyboardType: 'decimal-pad',
              placeholder: 'Enter meter no.',
              placeholderTextColor: Colors.borderColor,
              onChangeText: text => handleWaterMeter(text),
              value: waterMeter,
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
