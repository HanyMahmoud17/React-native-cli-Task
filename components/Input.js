import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Colors } from '../constants/colors';

function Input({ label,textInputConfig }) {

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} {...textInputConfig} />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 20,
  },
  label: {
    fontSize: 12,
    color: Colors.primary200,
    marginBottom: 4,
  },
  input: {
    // backgroundColor: Colors.primary100,
    color: Colors.primary100,
    padding: 6,
    borderRadius: 5,
    fontSize: 16,
    borderWidth: 0.5,
    borderColor: Colors.borderColor,
    paddingHorizontal:10,
    paddingVertical:8,
    overflow:'hidden'
  },
});
