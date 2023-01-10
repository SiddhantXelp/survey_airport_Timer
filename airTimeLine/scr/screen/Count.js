import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

// importing library to use Stopwatch and Timer
import {Stopwatch} from 'react-native-stopwatch-timer';

const Count = () => {
  const [isStopwatchStart, setIsStopwatchStart] = useState(false);
  const [isStopwatchStart2, setIsStopwatchStart2] = useState(false);
  const [isStopwatchStart3, setIsStopwatchStart3] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.sectionStyle}>
        <Stopwatch
          laps
          msecs
          start={isStopwatchStart}
          options={options}
          getTime={time => {
            console.log(time);
          }}
        />
        <View style={styles.btnContainer}>
          <TouchableOpacity
            onPress={() => {
              setIsStopwatchStart(true);
            }}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>
                {!isStopwatchStart ? 'START' : 'START'}
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setIsStopwatchStart(false);
            }}>
            <View style={styles.buttonStop}>
              <Text style={styles.buttonText}>
                {isStopwatchStart ? 'STOP' : 'STOP'}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.sectionStyle}>
        <Stopwatch
          laps
          msecs
          start={isStopwatchStart2}
          options={options}
          getTime={time => {
            console.log(time);
          }}
        />
        <View style={styles.btnContainer}>
          <TouchableOpacity
            onPress={() => {
              setIsStopwatchStart2(true);
            }}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>
                {!isStopwatchStart ? 'START' : 'START'}
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setIsStopwatchStart2(false);
            }}>
            <View style={styles.buttonStop}>
              <Text style={styles.buttonText}>
                {isStopwatchStart2 ? 'STOP' : 'STOP'}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.sectionStyle}>
        <Stopwatch
          laps
          msecs
          start={isStopwatchStart3}
          options={options}
          getTime={time => {
            console.log(time);
          }}
        />
        <View style={styles.btnContainer}>
          <TouchableOpacity
            onPress={() => {
              setIsStopwatchStart3(true);
            }}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>
                {!isStopwatchStart ? 'START' : 'START'}
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setIsStopwatchStart3(false);
            }}>
            <View style={styles.buttonStop}>
              <Text style={styles.buttonText}>
                {isStopwatchStart ? 'STOP' : 'STOP'}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.buttonSub}>
        <Text style={styles.text}>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonBack}>
        <Text style={styles.text}>Go Back</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Count;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 10,
    // flexDirection: 'row',

    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 120,
    height: 40,
    backgroundColor: '#EA8B5B',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginLeft: 15,
  },
  buttonStop: {
    width: 120,
    height: 40,
    backgroundColor: '#000',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginLeft: 15,
  },

  sectionStyle: {
    flex: 1,
    marginTop: 32,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnContainer: {
    flexDirection: 'row',
  },
  buttonText: {
    fontSize: 13,
    color: '#fff',
    fontWeight: '800',
  },
  buttonSub: {
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
    marginBottom: 50,
  },
  text: {
    fontSize: 15,
    color: 'white',
  },
});

const options = {
  container: {
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 5,
    width: 150,
    alignItems: 'center',
    height: 50,
  },
  text: {
    fontSize: 20,
    color: '#000',
    marginLeft: 7,
  },
};
