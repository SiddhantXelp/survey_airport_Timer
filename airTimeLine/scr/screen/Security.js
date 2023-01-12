import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import Count from './Count';
import {Dropdown} from 'react-native-element-dropdown';

const weekData = [
  {label: 'Monday', value: '1'},
  {label: 'Tuesday', value: '2'},
  {label: 'Wednesday', value: '3'},
  {label: 'Thursday', value: '4'},
  {label: 'Friday', value: '5'},
  {label: 'Saturday', value: '6'},
  {label: 'Sunday', value: '7'},
];
const timeData = [
  {label: '12:00', value: '1'},
  {label: '1:00', value: '2'},
  {label: '2:00', value: '3'},
  {label: '3:00', value: '4'},
  {label: '4:00', value: '5'},
  {label: '5:00', value: '6'},
  {label: '6:00', value: '7'},
];
const domData = [
  {label: '1', value: '1'},
  {label: '2', value: '2'},
  {label: '3', value: '3'},
  {label: '4', value: '4'},
  {label: '5', value: '5'},
];

const Security = ({navigation}) => {
  const [date, onChangeDate] = React.useState('');
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [time, setTime] = useState(null);
  const [isTime, setIsTime] = useState(false);
  const [dom, setDom] = useState(null);
  const [isDom, setIsDom] = useState(false);

  return (
    <SafeAreaView
      style={{display: 'flex', alignItems: 'center', marginTop: 100}}>
      <View style={styles.option}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeDate}
          value={date}
          placeholder="Date"
        />
      </View>
      <View style={styles.option}>
        <Dropdown
          style={[styles.inputDrop]}
          placeholderStyle={styles.placeholder}
          selectedTextStyle={styles.selectedTextStyle}
          iconStyle={styles.iconStyle}
          data={weekData}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Day' : ''}
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
        />
      </View>
      <View style={styles.option}>
        <Dropdown
          style={[styles.inputDrop]}
          placeholderStyle={styles.placeholder}
          selectedTextStyle={styles.selectedTextStyle}
          iconStyle={styles.iconStyle}
          data={timeData}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isTime ? 'Slot time (Manual)' : ''}
          value={time}
          onFocus={() => setIsTime(true)}
          onBlur={() => setIsTime(false)}
          onChange={item => {
            setTime(item.time);
            setIsTime(false);
          }}
        />
      </View>
      <View style={styles.option}>
        <Dropdown
          style={[styles.inputDrop]}
          placeholderStyle={styles.placeholder}
          selectedTextStyle={styles.selectedTextStyle}
          iconStyle={styles.iconStyle}
          data={domData}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isDom ? 'DOM/Int' : ''}
          value={dom}
          onFocus={() => setIsDom(true)}
          onBlur={() => setIsDom(false)}
          onChange={item => {
            setDom(item.dom);
            setIsDom(false);
          }}
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate(Count)}
        style={styles.button}>
        <Text style={styles.text}>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonBack}>
        <Text style={styles.text}>Go Back</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // option: {flexDirection: 'row', justifyContent: 'space-between'},

  input: {
    height: 50,
    width: 300,
    margin: 20,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    fontSize: 16,
    paddingLeft: 10,
  },

  inputDrop: {
    height: 50,
    width: 300,
    margin: 20,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
  },
  placeholder: {
    fontSize: 16,
    paddingLeft: 10,
    color: '#a9a9a9',
  },
  selectedTextStyle: {
    color: '#000',
    paddingLeft: 10,
    fontWeight: '500',
  },
  iconStyle: {},

  button: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EA8B5B',
    borderRadius: 5,
    marginTop: 70,
    width: '80%',
    height: 42,
  },

  buttonBack: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
    borderRadius: 5,
    marginTop: 25,
    width: '80%',
    height: 42,
  },
  text: {
    fontSize: 15,
    color: 'white',
  },
});

export default Security;
