import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import ImagePicker from 'react-native-image-crop-picker';
import { Colors } from '../constants/colors';


const ImagePickerComponent = () => {
  const upload=()=>{
    ImagePicker.openPicker({
      multiple: true
    }).then(images => {
      console.log(images);
    }).catch(err=>console.log(err))
  }
  // {/* <Button title='upload' onPress={upload} color='tomato'/> */}
  return (
    <View style={styles.screen}>
      <Image style={styles.image} source={require("../assets/images/imagePick.png")} />
      <Text style={styles.textStyle}>Select a Photo From Your Galary</Text>
      <TouchableOpacity style={styles.btn} onPress={upload}>
        <Text style={styles.btnText}>Choose File</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ImagePickerComponent

const styles = StyleSheet.create({
  screen:{
    flex: 1,
    height:250,
    borderWidth:0.5,
    borderStyle:'dashed',
    borderColor:'blue',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:8
  },
image:{
  width:75,
  height:75
},
textStyle:{
  fontSize:14,
  color:Colors.primary200,
  fontWeight:'400',
  paddingVertical:8
},
btn:{
  paddingTop:12,
  paddingHorizontal:80,
  paddingVertical:12,
  backgroundColor:Colors.btnColor
},
btnText:{
  color:Colors.greenColor,
}
})