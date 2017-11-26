import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';

const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen },
});

export default class App extends React.Component {
  render() {
    return <SimpleApp style={styles.container} />;
    // return (
    //   <View>
    //     <Text>App, Navigation!</Text>
    //     <Text>App, Navigation!</Text>
    //     <Text>App, Navigation!</Text>
    //     <SimpleApp />
    //   </View>
    // );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
});
