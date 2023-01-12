import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';

const App = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [timeSec, setTimeSec] = useState(time);
  const [runningSec, setRunningSec] = useState(false);

  const milliseconds = time;

  const seconds = milliseconds / 1000;

  console.log(seconds, 'first timer'); // 76329.456

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 10);
      }, 10);

      console.log(interval, 'iam interval');
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  console.log(time, 'iam time');
  console.log(timeSec, 'iam timeSec');

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
  return (
    <View>
      <View>
        <Text>
          {('0' + Math.floor((time / 60000) % 60)).slice(-2)}:
          {('0' + Math.floor((time / 1000) % 60)).slice(-2)}:
          {('0' + ((time / 10) % 100)).slice(-2)}
        </Text>
      </View>
      <View>
        <button onClick={() => setRunning(true)}>Start</button>
        <button
          onClick={() => {
            setTimeSec(time);
            setRunning(false);
          }}>
          Stop
        </button>
      </View>
      <View>
        <Text>{('0' + Math.floor((timeSec / 60000) % 60)).slice(-2)}:</Text>
        <Text>{('0' + Math.floor((timeSec / 1000) % 60)).slice(-2)}:</Text>
        <Text>{('0' + ((timeSec / 10) % 100)).slice(-2)}</Text>
      </View>
      <View>
        <button onClick={() => setRunningSec(true)}>Start</button>
        <button onClick={() => setRunningSec(false)}>Stop</button>
      </View>
    </View>
  );
};
export default App;
