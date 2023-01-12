import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const Count = ({navigation}) => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [timeSec, setTimeSec] = useState(time);
  const [runningSec, setRunningSec] = useState(false);
  const [timeThree, setTimeThree] = useState(timeSec);
  const [runningThree, setRunningThree] = useState(false);

  // const milliseconds = time;

  // const seconds = milliseconds / 1000;

  // console.log(seconds, 'first timer'); // 76329.456

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 10);
      }, 10);

      // console.log(interval, 'iam interval');
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  // console.log(time, 'iam time');
  // console.log(timeSec, 'iam timeSec');

  useEffect(() => {
    let interval;
    if (runningSec) {
      interval = setInterval(() => {
        setTimeSec(prevTime => prevTime + 10);
      }, 10);
    } else if (!runningSec) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [runningSec]);

  useEffect(() => {
    let interval;
    if (runningThree) {
      interval = setInterval(() => {
        setTimeThree(prevTime => prevTime + 10);
      }, 10);

      // console.log(interval, 'iam interval');
    } else if (!runningThree) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [runningThree]);

  return (
    <SafeAreaView style={styles.container}>
      {/* First */}

      <View style={styles.sectionStyle}>
        <Text style={styles.watch}>
          {('0' + Math.floor((time / 60000) % 60)).slice(-2)}:
          {('0' + Math.floor((time / 1000) % 60)).slice(-2)}:
          {('0' + ((time / 10) % 100)).slice(-2)}
        </Text>
        <View style={styles.btnContainer}>
          <TouchableOpacity onPress={() => setRunning(true)}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Start</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setTimeSec(time);
              setRunning(false);
            }}>
            <View style={styles.buttonStop}>
              <Text style={styles.buttonText}>Stop</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* secondTimer */}

      <View style={styles.sectionStyle}>
        <Text style={styles.watch}>
          {('0' + Math.floor((timeSec / 60000) % 60)).slice(-2)}:
          {('0' + Math.floor((timeSec / 1000) % 60)).slice(-2)}:
          {('0' + ((timeSec / 10) % 100)).slice(-2)}
        </Text>
        <View style={styles.btnContainer}>
          <TouchableOpacity onPress={() => setRunningSec(true)}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Start</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setTimeThree(timeSec);
              setRunningSec(false);
            }}>
            <View style={styles.buttonStop}>
              <Text style={styles.buttonText}>Stop</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* ThirdTimer */}

      <View style={styles.sectionStyle}>
        <Text style={styles.watch}>
          {('0' + Math.floor((timeThree / 60000) % 60)).slice(-2)}:
          {('0' + Math.floor((timeThree / 1000) % 60)).slice(-2)}:
          {('0' + ((timeThree / 10) % 100)).slice(-2)}
        </Text>
        <View style={styles.btnContainer}>
          <TouchableOpacity onPress={() => setRunningThree(true)}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Start</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setRunningThree(false)}>
            <View style={styles.buttonStop}>
              <Text style={styles.buttonText}>Stop</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate(Count)}
        style={styles.buttonSub}>
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
    justifyContent: 'center',
    alignItems: 'center',
  },

  watch: {
    fontSize: 20,
    fontWeight: '800',
    color: '#696969',
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
