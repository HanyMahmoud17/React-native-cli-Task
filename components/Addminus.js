import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Colors} from '../constants/colors';

const AddMinus = ({label}) => {
  return (
    <View style={{flex:0.45}}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.screen}>
        <TouchableOpacity
          style={styles.borderBtn}
          onPress={() => {
            //   handleMinusQ(item._id);
          }}>
          <Text style={styles.borderBtnText}>-</Text>
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 20,
            // marginHorizontal: 15,
            fontWeight: 'bold',
            color: 'black',
          }}>
          5
        </Text>
        <TouchableOpacity
          style={styles.borderBtn}
          onPress={() => {
            //   handleAddQ(item._id);
          }}>
          <Text style={styles.borderBtnText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddMinus;

const styles = StyleSheet.create({
  screen: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: Colors.primary200,
    borderWidth: 0.5,
  },
  label: {
    fontSize: 12,
    color: Colors.primary200,
    marginBottom: 4,
  },
  borderBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',

    width:'50%'
  },
  borderBtnText: {
    fontWeight: 'bold',
    fontSize: 28,
    color: Colors.primary200,
    // paddingHorizontal: 15,
  },
});
