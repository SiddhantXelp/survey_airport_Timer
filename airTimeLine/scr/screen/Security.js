import {SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';

import React from 'react';

const Security = () => {
  const [text, onChangeText] = React.useState('');
  const [email, onChangeEmail] = React.useState('');

  return (
    <SafeAreaView>
      <View style={styles.option}>
        <Text style={styles.title}>Date</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
      </View>
      <View style={styles.option}>
        <Text style={styles.title}>Day</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          value={email}
        />
      </View>
      <View style={styles.option}>
        <Text style={styles.title}>Slot time (Manual)</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          value={email}
        />
      </View>
      <View style={styles.option}>
        <Text style={styles.title}>DOM/Int</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          value={email}
          //   placeholder="useless placeholder"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  option: {flexDirection: 'row', justifyContent: 'space-between'},

  input: {
    height: 35,
    width: '64%',
    margin: 12,
    elevation: 8,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 13,
    paddingTop: 15,
    paddingLeft: 10,
  },
});

export default Security;
