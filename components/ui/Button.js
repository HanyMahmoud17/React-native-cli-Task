import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Colors } from '../../constants/colors'

const Button = ({btnStyle,children,textStyle}) => {
  return (
   <TouchableOpacity style={[styles.btn,btnStyle]}>
        <Text style={[styles.text,textStyle]}>{children}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    btn:{
        borderWidth:0.8,
        borderColor:Colors.greenColor,
        textAlign:'center',
        justifyContent:'center',
        flex:0.45,
        borderRadius:10
    },
    text:{
        fontSize:16,
        fontWeight:'bold',
        paddingHorizontal:22,
        paddingVertical:16
    }
})