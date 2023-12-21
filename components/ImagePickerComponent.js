import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import { Colors } from '../constants/colors';
import { addImage, loadStateFromAsyncStorage } from '../store/redux/homeSlice';
import { useDispatch, useSelector } from 'react-redux';

const ImagePickerComponent = () => {
  const dispatch = useDispatch();
  const images = useSelector((state) => state.unitSize.image);

  const upload = () => {
    ImagePicker.openPicker({
      multiple: true,
    })
      .then((selectedImages) => {
        const imagePaths = selectedImages.map((image) => image.path);
        // console.log(imagePaths);
        dispatch(addImage(imagePaths));
      })
      .catch((err) => console.log(err));
  };
 //// //
 const state = useSelector(state => state.unitSize);
 const [localState, setLocalState] = useState({});
 //
 const [imagesSelected,setImageSelected]=useState([]);
 

 // console.log(state);
 useEffect(() => {
   const loadInitialState = async () => {
     const initialState = await loadStateFromAsyncStorage();
     setLocalState(initialState);
     if (initialState) {
      //  setWaterMeter(initialState.waterMeters);
      setImageSelected(initialState.image)
       dispatch({type: 'HYDRATE', payload: initialState});
     }
   };

   loadInitialState();
 }, [dispatch]);
 useEffect(() => {
   setLocalState(state);
 }, [state]);


  return (
    <View style={styles.screen}>
    {(images.length > 0 || imagesSelected.length > 0) ? (
      <View style={styles.imageContainer}>
        {images.map((image, index) => (
          image && image.uri ? (
            <Image key={index} style={styles.image} source={{ uri: image.uri }} />
          ) : null
        ))}
        {imagesSelected.map((image, index) => (
          image && image.uri ? (
            <Image key={index} style={styles.image} source={{ uri: image.uri }} />
          ) : null
        ))}
      </View>
      ) : (
        <>
          <Image style={styles.image} source={require('../assets/images/imagePick.png')} />
          <Text style={styles.textStyle}>Select a Photo From Your Gallery</Text>
          <TouchableOpacity style={styles.btn} onPress={upload}>
            <Text style={styles.btnText}>Choose File</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default ImagePickerComponent;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    height: 250,
    borderWidth: 0.5,
    borderStyle: 'dashed',
    borderColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  image: {
    width: 75,
    height: 75,
    margin: 8,
  },
  textStyle: {
    fontSize: 14,
    color: Colors.primary200,
    fontWeight: '400',
    paddingVertical: 8,
  },
  btn: {
    paddingTop: 12,
    paddingHorizontal: 80,
    paddingVertical: 12,
    backgroundColor: Colors.btnColor,
  },
  btnText: {
    color: Colors.greenColor,
  },
});
