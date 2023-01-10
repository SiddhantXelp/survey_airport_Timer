import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import Security from './Security';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [checkValidEmail, setCheckValidEmail] = useState(false);

  const [password, setPassword] = useState('');
  const [checkValidPassword, setCheckValidPassword] = useState(false);

  const handelCheckForm1 = text => {
    setEmail(text);
    if (text.trim() != 0) {
      setCheckValidEmail(false);
    } else {
      setCheckValidEmail(true);
    }
  };
  const handelCheckForm2 = text => {
    setPassword(text);
    if (text.trim() != 0) {
      setCheckValidPassword(false);
    } else {
      setCheckValidPassword(true);
    }
  };

  return (
    <ScrollView style={styles.form}>
      <Text style={styles.heading}>Signin</Text>
      <View style={{alignItems: 'center', marginTop: 35}}>
        <View style={styles.inputBox}>
          <TextInput
            onChangeText={text => handelCheckForm1(text)}
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#a9a9a9"
            value={email}
          />
        </View>
        {checkValidEmail ? (
          <Text style={styles.textFailed}>*Text should not be empty</Text>
        ) : (
          ''
        )}
        <View style={styles.inputBox}>
          <TextInput
            onChangeText={text => handelCheckForm2(text)}
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#a9a9a9"
            value={password}
          />
        </View>
        {checkValidPassword ? (
          <Text style={styles.textFailed}>*Text should not be empty</Text>
        ) : (
          ''
        )}

        {email === '' || password === '' || checkValidEmail === true ? (
          <TouchableOpacity disabled style={styles.buttonDisable}>
            <Text style={styles.text}>Signin</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.button}
            on_press={() => navigation.navigate(Security)}>
            <Text style={styles.text}>Signin</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity style={styles.buttonBack}>
          <Text style={styles.text}>Go Back</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Login;
const styles = StyleSheet.create({
  heading: {
    fontSize: 40,
    color: '#000',
    paddingLeft: 35,
    paddingTop: 150,
  },
  inputBox: {
    flex: 1,
    height: 45,
    width: '80%',
    flexDirection: 'row',
    backgroundColor: '#ededed',
    paddingHorizontal: 5,
    marginTop: 35,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#a9a9a9',
  },
  input: {
    position: 'relative',
    height: '100%',
    width: '90%',
    paddingLeft: 20,
    borderRadius: 70,
    fontSize: 16,
  },

  form: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
  },
  formText: {
    fontSize: 15,
    paddingTop: 15,
    paddingLeft: 10,
    color: '#000',
  },
  button: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EA8B5B',
    borderRadius: 5,
    marginTop: 80,
    width: '80%',
    height: 42,
  },
  buttonDisable: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EA8B5B',
    borderRadius: 5,
    marginTop: 80,
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
    // textAlign: 'center',
  },
  textFailed: {
    color: 'red',
    marginRight: 150,
  },
});
